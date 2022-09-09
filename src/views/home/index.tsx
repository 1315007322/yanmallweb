
import { Breadcrumb, Layout, Menu, Carousel, Button } from 'antd';
import { useState } from 'react';
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
    const [open, setOpen] = useState(true);
    const [type, setType] = useState<'LOGIN' | 'REGISTER'>('LOGIN');


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



    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <div>
                    <Button
                        style={{ marginRight: '30px' }}
                        onClick={() => handleLoginOrReg("REGISTER")}
                    >
                        注册
                    </Button>
                    <Button onClick={() => handleLoginOrReg("LOGIN")} >
                        登录
                    </Button>
                </div>
            </Header>
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
            />
        </Layout >

    )


}
export default Home;

