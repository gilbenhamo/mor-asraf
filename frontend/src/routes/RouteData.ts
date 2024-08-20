import BookingIsrael from "../components/sections/BookingIsrael";
import AdvancePayment from "../pages/AdvancePayment";
import ArtistBooking from "../pages/ArtistBooking";
import { ArtistHomePage } from "../pages/ArtistHomePage";
import GuestSpotBooking from "../pages/GuestSpotBooking";
import HealthDeclaration from "../pages/HealthDeclaration";
import { HomePage } from "../pages/HomePage";
import PaymentPage from "../pages/PaymentPage";
import { ArtistsName } from "../utils/constants";
import { RoutePaths } from "./RoutePaths";

export const routes = [
  { path: RoutePaths.HOME, element: HomePage },
  { path: RoutePaths.GUEST_SPOT_BOOKING, element: GuestSpotBooking },
  { path: RoutePaths.HEALTH_DECLARATION, element: HealthDeclaration },
  { path: RoutePaths.PAYMENT, element: PaymentPage },
  { path: RoutePaths.ADVANCE_PAYMENT, element: AdvancePayment ,props:{amount:200,currency:2}},
  { path: RoutePaths.ADVANCE_PAYMENT_IL, element: AdvancePayment ,props:{amount:350,currency:1}},
  { path: RoutePaths.MOR_ASRAF, element: ArtistHomePage},
  { path: RoutePaths.BOOKING, element: BookingIsrael},
  { path: RoutePaths.ARTIST_BOOKING+ArtistsName.Guy, element: ArtistBooking, props:{artist:ArtistsName.Guy}},
  { path: RoutePaths.ARTIST_BOOKING+ArtistsName.Ori, element: ArtistBooking, props:{artist:ArtistsName.Ori}},
  { path: RoutePaths.ARTIST_BOOKING+ArtistsName.Iftah, element: ArtistBooking, props:{artist:ArtistsName.Iftah}},
];
