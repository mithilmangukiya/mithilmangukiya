const API_URL = import.meta.env?.VITE_API_URL || 'http://localhost:5000'

const request = async (path, options = {}) => {
  const res = await fetch(`${API_URL}${path}`, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  })

  const data = await res.json().catch(() => ({}))
  if (!res.ok) {
    const message = data?.message || 'Request failed'
    throw new Error(message)
  }
  return data
}

export const login = (payload) => request('/api/auth/login', { method: 'POST', body: JSON.stringify(payload) })
export const signup = (payload) => request('/api/auth/signup', { method: 'POST', body: JSON.stringify(payload) })
export const logout = () => request('/api/auth/logout', { method: 'POST' })
export const me = () => request('/api/auth/me', { method: 'GET' })

