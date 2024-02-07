"use client";

import { Carousel } from "flowbite-react";

const Banner = () => {
  return (
    <div className="md:my-12 h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img
          src="https://i.ibb.co/mFnydGL/pexels-tima-miroshnichenko-7567444.jpg"
          alt="..."
        />
        <img
          src="https://i.ibb.co/VmrfRMw/pexels-thirdman-5256816.jpg"
          alt="..."
        />
        <img
          src="https://i.ibb.co/88LX0DD/pexels-canva-studio-3153201.jpg"
          alt="..."
        />
        <img
          src="https://i.ibb.co/QD1xV9s/pexels-fauxels-3184360.jpg"
          alt="..."
        />
        <img
          src="https://i.ibb.co/74cNPKw/pexels-andrea-piacquadio-3779409.jpg"
          alt="..."
        />
      </Carousel>
    </div>
  );
};

export default Banner;
