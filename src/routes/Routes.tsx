import { lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const MainLayout = lazy(() => import("@/layouts/MainLayout/MainLayout"));
import ProductsLoader from "@/loaders/Products";
import { LottieHandler, PageSuspense } from "@/components/feedback";
import { Error } from "@/pages";

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
    element: (
      <Suspense
        fallback={
          <div style={{ marginTop: "10%" }}>
            <LottieHandler type="loading" msg="Loading please wait..." />
          </div>
        }
      >
        <MainLayout />
      </Suspense>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <PageSuspense>
            <Home />
          </PageSuspense>
        ),
      },
      {
        path: "cart",
        element: (
          <PageSuspense>
            <Cart />
          </PageSuspense>
        ),
      },
      {
        path: "wishlist",
        element: (
          <PageSuspense>
            <Wishlist />
          </PageSuspense>
        ),
      },
      {
        path: "about-us",
        element: (
          <PageSuspense>
            <AboutUs />
          </PageSuspense>
        ),
      },
      {
        path: "categories",
        element: (
          <PageSuspense>
            <Categories />
          </PageSuspense>
        ),
      },
      {
        path: "categories/products/:prefix",
        element: (
          <PageSuspense>
            <Products />
          </PageSuspense>
        ),
        loader: ({ params }) => ProductsLoader({ params }),
      },
      {
        path: "login",
        element: (
          <PageSuspense>
            <Login />
          </PageSuspense>
        ),
      },
      {
        path: "register",
        element: (
          <PageSuspense>
            <Register />
          </PageSuspense>
        ),
      },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
