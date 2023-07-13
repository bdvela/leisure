import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PagesLayout from '../layout/PagesLayout';
import Home from '../pages/Home';
import MyTeam from '../pages/MyTeam';
import MyEarnings from '../pages/MyEarnings';
import Settings from '../pages/Settings';

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PagesLayout />}>
                    <Route index element={<Home />} />
                    <Route path="myTeam" element={<MyTeam />} />
                    <Route path="myEarnings" element={<MyEarnings />} />
                    <Route path="settings" element={<Settings />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default MyRoutes;
