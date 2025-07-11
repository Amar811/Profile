import React from "react";
import { ButtonPrimary, ButtonOutLine } from "./Button";
const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/amarimg.jpeg"
                width={40}
                height={40}
                alt="Amar Ram"
                className="img-cover"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Building scalable Modern Websites For the Future
          </h2>

          <div className="flex items-center gap-3">
            <a href="/images/AR-Resume-2-2.pdf" download>
              <ButtonPrimary label="Download CV" icon="download" />
            </a>

            <ButtonOutLine
              href="#about"
              label="Scroll down"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure
            className="w-full max-w-[500px] h-[680px] ml-auto bg-gradient-to-t 
    from-sky-400 via-sky-300 to-sky-200 rounded-[60px] overflow-hidden"
          >
            <img
              src="/images/amarimg.jpeg"
              width={100}
              height={100}
              alt="Amar Ram"
              className="w-full h-full object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
