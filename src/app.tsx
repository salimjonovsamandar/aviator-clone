import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import Aviator from "./aviator";
import Home from "./pages/home";

interface RouteConfig {
  path: string;
  element: JSX.Element;
  children?: RouteConfig[];
  index?: boolean;
  errorElement?: JSX.Element;
}

const App: React.FC = () => {
  const routes: RouteConfig[] = [
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: <Home />,
          // errorElement: <ErrorElement />,
        },
        {
          path: "aviator",
          element: <Aviator />,
          // errorElement: <ErrorElement />,
        },
      ],
      // errorElement: <Error />,
    },
  ];

  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}>
            {route.children && (
              <Routes>
                {route.children.map((childRoute, childIndex) => (
                  <Route
                    key={childIndex}
                    path={childRoute.path}
                    element={childRoute.element}
                  />
                ))}
              </Routes>
            )}
          </Route>
        ))}
      </Routes>
    </Router>
  );
};

export default App;
