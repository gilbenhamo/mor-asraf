import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "./RouteData";
import { HomePage } from "../pages/HomePage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route
            path={route.path}
            key={route.path}
            element={<route.element {...route.props}/>}
          />
        ))}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
