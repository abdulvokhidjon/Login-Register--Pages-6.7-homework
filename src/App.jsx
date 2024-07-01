// rrd imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import { Home, About, Contact, Login, Register, ErrorPage } from "./pages";

// layouts
import MainLayout from "./layouts/MainLayout";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: "register",
      element: <Register />,
      errorElement: <ErrorPage />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
