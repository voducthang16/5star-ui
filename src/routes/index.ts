import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Login from '~/pages/Login';
import Register from '~/pages/Register';

import Footer from '~/layouts/FooterLayout';

interface Routes {
    path: string;
    Component: React.ComponentType;
    layout?: null | any;
}

const publicRoutes: Routes[] = [
    {
        path: '/',
        Component: Home,
    },
    {
        path: '/profile',
        Component: Profile,
    },
    {
        path: '/login',
        Component: Login,
        layout: null,
    },
    {
        path: '/register',
        Component: Register,
        layout: Footer,
    },
];

export { publicRoutes };
