import { Routes, Route } from "react-router-dom";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import LandingPage from "../pages/others/LandingPage";

const PagesRoutes = (): JSX.Element => {
    return (
        <>
            {/* Navbar */}
            <Navbar />

            {/* Page routes */}
            <Routes>
                <Route path='/landing/page' element={<LandingPage />} />
            </Routes>

            {/* Footer */}
            <Footer />
        </>
    );
};

export default PagesRoutes;