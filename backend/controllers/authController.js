const bcrypt = require('bcrypt')
const User = require('../models/User')

// Create a new user and start a session
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email, and password are required' })
    }

    const existing = await User.findOne({ email })
    if (existing) {
      return res.status(409).json({ message: 'Email already registered' })
    }

    const passwordHash = await bcrypt.hash(password, 10)
    const user = await User.create({ name, email, passwordHash })

    req.session.userId = user._id
    res.status(201).json({ id: user._id, name: user.name, email: user.email })
  } catch (error) {
    console.error('Signup error', error)
    res.status(500).json({ message: 'Signup failed' })
  }
}

// Login and start a session
const login = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' })
    }

    const user = await User.findOne({ email })
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    const match = await bcrypt.compare(password, user.passwordHash)
    if (!match) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    req.session.userId = user._id
    res.json({ id: user._id, name: user.name, email: user.email })
  } catch (error) {
    console.error('Login error', error)
    res.status(500).json({ message: 'Login failed' })
  }
}

// Destroy session
const logout = (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('connect.sid')
    res.json({ message: 'Logged out' })
  })
}

// Return current user if session is present
const me = async (req, res) => {
  try {
    if (!req.session.userId) {
      return res.status(401).json({ message: 'Not authenticated' })
    }
    const user = await User.findById(req.session.userId).select('name email')
    if (!user) {
      return res.status(401).json({ message: 'Not authenticated' })
    }
    res.json({ id: user._id, name: user.name, email: user.email })
  } catch (error) {
    console.error('Me endpoint error', error)
    res.status(500).json({ message: 'Could not fetch user' })
  }
}

module.exports = { signup, login, logout, me }

