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
    text: `Sign up to Empty Space newsletter`,
  },
];

export const termsAndAgreements = `
<b>**Introduction**</b>
<li>
Welcome to the Empty Space website (hereinafter: "the Website") operated by Mor Asraf, 
company registration number 316433226, located at 150 Hagoren, Ofakim (hereinafter: "the Website Management" and/or "the Company").
Any use of the Website constitutes acceptance of this agreement, including the terms and conditions contained herein.
The terms of use may change from time to time, and users are required to review them upon each visit to the Website. Browsing the Website and/or using it in any manner implies agreement to these terms and an obligation to adhere to them. It is clarified that these terms constitute a legally binding agreement for all intents and purposes and are binding on the user for any use of the Website.
</li>
<li> The use of the masculine form in this document is for convenience only, and the terms apply equally to all genders. </li>
<li>Placing an order for services on the Website constitutes a declaration by the client that they have read, understood, and agreed to these terms. These terms form a binding contract between the user and the Website Management. </li>
<br/>
<b>**Services**</b> 
<li>The Website offers payment services for works done at the Empty Space Art Studio and by individuals providing their services, including artwork and tattoos. </li>
<li>Services can be ordered by contacting the Website Management, subject to availability and geographical location.</li>
<li>Payment for services on the Website can be made through the Website's payment system, subject to approval by the Website Management. </li>
<li>The prices of the services are exclusive of VAT, in accordance with tax laws for a "limited liability company.</li>
<li>The Website Management reserves the right to discontinue its services at any time.</li>
<li>Eligibility to use the Website is granted to any citizen aged 18 and over. Orders can be placed by individuals with an active bank account and/or a valid Israeli credit card and an email address provided during the purchase process on the Website. A minor making a purchase will be considered as having obtained parental/guardian consent for the transaction.</li>
<br/>
<b>**Cancellations and Changes to Service Types**</b> 
<li>The policy for canceling transactions and returning products is in accordance with the Consumer Protection (Transaction Cancellation) Regulations, 2010, and the Consumer Protection Law, 1981.</li>
<li>Services scheduled for a client can be canceled at any time, provided that the client informs the Website Management of the cancellation or rescheduling at least 30 days prior to the end of the engagement.</li>
<li>Orders can be canceled up to 72 hours from the time of order, through direct communication with the studio manager.</li>
<li>No refunds will be issued for services that have already been provided.</li>
<li>Notice of cancellation or termination by the Company will be given to the user, and the Company will refrain from charging the user's credit card or will refund any amount paid for the products if applicable.</li>
<br/>
<b>**Availability and Location of Services**</b>
<li>The availability of services is subject to the schedule agreed upon with the Website Management.</li>
<li>For any questions or inquiries regarding the services, you may contact the studio manager at +972 53-283-5820.</li>
<br/>
<b>**Data Security and Privacy**</b>
<li>The Website Management, as well as affiliated companies and additional parties operating on behalf of the Company to the same standards, may use the information provided in the form to deliver the requested information and services. This personal information will not be disclosed or used for other marketing purposes without permission and will not be transferred to a third party without the explicit consent of the client.</li>
<li>The content of the service and any personal information disclosed during the service will never be revealed to any other person or entity without written consent from the client. The Website Management is committed to your privacy, which is our top priority.</li>
<li>The Company undertakes not to use the information provided by the buyers except to facilitate the purchase on the sales site and in accordance with all legal requirements.</li>
<li>By clicking the "Send" button, I confirm the form and its terms with my signature.</li>
<li>The Website is secured using advanced security measures to ensure proper use and safe browsing on the Website and to protect users' privacy. All users of the Website and its services agree not to engage in any activity that may disrupt the operation of the Website, steal user information, or breach the Website's security mechanisms.</li>
<li>In the event of misuse, the Website Management will take action against any such activity through all legal means available, including blocking the user from accessing the Website and taking legal action if the user engages in such conduct.</li>
<br/>
<b>**Intellectual Property**</b>
<li>All intellectual property rights on this Website, including copyrights, distribution rights, trade secrets, trademarks, and all types of intellectual property, whether related to the design and layout of the Website or the content appearing on it, are the exclusive property of the Website Management.</li>
<li>It is prohibited to copy, duplicate, distribute, publish, or use any information from or on the Website in any other way unless prior written consent has been obtained from the Website Management.</li>
<br/>
<b>**Governing Law and Jurisdiction**</b>
<li> The interpretation and enforcement of these terms and/or any action or dispute arising from them will be governed by Israeli law only, and the Tel Aviv District Court will have exclusive jurisdiction</li>
<br/>
<b>**Contact and Accessibility**</b>
<li>For any questions or inquiries, you may contact the Website Management by phone at +972 53-283-5820 or by email at mor@oart.co.il during the Website's operating hours.</li>
`;

export const ARTISTS = [
  { label: "Mor Asraf", value: "Mor Asraf" },
  { label: "Guy Drago", value: "Guy Drago" },
  { label: "Ori Bensh", value: "Ori Bensh" },
  { label: "Iftah Ram", value: "Iftah Ram" },
];

export enum ArtistsName{
  Mor = "Mor Asraf",
  Guy = "Guy Drago",
  Ori = "Ori Bensh",
  Iftah = "Iftah Ram",
}

export const CURRENCIES = [
  { label: "NIS ₪", value: 1 },
  { label: "USD $", value: 2 },
  { label: "EURO €", value: 3 },
];