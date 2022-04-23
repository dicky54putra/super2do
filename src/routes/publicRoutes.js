import Home from "src/components/organisms/Home";

const publicRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/active",
    element: <Home isActive />,
  },
  {
    path: "/complete",
    element: <Home isComplete />,
  },
];

export default publicRoutes;
