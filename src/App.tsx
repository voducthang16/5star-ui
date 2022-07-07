import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/layouts/';
import { DefaultLayoutProps } from '~/layouts/DefaultLayout';

function FragmentLayout({ Children }: DefaultLayoutProps) {
    return <Children />;
}

function DifferentLayout() {}

function App() {
    return (
        <Router>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.Component;

                    let Layout = DefaultLayout;
                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = FragmentLayout;
                    }
                    return <Route key={index} path={route.path} element={<Layout Children={Page} />} />;
                })}
            </Routes>
        </Router>
    );
}

export default App;
