import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/Pages/HomePage.tsx";
import ClimbingPage from "./components/Pages/ClimbingPage.tsx";
import KayakPage from "./components/Pages/KayakPage.tsx";
import SnowshoesPage from "./components/Pages/SnowshoesPage.tsx";
import NotFoundPage from "./components/Pages/NotFoundPage.tsx";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import AboutPage from "./components/Pages/AboutPage.tsx";
import BlogPage from "./components/Pages/BlogPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <HomePage />
        <Footer />
      </>
    ),
    errorElement: <NotFoundPage />,
  },
  {
    path: "/climbing",
    element: (
      <>
        <Header />
        <ClimbingPage />
        <Footer />
      </>
    ),
  },
  {
    path: "/kayak",
    element: (
      <>
        <Header />
        <KayakPage />
        <Footer />
      </>
    ),
  },
  {
    path: "/snowshoes",
    element: (
      <>
        <Header />
        <SnowshoesPage />
        <Footer />
      </>
    ),
  },
  {
    path: "/blog",
    element: (
      <>
        <Header />
        <BlogPage />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Header />
        <AboutPage />
        <Footer />
      </>
    ),
  },
]);
