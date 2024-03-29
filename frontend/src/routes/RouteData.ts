import GuestSpotBooking from "../pages/GuestSpotBooking";
import HealthDeclaration from "../pages/HealthDeclaration";
import { HomePage } from "../pages/HomePage";
import { RoutePaths } from "./RoutePaths";

export const routes = [
  { path: RoutePaths.HOME, element: HomePage },
  { path: RoutePaths.GUEST_SPOT_BOOKING, element: GuestSpotBooking },
  { path: RoutePaths.HEALTH_DECLARATION, element: HealthDeclaration },
];
