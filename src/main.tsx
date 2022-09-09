import 'Assets/common.css'
import { createRoot } from "react-dom/client";
import { history, HistoryRouter } from 'Utils/route'
import { Route, Routes } from 'react-router-dom';
import myRoutes from 'Src/router/index';

const container = createRoot(document.getElementById('root'))

const getRoute = () => {
    const result:any = []
    myRoutes.map(item => { 
        result.push(<Route path={item.path} element={item.ele}/>)
    })
    return result;
}

container.render(
    <HistoryRouter history={history}>
        <Routes>
            {getRoute()}
        </Routes>
    </HistoryRouter>,
    
)