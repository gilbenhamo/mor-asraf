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
    type: GalleryItemTypes.CenterOne,
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
    type: GalleryItemTypes.CenterOne,
    img1: galleryPhotos.G_9_1,
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
    type: GalleryItemTypes.CenterOne,
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
    title: "Empty Space",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const EmptySpaceNavLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "artists",
    title: "Artists",
  },
  {
    id: "events",
    title: "Events",
  },
  {
    id: "booking-israel",
    title: "Booking",
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

export const healthDeclarationBoxs = [
  {
    id: 0,
    text: `I know that a tattoo is actually an open wound with the 
    possibility of infections and that it swells, is red, and painful 
    during the first week of recovery`,
  },
  {
    id: 1,
    text: `I know that tattoo treatment first 
    and foremost requires maintaining sterility and high hygienic conditions`,
  },
  {
    id: 2,
    text: `I know that the tattoo was done under 
    sterile conditions and that the studio is not responsible for the 
    way the person is treated after the tattoo is done`,
  },
  {
    id: 3,
    text: `I understand the importance of providing 
    complete and reliable medical
     information concerning me before receiving the treatment`,
  },
  {
    id: 4,
    text: `It is clear to me that hiding this type of information may harm the results and even endanger me.`,
  },
  {
    id: 5,
    text: `I undertake to follow the treatment instructions 
    given to me by the studio for the recommended period, 
    and I also know that failure to follow these instructions 
    may cause medical complications, infections, 
    bleeding, pus, fluids, high fever, and even more serious symptoms.`,
  },
  {
    id: 6,
    text: `During the recovery period ranging 
    from 3 weeks to a month and a half, do not enter the 
    sea \ pool \ sauna \ gym \ or any other place that could lead to 
    infection of the wound as a result of lack of hygiene.`,
  },
  {
    id: 7,
    text: `I understand that any negative result that
     may be caused by hiding medical information is my sole responsibility`,
  },
  {
    id: 8,
    text: `I know that failure to follow the treatment 
    instructions given to me by the studio may result 
    in damage to the quality of the tattoo`,
  },
  {
    id: 9,
    text: `The studio bears no responsibility in 
    case of regret after making a sketch/tattoo`,
  },
  {
    id: 10,
    text: `If I do not follow the required instructions, 
    the responsibility rests with me alone, and I leave
     the studio and I cannot file any lawsuit / legal / police complaint.`,
  },
  {
    id: 11,
    text: `In the case of an allergic reaction
    to the paint or any other equipment for the tattooing,
    while performing a new tattoo, or continuing an existing tattoo,
    or in the case of an allergic reaction to the earrings,
    the customer will not file a claim / claim / complaint
    against the studio`,
  },
  {
    id: 12,
    text: `I know that when getting a large tattoo there
     is the possibility of a temporary limitation in daily
      conduct (such as a limitation of sports, movement, or work)`,
  },
  {
    id: 13,
    text: `I am aware that the studio is not responsible
     for the recovery of the tattoo 100%, if it partially
      recovers, the studio undertakes to go over the tattoo
       and make spot repairs as required within 30 days of
        its execution. If the client does not come or make
         any contact in this period of time, he cannot make
          a claim against the studio.`,
  },
  {
    id: 14,
    text: `I know that tattoo repair that has partially
     healed will only be performed in the studio, and
      in the event that the client chooses not to perform
       the repair in the studio, he cannot make claims 
       against the studio and bears full responsibility for the result.`,
  },
  {
    id: 15,
    text: `I authorize the studio team to make
     a video/photos, publish them on social networks 
     and use the material for the needs of the studio only.`,
  },
  {
    id: 16,
    text: `I know that I do not receive medical 
    treatment and that the required medical treatment
     is from a qualified doctor only.`,
  },
  {
    id: 17,
    text: `I declare that I understood and agreed
     to all the sections of the consent form in full
      and that I filled out the health declaration fully
       and reliably. In addition, I received the recommended
      care instructions after the completion of the tattoo/piercing. 
      I hereby release the studio from any responsibility regarding 
      damage to the tattoo caused as a result of poor treatment, 
      allergic reactions, regret execution, and undertake that I 
      will not file any allegation/claim/police complaint against 
      the studio for one or more of the sections I signed on this 
      certification form.`,
  },
  {
    id: 18,
    text: `In the case of a medical condition, the customer
     confirms that he understands the possible consequences
      and takes responsibility for taking the risk`,
  },
  {
    id: 19,
    text: `I confirm that the decision to make a tattoo
     and its location was agreed upon and chosen by me, 
     I know that after my consent and after the tattoo is made I cannot express regret or complaint to the studio and the responsibility is mine.`,
  },
  {
    id: 20,
    text: `Sign up to Empty Space newsletter`
  }
];
