import React from "react";
import Image from "next/image";

import AppStoreButton from "../Buttons/AppStoreButton";
import PlayStoreButton from "../Buttons/PlayStoreButton";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center py-16 md:py-20 px-5"
    >
      <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
        <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      </div>

      <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.3)] to-[rgba(202,208,230,0.3)]"></div>

      <div className="text-center">
        <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-3xl mx-auto">
          Ride Smart. Ride <span className="text-primary">Meshwar.</span>
        </h1>
        <p className="mt-4 text-foreground max-w-lg mx-auto">
          No surge pricing. Always A/C. Every trip is recorded and accessible.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center sm:gap-4 w-fit mx-auto">
          <AppStoreButton dark />
          <PlayStoreButton dark />
        </div>
        <Image
          src="/images/home/launch-soon.jpeg"
          width={1080}
          height={500}
          quality={100}
          sizes="(max-width: 768px) 100vw, 384px"
          priority={true}
          unoptimized={true}
          alt="app mockup"
          className="relative mt-12 md:mt-16 mx-auto z-10 rounded-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
