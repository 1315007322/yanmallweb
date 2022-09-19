import { Button, Checkbox, Form, Input, message, Modal } from "antd"
import { login, register } from 'Src/api/home'

const LoginOrRegModal = (props: {
    open: boolean,
    handleOk: () => void,
    handleCancel: () => void,
    type: 'LOGIN' | 'REGISTER',
    changeType: (type: 'LOGIN' | 'REGISTER') => void

}) => {

    const { open, handleOk, handleCancel, type, changeType } = props

    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        if (type === "LOGIN") {
            login(values).then(
                (res: any) => {
                    message.success("登录成功")
                    localStorage.setItem("token", res.token)
                    localStorage.setItem("user", JSON.stringify(res.user))
                    console.log(res);
                    form.resetFields();
                    handleOk()
                }
            ).catch(e => {
                console.log("e", e);
            })
        } else {
            register(values).then(
                res => {
                    message.success("注册成功，请登录~")
                    console.log(res);
                    form.resetFields();
                    changeType("LOGIN")
                    handleOk()
                }
            ).catch(e => {
                console.log("e", e);
            })
        }


    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };



    return (
        <Modal
            title={type == "LOGIN" ? "登录" : "注册"}
            open={open}
            onCancel={() => {
                form.resetFields();
                handleCancel()
            }}
            footer={null}
        >
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                form={form}
            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={[{ required: true, message: '请输入用户名' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="pwd"
                    rules={[{ required: true, message: '请输入密码！' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default LoginOrRegModal