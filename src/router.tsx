import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/Pages/HomePage.tsx";
import NotFoundPage from "./components/Pages/NotFoundPage.tsx";
import Header from "./components/common/Header/Header.tsx";
import Footer from "./components/common/Footer/Footer.tsx";
import AboutPage from "./components/Pages/AboutPage.tsx";
import BlogPage from "./components/Pages/BlogPage.tsx";
import ActivityPage from "./components/Pages/ActivityPage.tsx";
import Booking from "./components/Pages/Booking.tsx";

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
    path: "/activity/:id",
    element: (
      <>
        <Header />
        <ActivityPage />
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
        <BlogPage />
        {/* <AboutPage /> */}
        <Footer />
      </>
    ),
  },
  {
    path: "/booking/:id",
    element: (
      <>
        <Header />
        <Booking />
        <Footer />
      </>
    ),
  },
]);
