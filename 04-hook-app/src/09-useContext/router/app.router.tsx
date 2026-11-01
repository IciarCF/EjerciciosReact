
import { AboutPage } from "../pages/about/AboutPage";
import { ProfilePage } from "../pages/profile/ProfilePage";
import { LoginPage } from "../pages/auth/LoginPage";
import { PrivateRouter } from "./PrivateRouter";
import { createBrowserRouter, Navigate } from "react-router";


export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AboutPage/>,
  },
  {
    path: "/profile",
    element: <PrivateRouter element={<ProfilePage/>}/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: '*',
    element: <Navigate to='/'/>
  }
]);
