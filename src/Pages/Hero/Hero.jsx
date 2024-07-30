import React from "react";
import Bus2 from "../../assets/bus5.png";

import { animate, motion } from "framer-motion";
const Hero = () => {

    const imageVariants = {
        initial: {
            x: "100%",
        },
        animate:{
            x: "3%",
            transition:{
                duration: 3,
                ease: "easeInOut"
            }
        }
    }
  return (
    <div className="md:w-full md:h-[calc(100vh-8ch)] lg:ps-28 md:ps-16 sm:ps-7 ps-4 mt-[8ch] flex items-center justify-center flex-col hero md:relative">
      <div className="md:flex md:w-full items-stretch md:justify-between gap-12 pb-10">
        <motion.dev
          className="md:w-[35%] h-auto rounded-md md:flex justify-center md:flex-col md:space-y-14"
          iniitail={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'linear', delay: 0.2 }}
        >
          <motion.dev
            className="space-y-5"
            iniitail={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'linear', delay: 0.2 }}
          >
            <motion.h1
              className="md:text-7xl text-4xl font-bold text-neutral-50 leading-[1.15]"
              iniitail={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: 'linear', delay: 0.4 }}
            >
              Reserva Your Bus
              <span className="text-violet-400 tracking-wider">Ticket</span>
              Now
            </motion.h1>
            <motion.p
              className="text-lg font-normal text-neutral-300 line-clamp-3 text-ellipsis"
              iniitail={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: 'linear', delay: 0.6 }}
            >
              Find and book your bus tickets with just few click. We offer a wide range of bus routes and schedules to suit your needs.
            </motion.p>
          </motion.dev>
          <motion.button className="w-fit bg-violet-700 hover:bg-violet-800 text-neutral-50 mt-5 font-medium py-2 md:py-3 px-3 md:px-6 rounded-md ease-in-out duration-300">
            Reserva Seat Now
          </motion.button>
        </motion.dev>
        <div className="md:w-[70%] h-full rounded-md md:flex md:items-end md:justify-end md:absolute md:top-0 md:-right-48">
            <motion.img 
            className="md:w-full md:aspect-[4/2] object-contain"
             src={Bus2}
             alt="bus img"
             initial= "iniitail"
             animate ="animate"
             variants={imageVariants}
              />
        </div>
      </div>
    </div>
  );
};

export default Hero;
