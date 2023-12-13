import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

import { Suspense } from "react";
import { NotFound } from "./pages/NotFound";

import appRemote from "remoteApp/routes";
import appFormRemote from "remoteFormApp/routes";

type TRoutePaths = {
  path: string;
  element: React.ReactNode;
};

const AppRoutes = () => {
  const routes: TRoutePaths[] = [
    ...appRemote(),
    ...appFormRemote()
  ];

  return (
    <Suspense fallback={<p>carregando...</p>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {routes.map((route: TRoutePaths) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export { AppRoutes };
