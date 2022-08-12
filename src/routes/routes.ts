import NotFound from '~/layouts/NotFound';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Profile from '~/pages/Profile';
import Register from '~/pages/Register';
// Different Layout
import About from '~/layouts/components/Profile/About';
import Friend from '~/layouts/components/Profile/Friend';
import ProfileLayout from '~/layouts/ProfileLayout';
import ActiveAccount from '~/pages/ActiveAccount';
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
        layout: ProfileLayout,
    },
    {
        path: '/profile/about',
        Component: About,
        layout: ProfileLayout,
    },
    {
        path: '/profile/friends',
        Component: Friend,
        layout: ProfileLayout,
    },
    {
        path: '/login',
        Component: Login,
        layout: null,
    },
    {
        path: '/active',
        Component: ActiveAccount,
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
