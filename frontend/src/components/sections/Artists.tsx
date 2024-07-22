import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../containers/SectionWrapper";
import {  slideFadeIn } from "../../utils/motion";
import { logo } from "../../assets";

const artists = [
  {
    name: "Mor Asraf",
    description:
      "Artist, Tattoer, Owner of Empty Space asdadasdadsadadsasdasdasdasdasdasdasdasdasdasda",
    pic: logo,
    scale: 1,
    page: "/mor-asraf",
    booking: "/#booking-israel",
  },
  {
    name: "Guy Drago",
    description:
      "typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    pic: logo,
    scale: 1,
  },
  {
    name: "Itay Pitay",
    description:
      "It is a long established fact that a reader will be distracted by the readable ",
    pic: logo,
    scale: 1,
  },
  // Add more artists as needed
];
// animate={{ height: isOpen ? 800 : 100, scale: artist.scale }}

const ArtistCard = ({ artist }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      animate={{ scale: artist.scale }}
      whileHover={{ scale: artist.scale * 1.05 }}
      onClick={() => setIsOpen(!isOpen)}
      className="relative flex flex-col pb-1  border-black_m w-10/12 sm:w-6/12 " // Fixed height for the card
    >
      <div className="flex font-serif">
        <img
          src={artist.pic}
          alt={artist.name}
          className="size-20 rounded-full object-contain mr-4 w-3/12 sm:w-2/12"
        />

        <div className="grid w-9/12 sm:w-10/12">
          <h2 className="text-xl font-semibold text-black_m">{artist.name}</h2>
          <p className="pb-2 text-gray-500 text-left overflow-hidden text-sm">
            {artist.description}
          </p>

          <div className="flex flex-col items-end justify-end">
            <div className="w-full h-[0.15rem] bg-gradient-to-r from-black/0 via-black to-black/0 "></div>
            <div className="flex gap-2 cursor-pointer text-sm text-gray-500 text-right">
              <a href={artist.page}>Tap to view</a>
              <a href={artist.booking}>| Booking</a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Artists = () => {
  return (
    <SectionWrapper idName="artists">
      <div className=" pt-16 sm:pt-24 h-fit w-full flex flex-col ">
        <motion.h1
          className="pb-20 font-serif font-lightbold text-black text-4xl sm:text-[3.5rem] text-center"
          variants={slideFadeIn("up", "", 0.1, 0.5)}
        >
          ARTISTS
        </motion.h1>

        <div className="flex flex-col gap-y-20 justify-center items-center ">
          {artists.map((artist, index) => (
            <ArtistCard key={index} artist={artist} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Artists;
