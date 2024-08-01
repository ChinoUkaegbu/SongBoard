import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import DemoPage from "./pages/DemoPage";
import Layout from "./pages/Layout";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import PinterestSelectionsPage from "./pages/PinterestSelectionsPage";
import Playlist from "./pages/Playlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "demo", element: <DemoPage /> },
      { path: "privacy-policy", element: <PrivacyPolicyPage /> },
      { path: "pinterest-select", element: <PinterestSelectionsPage /> },
      { path: "playlist", element: <Playlist /> },
    ],
  },
  { path: "/login", element: <LoginPage /> },
]);

export default router;
