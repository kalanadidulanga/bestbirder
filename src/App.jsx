import Navbar from "./components/Navbar"
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home"
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Tours from "./pages/Tours";
import Gallery from "./pages/Gallery";
import Policy from "./pages/Policy";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import './app.css'
import { AnimatePresence } from "framer-motion";
import { Toaster } from "./components/ui/toaster";
import BestLocations from "./pages/BestLocations";
import AllReviews from "./pages/AllReviews";
import Login from "./pages/adminPages/Login";
import Dashboard from "./pages/adminPages/Dashboard";
import ClientLayout from "./layouts/ClientLayout";
import SingleTour from "./pages/SingleTour";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminLayout from "./layouts/AdminLayout";
import Reviews from "./pages/adminPages/Reviews";
import AdminGallery from "./pages/adminPages/Gallery";
import Profile from "./pages/adminPages/Profile";

function App() {

  const location = useLocation();

  return (
    <>
      {/* <Navbar /> */}
      <Routes location={location} key={location.pathname}>
        <Route element={<ClientLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/tours/:tour" element={<SingleTour />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/contact_us" element={<ContactUs />} />
          <Route path="/locations" element={<BestLocations />} />
          <Route path="/all_reviews" element={<AllReviews />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route element={<ProtectedRoute />}>
            <Route index element={<Dashboard />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="gallery" element={<AdminGallery />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>

      <Toaster />
      {/* <Footer/> */}
    </>
  )
}

export default App
