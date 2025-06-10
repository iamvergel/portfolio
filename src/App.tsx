// src/App.tsx

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import TopNav from "./main/topnav";
import Home from "./main/home";
import About from "./main/about";
import Projects from "./main/projects";

export default function App() {
  const images = [
    "/portfolio/public/assets/images/bg-image.png",
    "/portfolio/public/assets/images/bg-image1.png",
    "/portfolio/public/assets/images/bg-image5.png",
    "/portfolio/public/assets/images/bg-image2.png",
    "/portfolio/public/assets/images/bg-image.png",
    "/portfolio/public/assets/images/bg-image6.png",
    "/portfolio/public/assets/images/bg-image3.png",
    "/portfolio/public/assets/images/bg-image4.png",
    "/portfolio/public/assets/images/bg-image7.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 250);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });
  }, []);

  return (
    <>
      <TopNav />
      <Home />

      <section className="h-[200px] md:h-[200px] lg:h-[300px] w-full relative" id="about">
        <div className="absolute w-full h-full top-[-800px] sm:top-[-800px] md:top-[-583px] lg:top-[-562px] xl:top-[-630px] block md:block lg:block">
          {prevIndex !== null && (
            <img
              src={images[prevIndex]}
              alt="previous"
              className="w-[700px] h-[900px] absolute top-0 right-0 transition-opacity duration-200 opacity-0 z-0"
            />
          )}

          <img
            src={images[currentIndex]}
            alt="current"
            className="w-[650px] h-[750px]  md:w-[650px] md:h-[750px] lg:w-[650px] lg:h-[700px] xl:w-[720px] xl:h-[800px] xl:max-w-[750px] 2xl:max-h-[850px] object-cover absolute top-0 right-0 transition-opacity duration-200 opacity-0 z-0 opacity-40 md:opacity-100 lg:opacity-100"
          />
        </div>
        <div className="hidden md:block lg:block absolute w-full h-[80px] bg-gradient-to-r from-transparent via-[rgba(36,30,37,0)] via-[#460000] via-[#460000] to-[#460000] top-0 left-0 z-[-1]">
          <div className="absolute w-[830px] xl:max-w-[830px] h-[5px] bg-[#171E25]" style={{ clipPath: "polygon(0% 0, 100% 0, 90% 100%, 0 100%)" }}></div>
        </div>
        <div className="absolute px-3 py-2 border-l-4 border-[#171E25] left-[3rem] top-[7rem] xl:top-[8rem]">
          <h3 className="text-4xl font-bold text-[#171E25]">About <span className="text-[#2F465B] font-normal">Me</span></h3>
        </div>
      </section>

      <About />
      <Projects />

      {/* <section
        className="h-screen w-full bg-gradient-to-br from-[#ffffff] via-[#ffffff] via-[#ffffff] via-[#ffffff] via-[#ffffff] via-[rgba(36,30,37,0)] via-[rgba(36,30,37,0.10)] to-[rgba(70,0,0,1)]"
        id="design"
      ></section>

      <section
        className="h-screen w-full bg-gradient-to-br from-[#ffffff] via-[#ffffff] via-[#ffffff] via-[#ffffff] via-[#ffffff] via-[rgba(36,30,37,0)] via-[rgba(36,30,37,0.10)] to-[rgba(70,0,0,1)]"
        id="artworks"
      ></section>

      <section
        className="h-screen w-full bg-gradient-to-br from-[#ffffff] via-[#ffffff] via-[#ffffff] via-[#ffffff] via-[#ffffff] via-[rgba(36,30,37,0)] via-[rgba(36,30,37,0.10)] to-[rgba(70,0,0,1)]"
        id="projects"
      ></section> */}
    </>
  );
}
