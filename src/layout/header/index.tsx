import { Button, Dropdown, Menu, message, Space } from "antd";
import { Header } from "antd/lib/layout/layout";
import { useEffect, useState } from "react";
import LoginOrRegModal from "Src/components/LoginOrRegModal";
import logo from 'Assets/logo.png'
import { DownOutlined } from '@ant-design/icons';
import { history } from 'Utils/route'

const index = () => {
    const [open, setOpen] = useState(false);
    const [type, setType] = useState<'LOGIN' | 'REGISTER'>('LOGIN');
    const [user, setUser] = useState<any>(JSON.parse(localStorage.getItem("user") || '{}'));

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user") || '{}'))
    }, [type, open])


    const handleLoginOrReg = (type: 'LOGIN' | 'REGISTER') => {
        setOpen(true)
        setType(type)
    }

    //弹窗的ok事件
    const handleOk = () => {
        setOpen(false)
    }

    //弹窗的cancel事件
    const handleCancel = () => {
        setOpen(false)
    }


    const loginOut = () => {
        setUser({})
        localStorage.clear()
        message.success("退出成功")
    }

    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <span onClick={() => history.push("/user")}>
                            个人中心
                        </span>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <span onClick={() => loginOut()}>
                            退出登录
                        </span>
                    ),
                },
            ]}
        />
    );


    return (
        <Header id="header">
            <div className="logo" >
                <img src={logo} alt="" />
            </div>
            <div>
                {user.username != null ? (
                    <div>
                        <div style={{ color: '#fff' }}>
                            <Dropdown overlay={menu} placement="bottomLeft">
                                <a onClick={e => e.preventDefault()}>
                                    <Space>
                                        尊贵的 {user.username} ~  <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>
                    </div>

                ) : (<div>
                    <Button
                        style={{ marginRight: '30px' }}
                        onClick={() => handleLoginOrReg("REGISTER")}
                    >
                        注册
                    </Button>
                    <Button onClick={() => handleLoginOrReg("LOGIN")} >
                        请登录
                    </Button>
                </div>

                )}
            </div>

            <LoginOrRegModal
                open={open}
                handleOk={handleOk}
                handleCancel={handleCancel}
                type={type}
                changeType={(type: "LOGIN" | "REGISTER") => {
                    setType(type)
                }}
            />
        </Header >
    )
}




export default index