import { Button, Checkbox, Form, Input, Typography } from 'antd'
import { LockOutlined, MailOutlined } from '@ant-design/icons'

const Login = ({ onSwitchPage }) => {
  const handleFinish = (values) => {
    console.log('Login submit', values)
  }

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-gray-50">
      <div className="bg-white shadow-md rounded-2xl p-10 w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <Typography.Title level={3} className="!mb-0 text-teal-900">Welcome back</Typography.Title>
          <Typography.Text type="secondary">Login to access your dashboard</Typography.Text>
        </div>

        <Form layout="vertical" onFinish={handleFinish} requiredMark={false} className="space-y-4">
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
            rules={[{ required: true, message: 'Please enter your password' }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="••••••••" size="large" />
          </Form.Item>

          <div className="flex items-center justify-between">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Button type="link" className="p-0 text-emerald-600">Forgot password?</Button>
          </div>

          <Button type="primary" htmlType="submit" className="w-full bg-emerald-600" size="large">
            Login
          </Button>
        </Form>

        <div className="text-center text-sm text-gray-600">
          Don’t have an account?{' '}
          <Button
            type="link"
            className="p-0 text-emerald-600"
            onClick={() => onSwitchPage?.('sign-up')}
          >
            Sign up
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Login

