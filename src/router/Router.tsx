import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import DashboardPage from "../pages/dashboard/index";

export const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<DashboardPage />} />),
);
