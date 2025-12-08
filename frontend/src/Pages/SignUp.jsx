import { Button, Checkbox, Form, Input, Typography } from 'antd'
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons'

const SignUp = ({ onSwitchPage }) => {
  const handleFinish = (values) => {
    console.log('Sign up submit', values)
  }

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-gray-50">
      <div className="bg-white shadow-md rounded-2xl p-10 w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <Typography.Title level={3} className="!mb-0 text-teal-900">Create your account</Typography.Title>
          <Typography.Text type="secondary">Sign up to start managing your store</Typography.Text>
        </div>

        <Form layout="vertical" onFinish={handleFinish} requiredMark={false} className="space-y-4">
          <Form.Item
            label="Full name"
            name="name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="John Doe" size="large" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Enter a valid email address' },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="you@example.com" size="large" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: 'Please create a password' },
              { min: 6, message: 'Password should be at least 6 characters' },
            ]}
            hasFeedback
          >
            <Input.Password prefix={<LockOutlined />} placeholder="••••••••" size="large" />
          </Form.Item>

          <Form.Item
            label="Confirm password"
            name="confirm"
            dependencies={['password']}
            hasFeedback
            rules={[
              { required: true, message: 'Please confirm your password' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(new Error('Passwords do not match'))
                },
              }),
            ]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="••••••••" size="large" />
          </Form.Item>

          <Form.Item
            name="terms"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject(new Error('Please accept the terms')),
              },
            ]}
          >
            <Checkbox>
              I agree to the terms and conditions
            </Checkbox>
          </Form.Item>

          <Button type="primary" htmlType="submit" className="w-full bg-emerald-600" size="large">
            Create account
          </Button>
        </Form>

        <div className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Button
            type="link"
            className="p-0 text-emerald-600"
            onClick={() => onSwitchPage?.('login')}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SignUp

