import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import ScrollToTop from "./components/ScrollToTop";


export default function App() {
  return (
    <>
      <ScrollToTop />
  
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profil/:slug" element={<ProfilePage />} />
        <Route path="/registracija" element={<RegisterPage />} />
      </Routes>
    </>
  );
}