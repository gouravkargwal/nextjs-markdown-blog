import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative h-[50vh]">
      <Image
        src="/images/site/ashkan-forouzani-7blIFp0kFP4-unsplash.jpg"
        alt="hero-section"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default Hero;
