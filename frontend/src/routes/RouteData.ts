import AdvancePayment from "../pages/AdvancePayment";
import { ArtistHomePage } from "../pages/ArtistHomePage";
import GuestSpotBooking from "../pages/GuestSpotBooking";
import HealthDeclaration from "../pages/HealthDeclaration";
import { HomePage } from "../pages/HomePage";
import PaymentPage from "../pages/PaymentPage";
import { RoutePaths } from "./RoutePaths";

export const routes = [
  { path: RoutePaths.HOME, element: HomePage },
  { path: RoutePaths.GUEST_SPOT_BOOKING, element: GuestSpotBooking },
  { path: RoutePaths.HEALTH_DECLARATION, element: HealthDeclaration },
  { path: RoutePaths.PAYMENT, element: PaymentPage },
  { path: RoutePaths.ADVANCE_PAYMENT, element: AdvancePayment ,props:{amount:200,currency:2}},
  { path: RoutePaths.ADVANCE_PAYMENT_IL, element: AdvancePayment ,props:{amount:350,currency:1}},
  { path: RoutePaths.MOR_ASRAF, element: ArtistHomePage},
];
