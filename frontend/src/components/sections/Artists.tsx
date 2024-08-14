import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../containers/SectionWrapper";
import { slideFadeIn } from "../../utils/motion";
import { guy_profile, iftah_profile, mor_profile, ori_profile } from "../../assets";

const artists = [
  {
    name: "Mor Asraf (28), Tel Aviv",
    description: "Artist, Tattoer, Owner of Empty Space",
    pic: mor_profile,
    scale: 1,
    page: "/mor-asraf",
    booking: "mor-asraf/#booking-israel",
  },
  {
    name: "Guy Drago (21), Jerusalem",
    description:
      "A tattoo artist for three years, specializing in black and white tattoos. Expert in illustrative surrealism, stippling shading, and possessing a unique personality that will realize both his and your wildest dreams.",
    pic: guy_profile,
    page: "https://www.instagram.com/guydrago_tattoo/",
    scale: 1,
  },
  {
    name: "Ori Bensh (24), Tel Aviv",
    description: `
      A tattoo artist for four years, specializing in realism and surrealism.
      His work transforms skin into unique pieces of art, telling captivating stories through a fusion of reality and fantasy.
      `,
    pic: ori_profile,
    page: "https://www.instagram.com/ori__bensh/",
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
      className="relative flex flex-col pb-1  border-black_m w-11/12 lg:w-9/12 " // Fixed height for the card
    >
      <div className="flex font-serif h-full">
        <img
          src={artist.pic}
          alt={artist.name}
          className="size-24 lg:size-32 rounded-full object-cover mr-2"
        />

        <div className="grid w-9/12 sm:w-10/12">
          <h2 className="text-xl font-light text-black_m">{artist.name}</h2>
          <p className="pb-2 text-gray-500 text-left overflow-hidden text-sm">
            {artist.description}
          </p>

          <div className="flex flex-col items-end justify-end">
            <div className="w-full h-[0.15rem] bg-black_m "></div>
            <div className="flex gap-2 cursor-pointer text-sm text-gray-500 text-right">
              <a href={artist.page} target="_blank" rel="noopener noreferrer">
                Gallery
              </a>
              {/* <a
                href={artist.booking}
                target="_blank"
                rel="noopener noreferrer"
              >
                | Booking
              </a> */}
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

        <div className="flex flex-col gap-y-16 lg:gap-y-20 justify-center items-center ">
          {artists.map((artist, index) => (
            <ArtistCard key={index} artist={artist} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Artists;
