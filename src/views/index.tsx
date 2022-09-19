
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
            <div className="site-layout-content">
                <Routes>
                    {getRoute()}
                </Routes>
            </div>
        </Content>

    )


}
export default Home;

