import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import Support from "./pages/Support/Support";

const Layout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/support",
        element: <Support />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
