import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout/MainLayout";
import ProductsLoader from "@/loaders/Products";
const Error = lazy(() => import("@/pages/Error"));
const Home = lazy(() => import("@/pages/Home"));
const AboutUs = lazy(() => import("@/pages/AboutUs"));
const Cart = lazy(() => import("@/pages/Cart"));
const Categories = lazy(() => import("@/pages/Categories"));
const Login = lazy(() => import("@/pages/Login"));
const Products = lazy(() => import("@/pages/Products"));
const Register = lazy(() => import("@/pages/Register"));
const Wishlist = lazy(() => import("@/pages/Wishlist"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback="Loading..., please wait">
            <Home />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback="Loading..., please wait">
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "wishlist",
        element: (
          <Suspense fallback="Loading..., please wait">
            <Wishlist />
          </Suspense>
        ),
      },
      {
        path: "about-us",
        element: (
          <Suspense fallback="Loading..., please wait">
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "categories",
        element: (
          <Suspense fallback="Loading..., please wait">
            <Categories />
          </Suspense>
        ),
      },
      {
        path: "categories/products/:prefix",
        element: (
          <Suspense fallback="Loading..., please wait">
            <Products />
          </Suspense>
        ),
        loader: ({ params }) => ProductsLoader({ params }),
      },
      {
        path: "login",
        element: (
          <Suspense fallback="Loading..., please wait">
            <Login />
          </Suspense>
        ),
      },
      {
        path: "register",
        element: (
          <Suspense fallback="Loading..., please wait">
            <Register />
          </Suspense>
        ),
      },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
