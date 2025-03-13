import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../containers/SectionWrapper";
import { fadeIn, slideFadeIn } from "../../utils/motion";
import {
  guy_profile,
  iftah_profile,
  mor_profile,
  sivan_profile,
} from "../../assets";

type ArtistsType = {
  name: string;
  description: string;
  pic: string;
  scale: number;
  page: string;
  booking: string;
};
const artists = [
  {
    name: "Mor Asraf (28), Tel Aviv",
    description: "Artist, Tattooist, Owner of Empty Space",
    pic: mor_profile,
    scale: 1,
    page: "/mor-asraf",
    booking: "/mor-asraf/booking",
  },
  {
    name: "Guy Drago (21), Jerusalem",
    description:
      "A tattoo artist for three years, specializing in black and white tattoos. Expert in illustrative surrealism, stippling shading, and possessing a unique personality that will realize both his and your wildest dreams.",
    pic: guy_profile,
    page: "https://www.instagram.com/guydrago_tattoo/",
    booking: "artist-booking/guy drago",
    scale: 1,
  },
  {
    name: "Sivan Barkai (32), Tel Aviv",
    description: `
     A true visual storyteller fine line body flow specialist with a unique understanding of body movement. Most of her projects are done freehand directly on the skin, giving each piece its perfect anatomical placement.
      `,
    pic: sivan_profile,
    page: "https://www.instagram.com/sivanbarkai?igsh=MWN5cWNjbmRqOTVleg==",
    booking: "artist-booking/sivan barkai",
    scale: 1,
  },
  {
    name: "Iftah Ram - AKA SLMTK (25), Tel Aviv",
    description: `
    A tattoo artist for 2.5 years, specializing in realism and surrealism 
    love to combine objects and elements in a unique way that will  make you think twice about what you see.    
      `,
    pic: iftah_profile,
    page: "https://www.instagram.com/iftah.ram/",
    booking: "artist-booking/iftah ram",
    scale: 1,
  },
  // Add more artists as needed
];
// animate={{ height: isOpen ? 800 : 100, scale: artist.scale }}

const ArtistCard = ({ artist }: { artist: ArtistsType }) => {
  const [isOpen, setIsOpen] = useState(false);

  const extractParts = (input: string): [string, string] => {
    const match = input.match(/^(.*?)(\(.*)/);
    if (!match) {
      throw new Error("Invalid format");
    }
    return [match[1].trim(), match[2].trim()];
  };

  return (
    <motion.div
      animate={{ scale: artist.scale }}
      whileHover={{ scale: artist.scale * 1.05 }}
      onClick={() => setIsOpen(!isOpen)}
      className="relative flex flex-col pb-1  border-black_m w-11/12 lg:w-9/12 " // Fixed height for the card
    >
      <div className="flex h-full">
        <img
          src={artist.pic}
          alt={artist.name}
          className="size-24 lg:size-32 rounded-full object-center mr-2"
        />

        <div className="grid w-9/12 sm:w-10/12 ">
          <p>
            <span className="text-xl text-black_m font-black mr-2">
              {extractParts(artist.name)[0]}
            </span>
            <span className="text-xl font-light text-black_m">
              {extractParts(artist.name)[1]}
            </span>
          </p>
          <p className="pb-2 text-gray-500 text-left overflow-hidden text-sm">
            {artist.description}
          </p>

          <div className="flex flex-col items-end justify-end">
            <div className="w-full h-[0.15rem] bg-black_m "></div>
            <div className="flex gap-2 cursor-pointer text-sm text-gray-500 text-right">
              <a href={artist.page} target="_blank" rel="noopener noreferrer">
                Gallery
              </a>
              <a
                href={artist.booking}
                target="_blank"
                rel="noopener noreferrer"
              >
                | Booking
              </a>
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
          className="pb-20 font-lightbold text-black text-4xl sm:text-[3.5rem] text-center"
          variants={slideFadeIn("down", "", 0.1, 0.5)}
        >
          ARTISTS
        </motion.h1>

        <motion.div
          className="flex flex-col gap-y-16 lg:gap-y-20 justify-center items-center "
          variants={fadeIn("right", "", 0.3, 1)}
        >
          {artists.map((artist, index) => (
            <ArtistCard artist={artist} key={index} />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Artists;
