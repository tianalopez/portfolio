import App from "./App";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Error404 from "./pages/error404";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
];

export default routes;
