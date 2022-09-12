import { Button, message } from "antd";
import { Header } from "antd/lib/layout/layout";
import { useEffect, useState } from "react";
import LoginOrRegModal from "Src/components/LoginOrRegModal";


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

    return (
        <Header>
            <div className="logo" >

            </div>
            <div>
                {user.username != null ? (
                    <div>
                        <div style={{ color: '#fff' }}>
                            欢迎： {user.username} !!
                            <Button
                                style={{ marginLeft: '30px' }}
                                onClick={() => loginOut()}
                            >
                                退出登录
                            </Button>
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