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
      path: "app1/title",
      element: <Title />,
    },
    {
      path: "app1/register",
      element: <Register />,
    },
    {
      path: "app1/formik",
      element: <FormFormik />,
    },
  ];
};

export default routesPaths;
