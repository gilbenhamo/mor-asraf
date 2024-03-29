import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "./RouteData";
import Header from "../components/layout/Header";
import { HomePage } from "../pages/HomePage";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {routes.map((route) => (
          <Route
            path={route.path}
            key={route.path}
            element={<route.element />}
          />
        ))}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
