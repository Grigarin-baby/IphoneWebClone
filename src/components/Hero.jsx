import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useState } from "react";
import { useEffect } from "react";
const Hero = () => {
  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2 });
  }, []);
  useGSAP(() => {
    gsap.to("#button", { opacity: 1, delay: 2 });
  }, []);
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 720 ? smallHeroVideo : heroVideo
  );
  const handleVideoSrcSet = () => {
    if (window.innerWidth < 720) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  });
  return (
    <section
      className="w-full nav-height bg-black
   relative"
    >
      <div className=" h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            className=" pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        id="button"
        className="  flex  flex-col  items-center opacity-0 translate-y-0 " >

        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="font-normal text-xl ">From ₹10000/month or ₹1,19,999/- </p>
      </div>
    </section>
  );
};
export default Hero;
