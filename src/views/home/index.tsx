
import { Breadcrumb, Layout, Menu, Carousel, Button, message } from 'antd';
import { useEffect, useState } from 'react';
import LoginOrRegModal from './components/LoginOrRegModal';
const { Header, Content, Footer } = Layout;


const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};


const Home: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [type, setType] = useState<'LOGIN' | 'REGISTER'>('LOGIN');
    const [user, setUser] = useState<any>(JSON.parse(localStorage.getItem("user") || '{}'));

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user") || '{}'))
    }, [type, open])
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };


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
        <Layout className="layout">
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
            </Header >
            <Content
                style={{
                    padding: '0 50px',
                }}
            >
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">

                    <Carousel afterChange={onChange}>
                        <div>
                            <h3 style={contentStyle}>1</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>2</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>3</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>4</h3>
                        </div>
                    </Carousel>

                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Ant Design ©2018 Created by Ant UED
            </Footer>

            <LoginOrRegModal
                open={open}
                handleOk={handleOk}
                handleCancel={handleCancel}
                type={type}
                changeType={(type: "LOGIN" | "REGISTER") => {
                    setType(type)
                }}
            />
        </Layout >

    )


}
export default Home;

