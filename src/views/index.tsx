
import { Breadcrumb, Layout, CarouselProps, Carousel } from 'antd';
const { Content } = Layout;



import { Route, Routes } from 'react-router-dom';
import myRoutes from 'Src/router/index';

const Home: React.FC = () => {


    const getRoute = () => {
        const result: any = []
        myRoutes.map(item => {
            result.push(<Route path={item.path} element={item.ele} />)
        })
        return result;
    }


    return (
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

                <Routes>
                    {getRoute()}
                </Routes>

            </div>
        </Content>

    )


}
export default Home;

