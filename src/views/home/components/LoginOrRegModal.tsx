import { Button, Checkbox, Form, Input, message, Modal } from "antd"
import { useState } from "react";
import { register } from 'Src/api/home'

const LoginOrRegModal = (props: {
    open: boolean,
    handleOk: () => void,
    handleCancel: () => void,
    type: 'LOGIN' | 'REGISTER'
}) => {

    const { open, handleOk, handleCancel, type } = props

    const onFinish = (values: any) => {
        console.log('Success:', values);
        register(values).then(
            res => {
                message.success("请求成功")
                console.log(res);
                handleOk()
            }
        ).catch(e => {
            console.log("e", e);
            message.error("请求失败")

        })

    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };



    return (
        <Modal
            title={type == "LOGIN" ? "登录" : "注册"}
            open={open}
            onOk={handleOk}
            onCancel={handleCancel}
            okText={"提交"}
            cancelText={"取消"}
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