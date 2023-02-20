import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { Loading, Leyout } from './components';


// ::: pages
const List = React.lazy(() => import('./pages/List'));


const App = () => {

    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const Layout = () => {
        return (
            <React.Fragment>
                <Leyout>
                    <Outlet />
                </Leyout>
            </React.Fragment>
        );
    }

    const routes = [
        { path: `/`, element: List, auth: false, },
    ];

    if (loading) {
        return <Loading spinning={true} />;
    }

    return (
        <React.Fragment>
            <Loading />
            <BrowserRouter>
                <React.Suspense fallback={<Loading spinning={true} />}>
                    <Routes>
                        <Route element={<Layout />}>
                            {/* <Route index element={<Farms />} /> */}
                            {routes.map(route => (
                                <Route key={route.path} path={route.path} element={<route.element />} />
                            ))}
                        </Route>
                    </Routes>
                </React.Suspense>
            </BrowserRouter>
        </React.Fragment>
    );
};

export default App;