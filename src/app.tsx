import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Aviator from "./aviator";
import Home from "./pages/home";

const AppRoutes = () => {
  const routes = [
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "aviator",
          element: <Aviator />,
        },
      ],
    },
  ];

  const element = useRoutes(routes);
  return element;
};

const App: React.FC = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
