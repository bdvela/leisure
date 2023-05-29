import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PagesLayout from '../layout/PagesLayout';
import Home from '../pages/Home';
const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PagesLayout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default MyRoutes;
