import "./styles/base.css";
import "./styles/animations.css";
import "./styles/buttons.css";
import "./styles/header.css";
import "./styles/home.css";
import "./styles/profile.css";
import "./styles/search.css";
import "./styles/register.css";
import "./styles/admin.css";
import "./styles/responsive.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import ScrollToTop from "./components/ScrollToTop";
import RequestSentPage from "./pages/RequestSentPage";
import AdminRequestsPage from "./pages/AdminRequestsPage";


export default function App() {
  return (
    <>
      <ScrollToTop />
  
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profil/:slug" element={<ProfilePage />} />
        <Route path="/registracija" element={<RegisterPage />} />
        <Route path="/zahtev-poslat" element={<RequestSentPage />} />
        <Route path="/admin/zahtevi" element={<AdminRequestsPage />} />
      </Routes>
    </>
  );
}