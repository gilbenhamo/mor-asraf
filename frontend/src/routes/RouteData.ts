import GuestSpotBooking from "../pages/GuestSpotBooking";
import { HomePage } from "../pages/HomePage";
import { RoutePaths } from "./RoutePaths";

export const routes = [
  { path: RoutePaths.HOME, element: HomePage },
  { path: RoutePaths.GUEST_SPOT_BOOKING, element: GuestSpotBooking },
];
