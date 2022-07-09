import Profile from '~/pages/Profile';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import NotFound from '~/layouts/NotFound';
import Home from '~/pages/Home';
// Different Layout
import Footer from '~/layouts/FooterLayout';
interface Routes {
    path: string;
    Component: React.ComponentType;
    layout?: null | any;
}

const privateRoutes: Routes[] = [
    {
        path: '/',
        Component: Home,
    },
];

const publicRoutes: Routes[] = [
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
        layout: null,
    },
    {
        path: '*',
        Component: NotFound,
        layout: null,
    },
];

export { publicRoutes, privateRoutes };
