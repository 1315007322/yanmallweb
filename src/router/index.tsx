import Home from 'Src/views/home';
import UserCenter from 'Src/views/user/userCenter';

const myRoutes = [
    {
        path: '/',
        ele: <Home />,
        children: []
    },
    {
        path: '/user',
        ele: <UserCenter />,
        children: []
    }
]

export default myRoutes;