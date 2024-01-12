import { galleryPhotos } from "../assets/GalleryPhotos";

export enum GalleryItemTypes {
  One,
  CenterOne,
  Two,
  Three,
  ThreeRow,
}

export const galleryItems: (
  | GalleryItemBaseProps
  | Gallery2ItemsProps
  | Gallery3ItemsProps
)[] = [
  {
    type: GalleryItemTypes.ThreeRow,
    img1: galleryPhotos.G_1_1,
    img2: galleryPhotos.G_1_2,
    img3: galleryPhotos.G_1_3,
  },
  {
    type: GalleryItemTypes.CenterOne,
    img1: galleryPhotos.G_2_1,
  },
  {
    type: GalleryItemTypes.ThreeRow,
    img1: galleryPhotos.G_3_1,
    img2: galleryPhotos.G_3_2,
    img3: galleryPhotos.G_3_3,
  },
  {
    type: GalleryItemTypes.Two,
    img1: galleryPhotos.G_4_2,
    img2: galleryPhotos.G_4_1,
  },
  {
    type: GalleryItemTypes.One,
    img1: galleryPhotos.G_5_1,
  },
  {
    type: GalleryItemTypes.Two,
    img1: galleryPhotos.G_6_1,
    img2: galleryPhotos.G_6_2,
  },
  {
    type: GalleryItemTypes.CenterOne,
    img1: galleryPhotos.G_7_1,
  },
  {
    type: GalleryItemTypes.Three,
    img1: galleryPhotos.G_8_1,
    img2: galleryPhotos.G_8_2,
    img3: galleryPhotos.G_8_3,
  },
  {
    type: GalleryItemTypes.One,
    img1: galleryPhotos.G_9_1,
    reverse: true,
  },
  {
    type: GalleryItemTypes.Two,
    img1: galleryPhotos.G_10_1,
    img2: galleryPhotos.G_10_2,
    reverse: true,
  },
  {
    type: GalleryItemTypes.CenterOne,
    img1: galleryPhotos.G_11_1,
  },
  {
    type: GalleryItemTypes.Two,
    img1: galleryPhotos.G_12_1,
    img2: galleryPhotos.G_12_2,
    reverse: true,
  },
  {
    type: GalleryItemTypes.One,
    img1: galleryPhotos.G_13_1,
    reverse: true,
  },
  {
    type: GalleryItemTypes.Two,
    img1: galleryPhotos.G_14_1,
    img2: galleryPhotos.G_14_2,
    reverse: true,
  },
  {
    type: GalleryItemTypes.CenterOne,
    img1: galleryPhotos.G_15_1,
  },
  {
    type: GalleryItemTypes.CenterOne,
    img1: galleryPhotos.G_16_1,
  },
  {
    type: GalleryItemTypes.Two,
    img1: galleryPhotos.G_17_1,
    img2: galleryPhotos.G_17_2,
    reverse: true,
  },
  {
    type: GalleryItemTypes.Two,
    img1: galleryPhotos.G_18_1,
    img2: galleryPhotos.G_18_2,
  },
  {
    type: GalleryItemTypes.CenterOne,
    img1: galleryPhotos.G_19_1,
  },
  {
    type: GalleryItemTypes.ThreeRow,
    img1: galleryPhotos.G_20_1,
    img2: galleryPhotos.G_20_2,
    img3: galleryPhotos.G_20_3,
  },
];

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "gallery",
    title: "Gallery",
  },
  {
    id: "guest-spots",
    title: "Guest Spots",
  },
  {
    id: "booking-israel",
    title: "TLV-Booking",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const geustSpotsData = [
  {
    location: "",
    studio: "",
    startDate: new Date("2023-11-04"),
    endDate: new Date("2023-11-07"),
    icon: "",
  },
  {
    location: "",
    studio: "",
    startDate: new Date("2023-11-04"),
    endDate: new Date("2023-11-07"),
    icon: "",
  },
  {
    location: "Portugal",
    studio: "Studio one",
    startDate: new Date("2023-11-21"),
    endDate: new Date("2023-11-23"),
    icon: "",
  },
  {
    location: "Amsterdam",
    studio: "NEEDLE",
    startDate: new Date("2023-12-01"),
    endDate: new Date("2023-12-03"),
  },
  {
    location: "Portugal",
    studio: "Studio one",
    startDate: new Date("2023-12-07"),
    endDate: new Date("2023-12-12"),
  },
  {
    location: "Paris",
    studio: "Dev Tattoos",
    startDate: new Date("2023-12-15"),
    endDate: new Date("2024-01-18"),
  },
  {
    location: "Portugal",
    studio: "Studio one",
    startDate: new Date("2024-01-20"),
    endDate: new Date("2024-01-22"),
  },
  {
    location: "Paris",
    studio: "Dev Tattoos",
    startDate: new Date("2024-01-29"),
    endDate: new Date("2024-02-02"),
  },
  {
    location: "",
    studio: "",
    date: "",
  },
];
