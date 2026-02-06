import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayouot.jsx";
import Login from "../pages/Auth/Login.jsx";
import Home from "../pages/Home/Home.jsx";
import Registration from "../pages/Auth/Registration.jsx";
import Services from "../pages/Services/Services.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import MyServices from "../pages/MyServices/MyServices.jsx";
import AddService from "../pages/AddService/AddService.jsx";
import MyBookings from "../pages/MyBookings/MyBookings.jsx";
import Profile from "../pages/Profile/Profile.jsx";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile.jsx";
import EditSerive from "../pages/EditService/EditSerive.jsx";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails.jsx";
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/*",
        Component: ErrorPage,
      },
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Registration,
      },
      {
        path: "/home",
        Component: Home,
      },
      {
        path: "/services",
        Component: Services,
        loader: () => fetch('https://home-fixo-server.vercel.app/services')
      },
      {
        path: "/service-details/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
        loader: ({params}) => fetch(`https://home-fixo-server.vercel.app/service-details/${params.id}`)
      },
      {
        path: "/my-services",
        element: (
          <PrivateRoute>
            <MyServices></MyServices>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-service",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-bookings",
        element: (
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: `/edit-service/:id`,
        element: (
          <PrivateRoute>
            <EditSerive></EditSerive>
          </PrivateRoute>
        ),
        loader: ({params}) => fetch(`https://home-fixo-server.vercel.app/service-details/${params.id}`),
      },
    ],
  },
]);

export default router;
