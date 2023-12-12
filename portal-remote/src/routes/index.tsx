import React from "react";

import Title from "../components/Title";
import Register from "../pages/Register";
import FormFormik from "../pages/FormFormik";

export type TRoutePaths = {
  path: string;
  element: React.ReactNode;
};

const routesPaths = (): TRoutePaths[] => {
  return [
    {
      path: "/title",
      element: <Title />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/formik",
      element: <FormFormik />,
    },
  ];
};

export default routesPaths;
