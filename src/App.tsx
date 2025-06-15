// src/App.tsx

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import TopNav from "./main/topnav";
import Home from "./main/home";
import About from "./main/about";
import Design from "./main/design";
import Artwork from "./main/artwork";
import Projects from "./main/projects";
import Testimonials from "./main/testimonial";
import Comment from "./main/comment";
import Footer from "./main/footer";

export default function App() {
  const images = [
    "/assets/images/bg-image.png",
    "/assets/images/bg-image1.png",
    "/assets/images/bg-image5.png",
    "/assets/images/bg-image2.png",
    "/assets/images/bg-image.png",
    "/assets/images/bg-image6.png",
    "/assets/images/bg-image3.png",
    "/assets/images/bg-image4.png",
    "/assets/images/bg-image7.png",
  ];

  // const images = [
  //   "/assets/images/bg-image.png",
  //   "/assets/images/bg-image1.png",
  //   "/assets/images/bg-image5.png",
  //   "/assets/images/bg-image2.png",
  //   "/assets/images/bg-image.png",
  //   "/assets/images/bg-image6.png",
  //   "/assets/images/bg-image3.png",
  //   "/assets/images/bg-image4.png",
  //   "/assets/images/bg-image7.png",
  // ];

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

      <section
        className="h-[150px] md:h-[150px] lg:h-[150px] w-full xl:max-w-[1400px] relative "
        id="about"
      >
        <div className="relative w-[600px] hidden md-hidden  lg:right-[-50rem] xl:right-[-68rem] lg:top-[-36rem] lg:hidden">
          <img
            src="/assets/images/bg-moon.png"
            alt=""
            className="w-full h-full rounded-full object-cover shadow-[#8a0303] shadow-2xl opacity-80 bg-red-500"
          />
          <div className="w-full h-full absolute top-0 left-0 rounded-full opacity-70 bg-radial-[at_25%_25%] from-white to-[#460000] to-75% mix-blend-overlay"></div>
        </div>

        <div
          className="absolute w-full h-full top-[-800px] sm:top-[-800px] md:top-[-583px] lg:top-[-562px] xl:top-[-630px] block md:block lg:block"
          data-aos="fade-left"
        >
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
            className="w-[650px] h-[750px]  md:w-[650px] md:h-[750px] lg:w-[650px] lg:h-[700px] xl:w-[720px] xl:h-[800px] xl:max-w-[750px] 2xl:max-h-[850px] object-cover absolute top-0 right-0 transition-opacity duration-200 opacity-0 z-0 opacity-20 md:opacity-50 lg:opacity-100"
          />
        </div>
        <div className="hidden md:block lg:block absolute w-full h-[80px] bg-gradient-to-r from-transparent via-transparent via-0% to-[#460000] top-0 left-0 z-[-1]">
          <div className="absolute w-[1200px] xl:max-w-[1200px] h-[5px] bg-[#171E25] z-1 opacity-30"></div>
          <div className="absolute md:w-full lg:w-[900px] xl:w-[1000px] xl:max-w-[1200px] h-full bg-gray-100"></div>
        </div>
        <div
          className="absolute  border-[#171E25] left-[1rem] lg:left-[3rem] top-[6rem] xl:top-[6rem]"
          data-aos="fade-right"
        >
          <h3
            className="px-3 py-1 border-l-4 text-3xl font-bold text-[#171E25] hover:bg-[#171E25]/20 hover:cursor-pointer hover:pr-[10rem] transition-all duration-200"
            style={{ clipPath: "polygon(0% 0, 100% 0, 92% 100%, 0 100%)" }}
          >
            About <span className="text-[#2F465B] font-normal">Me</span>
          </h3>
        </div>
      </section>

      <About />
      <Design />

      <section
        className="xl:max-w-[1400px] w-full h-[150px] md:h-[150px] lg:h-[150px] relative overflow-hidden"
        id="artwork"
      >
        <div className="h-[150px] md:h-[150px] lg:h-[150px] w-full xl:max-w-[1400px] relative">
          <div
            className=" absolute w-full h-[70px] bg-gradient-to-r from-transparent via-transparent via-10% to-[#460000] top-0 left-0 z-[-1]"
            data-aos="fade-left"
          ></div>
          <div
            className="absolute w-full h-[80px] bg-gradient-to-r from-transparent via-transparent via-10% to-[#460000] bottom-0 left-0 z-[-1]"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div
              className="absolute w-[85%] lg:w-[900px] xl:w-[1000px] xl:max-w-[1200px] h-full bg-gray-100"
              style={{ clipPath: "polygon(0% 0, 90% 0, 100% 100%, 0 100%)" }}
            ></div>
          </div>
          <div
            className="absolute  border-[#171E25] left-[1rem] lg:left-[3rem] top-[6rem] xl:top-[6rem] z-1"
            data-aos="fade-right"
          >
            <h3
              className="px-3 py-1 border-l-4 text-3xl font-bold text-[#171E25] hover:bg-[#171E25]/20 hover:cursor-pointer hover:pr-[10rem] transition-all duration-200"
              style={{ clipPath: "polygon(0% 0, 100% 0, 92% 100%, 0 100%)" }}
            >
              Artwork{" "}
              <span className="text-[#2F465B] font-normal">Gallery</span>
            </h3>
          </div>
        </div>
      </section>

      <Artwork />

      <section
        className="xl:max-w-[1400px] w-full h-[150px] md:h-[150px] lg:h-[150px] relative overflow-hidden"
        id="projects"
      >
        <div className="h-[150px] md:h-[150px] lg:h-[150px] w-full xl:max-w-[1400px] relative top-0">
          <div
            className="absolute w-full h-[150px] bg-gradient-to-b from-[#171E25]/10 to-[#171E25]/0 top-0 left-0 z-[-1]"
            data-aos="fade-left"
            style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)" }}
          ></div>
          <div
            className="absolute  border-[#171E25] left-[1rem] lg:left-[3rem] top-[6rem] xl:top-[6rem] z-1"
            data-aos="fade-right"
          >
            <h3
              className="px-3 py-1 border-l-4 text-3xl font-normal text-[#2F465B] hover:bg-[#171E25]/20 hover:cursor-pointer hover:pr-[10rem] transition-all duration-200"
              style={{ clipPath: "polygon(0% 0, 100% 0, 92% 100%, 0 100%)" }}
            >
              <span className="text-[#171E25] font-bold">Project</span>
            </h3>
          </div>
        </div>
      </section>

      <Projects />
      <Testimonials />
      <Comment />
      <Footer />

      {/* <section>
        <footer>Developed by Vergel Macayan</footer>
      </section> */}

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
