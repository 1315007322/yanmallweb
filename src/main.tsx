import 'Assets/common.less'
import { createRoot } from "react-dom/client";
import { history, HistoryRouter } from 'Utils/route'
import Layout from 'antd/lib/layout/layout';
import View from './views'
import Header from './layout/header';
import Footer from './layout/footer';

const container = createRoot(document.getElementById('root'))


container.render(
    <HistoryRouter history={history}>
        <Layout className="layout">
            <Header />
            <View />
            <Footer />
        </Layout >

    </HistoryRouter>,

)