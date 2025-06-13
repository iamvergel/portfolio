// src/main/About.tsx
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const images = [
  "/portfolio/public/assets/certificate/DJNRMHS.png",
  "/portfolio/public/assets/certificate/TESDA-1.png",
  "/portfolio/public/assets/certificate/TESDA-2.png",
  "/portfolio/public/assets/certificate/TESDA-3.png",
  "/portfolio/public/assets/certificate/TESDA-4.png",
  "/portfolio/public/assets/certificate/TESDA-5.png",
];

export default function About() {
  const [isOpen, setIsOpen] = useState(false);
  const [popHover, setpopHover] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  return (
    <section
      className="xl:max-w-[1400px] w-full h-auto text-black px-0 lg:px-0 py-0"
      id="about"
    >
      <div className="w-full h-auto" >
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-3">
          <div className="relative col-span-1 lg:col-span-1 h-full w-full">
            <div className="relative h-full w-full ">
              <img
                src="/portfolio/public/assets/images/me.png"
                alt="me"
                className=" z-3 h-[300px] w-auto sm:h-[350px] md:w-[280px] md:h-[400px] lg:h-[450px] lg:w-[300px] object-cover relative lg:absolute top-[50%] left-[35%] md:top-[50%] md:left-[30%] lg:top-[63.5%] lg:left-[40%] xl:top-[57.5%] transform -translate-x-1/2 -translate-y-1/2"
                data-aos="zoom-in"
              />
              <div
                className="block md:block z-2 md:z-1 absolute top-[40%] left-[45%] md:top-[60%] md:left-[70%] lg:top-[50%] lg:left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5 w-18 h-80 justify-center items-center lg:z-1"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="absolute top-[210px] left-[75%] md:top-[50%] md:left-[-15rem] lg:top-[58%] lg:left-[55%] transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] xl:w-[450px] xl:h-[450px] rounded-full bg-gradient-to-l from-[#ffffff] via-[rgba(255,255,255,0.6)] to-[rgba(255,255,255,0)] p-[30px] lg:p-[50px] 2xl:p-[60px] shadow-[10px_5px_10px_0px_rgba(0,0,0,0.02)]">
                  <div className="absolute top-[38%] lg:top-[54%] left-[85%] lg:left-[88%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5 z-4 w-18 h-80 justify-center items-center">
                    <a
                      href="#"
                      className="absolute top-[4rem] left-[-1rem] md:top-[4rem] md:left-0 lg:top-0 lg:left-0 w-10 h-10 rounded-full bg-white text-[#171E25] flex items-center justify-center hover:bg-gray-200 transition"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.width = "auto";
                        e.currentTarget.style.padding = "0.5rem";
                        e.currentTarget.style.background = "#171E25";
                        e.currentTarget.style.color = "white";
                        const icon = e.currentTarget.querySelector("i");
                        const text = e.currentTarget.querySelector("span");
                        if (icon) icon.style.display = "block";
                        if (text) text.style.display = "block";
                        e.currentTarget.style.animation =
                          "expand 0.3s ease-in-out";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.width = "2.5rem";
                        e.currentTarget.style.padding = "0";
                        e.currentTarget.style.background = "white";
                        e.currentTarget.style.color = "#171E25";
                        const icon = e.currentTarget.querySelector("i");
                        const text = e.currentTarget.querySelector("span");
                        if (icon) icon.style.display = "block";
                        if (text) text.style.display = "none";
                        e.currentTarget.style.animation = "none";
                      }}
                    >
                      <i className="fab fa-instagram text-2xl"></i>
                      <span className="hidden text-sm px-2">
                        @vergel_macayan
                      </span>
                    </a>
                    <a
                      href="https://www.facebook.com/vergel.macayan.7/"
                      target="_blank"
                      className="absolute top-[7rem] left-[1rem] md:top-[7rem] md:left-8 lg:top-14 lg:left-6.5 w-10 h-10 rounded-full bg-white text-[#171E25] flex items-center justify-center hover:bg-gray-200 transition"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.width = "auto";
                        e.currentTarget.style.padding = "0.5rem";
                        e.currentTarget.style.background = "#171E25";
                        e.currentTarget.style.color = "white";
                        const icon = e.currentTarget.querySelector("i");
                        const text = e.currentTarget.querySelector("span");
                        if (icon) icon.style.display = "block";
                        if (text) text.style.display = "block";
                        e.currentTarget.style.animation =
                          "expand 0.3s ease-in-out";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.width = "2.5rem";
                        e.currentTarget.style.padding = "0";
                        e.currentTarget.style.background = "white";
                        e.currentTarget.style.color = "#171E25";
                        const icon = e.currentTarget.querySelector("i");
                        const text = e.currentTarget.querySelector("span");
                        if (icon) icon.style.display = "block";
                        if (text) text.style.display = "none";
                        e.currentTarget.style.animation = "none";
                      }}
                    >
                      <i className="fab fa-facebook-f text-2xl"></i>
                      <span className="hidden text-sm px-2">
                        vergel.macayan.7
                      </span>
                    </a>
                    <a
                      href="https://github.com/iamvergel"
                      target="_blank"
                      className="absolute top-[11rem] left-[2rem] md:top-[11rem] md:left-12 lg:top-30 lg:left-9 w-10 h-10 rounded-full bg-white text-[#171E25] flex items-center justify-center hover:bg-gray-200 transition"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.width = "auto";
                        e.currentTarget.style.padding = "0.5rem";
                        e.currentTarget.style.background = "#171E25";
                        e.currentTarget.style.color = "white";
                        const icon = e.currentTarget.querySelector("i");
                        const text = e.currentTarget.querySelector("span");
                        if (icon) icon.style.display = "block";
                        if (text) text.style.display = "block";
                        e.currentTarget.style.animation =
                          "expand 0.3s ease-in-out";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.width = "2.5rem";
                        e.currentTarget.style.padding = "0";
                        e.currentTarget.style.background = "white";
                        e.currentTarget.style.color = "#171E25";
                        const icon = e.currentTarget.querySelector("i");
                        const text = e.currentTarget.querySelector("span");
                        if (icon) icon.style.display = "block";
                        if (text) text.style.display = "none";
                        e.currentTarget.style.animation = "none";
                      }}
                    >
                      <i className="fab fa-github text-2xl"></i>
                      <span className="hidden text-sm px-2">iamvergel</span>
                    </a>
                    <a
                      href="#"
                      className="absolute top-[15rem] left-[1rem] md:top-[15rem] md:left-11 lg:top-46 lg:left-6.5 w-10 h-10 rounded-full bg-white text-[#171E25] flex items-center justify-center hover:bg-gray-200 transition"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.width = "auto";
                        e.currentTarget.style.padding = "0.5rem";
                        e.currentTarget.style.background = "#171E25";
                        e.currentTarget.style.color = "white";
                        const icon = e.currentTarget.querySelector("i");
                        const text = e.currentTarget.querySelector("span");
                        if (icon) icon.style.display = "block";
                        if (text) text.style.display = "block";
                        e.currentTarget.style.animation =
                          "expand 0.3s ease-in-out";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.width = "2.5rem";
                        e.currentTarget.style.padding = "0";
                        e.currentTarget.style.background = "white";
                        e.currentTarget.style.color = "#171E25";
                        const icon = e.currentTarget.querySelector("i");
                        const text = e.currentTarget.querySelector("span");
                        if (icon) icon.style.display = "block";
                        if (text) text.style.display = "none";
                        e.currentTarget.style.animation = "none";
                      }}
                    >
                      <i className="fab fa-twitter text-2xl"></i>
                      <span className="hidden text-sm px-2">
                        @vergel_macayan
                      </span>
                    </a>
                    <a
                      href="https://t.me/VergelMacayan"
                      target="_blank"
                      className="absolute top-[18rem] left-[-1rem] md:top-[18rem] md:left-5 lg:top-60 lg:left-0 w-10 h-10 rounded-full bg-white text-[#171E25] flex items-center justify-center hover:bg-gray-200 transition"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.width = "auto";
                        e.currentTarget.style.padding = "0.5rem";
                        e.currentTarget.style.background = "#171E25";
                        e.currentTarget.style.color = "white";
                        const icon = e.currentTarget.querySelector("i");
                        const text = e.currentTarget.querySelector("span");
                        if (icon) icon.style.display = "block";
                        if (text) text.style.display = "block";
                        e.currentTarget.style.animation =
                          "expand 0.3s ease-in-out";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.width = "2.5rem";
                        e.currentTarget.style.padding = "0";
                        e.currentTarget.style.background = "white";
                        e.currentTarget.style.color = "#171E25";
                        const icon = e.currentTarget.querySelector("i");
                        const text = e.currentTarget.querySelector("span");
                        if (icon) icon.style.display = "block";
                        if (text) text.style.display = "none";
                        e.currentTarget.style.animation = "none";
                      }}
                    >
                      <i className="fab fa-telegram-plane text-2xl"></i>
                      <span className="hidden text-sm px-2">VergelMacayan</span>
                    </a>
                  </div>
                </div>
                <div className="w-[230px] h-[230px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] rounded-full absolute top-[65%] left-[50%] md:top-[50%] md:left-[-15rem] lg:top-[57%]  lg:left-[20%] transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-[rgba(36,30,37,0)] via-[rgba(36,30,37,0)] to-[rgba(70,0,0,1)]"></div>
              </div>
            </div>

            <div
              className="h-[30px] w-[420px] bg-gradient-to-l from-transparent to-[#4b0000] absolute top-[15%] left-[0%] transform -translate-x-1/2 -translate-y-1/2 z-2"
              data-aos="fade-right"
            ></div>
            <div
              className="h-[30px] w-[430px] bg-gradient-to-l from-transparent to-[#4b0000] absolute top-[27%] left-[0%] transform -translate-x-1/2 -translate-y-1/2 z-2"
              data-aos="fade-right"
              data-aos-delay="100"
              style={{ clipPath: "polygon(1% 0, 100% 0, 98% 100%, 0 100%)" }}
            ></div>
            <div
              className="h-[30px] w-[270px] bg-gradient-to-l from-transparent to-[#4b0000] absolute top-[39%] left-[0%] transform -translate-x-1/2 -translate-y-1/2 z-2"
              data-aos="fade-right"
              data-aos-delay="0"
              style={{ clipPath: "polygon(1% 0, 100% 0, 92% 100%, 0 100%)" }}
            ></div>

            <div
              className="hidden sm:block h-[150px] w-[1000px] bg-gradient-to-l from-transparent via-[#4b0000] to-[#171E25] absolute bottom-[-14.5%] left-[0%] transform -translate-x-1/2 -translate-y-1/2"
              data-aos-delay="200" data-aos="fade-right"
              style={{ clipPath: "polygon(1% 0, 90% 0, 100% 100%, 0 100%)" }}
            ></div>
          </div>
          <div className="col-span-1 lg:col-span-1 block lg:hidden w-full h-[50px] bg-gradient-to-r from-[#171E25] via-transparent via-100% to-transparent z-4"></div>
          <div className="col-span-1 lg:col-span-2 p-2 lg:p-5 text-[14px] leading-7 text-justify relative">
            <div className="p-5 lg:p-5">
              <p className="pb-3" data-aos="fade-left" data-aos-delay="100">
                Hi, I'm Vergel Macayan. <br />
                <br />
                I'm a Bachelor of Science in Computer Science student with a
                strong passion for technology and innovation. I'm also an artist
                who enjoys creating paintings, portraits, and designs as a form
                of creative expression. One of my goals is to bring these
                designs to life by making them interactive and real-time through
                programming.
              </p>
              <p className="pb-3" data-aos="fade-left" data-aos-delay="200">
                I specialize in front-end development and have worked on several
                freelance projects. With a growing foundation in programming and
                a commitment to continuous learning, I'm determined to create
                solutions that deliver real impact.
              </p>
              <p className="pb-10" data-aos="fade-left" data-aos-delay="300">
                I'm currently studying React, Laravel, and backend API
                development to broaden my skill set and become more capable of
                building complete end-to-end applications. Since technology
                never stops evolving, I’m always looking for ways to improve and
                stay up-to-date with the latest advancements in the field.
              </p>

              <p
                className="text-base italic text-gray-700 border-l-4 border-gray-400 pl-4 my-4 "
                data-aos="fade-left"
              >
                “It’s not bad to dream. But the important thing is to keep
                moving forward and not give up.”
                <br />
                <span className="block mt-2 text-sm font-medium text-gray-500">
                  — Ging Freecss, Hunter x Hunter
                </span>
              </p>

              <div className="relative pt-6">
                <button
                  onMouseEnter={() => setpopHover(true)}
                  onMouseLeave={() => setpopHover(false)}
                  onClick={() => setIsOpen(true)}
                  className="px-3 py-1 bg-[#171E25]/90 text-[14px] text-white rounded-sm hover:bg-[#171E25] transition-all duration-200 transform hover:scale-105"
                  data-aos="fade-up"
                >
                  View My Resume <i className="fa-solid fa-file-lines pl-1"></i>
                </button>

                {popHover && (
                  <div
                    role="tooltip"
                    className="absolute z-10 inline-block text-[14px] left-41 top-[-13rem] text-gray-500 transition-opacity duration-500 transform bg-white border border-gray-200 rounded-lg shadow-xs w-80"
                  >
                    <div
                      className="p-3"
                      onMouseEnter={() => setpopHover(true)}
                      onMouseLeave={() => setpopHover(false)}
                    >
                      <div className="flex">
                        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2">
                          <div className="w-full h-full flex items-center justify-centerp p-1">
                            <img
                              src="/portfolio/public/assets/resume/2.png"
                              alt="page 1"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="w-full h-full flex items-center justify-centerp p-1">
                            <img
                              src="/portfolio/public/assets/resume/3.png"
                              alt="page 1"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="px-1">
                        <a
                          href="/portfolio/public/assets/resume/MacayanCV.pdf"
                          download
                        >
                          <button className="w-full text-white bg-[#171E25]/90 py-2 transition-all duration-300 rounded-sm hover:bg-[#171E25] text-[14px] transform hover:scale-102">
                            Download{" "}
                            <i className="fa-solid fa-download pl-1"></i>
                          </button>
                        </a>
                      </div>
                    </div>
                    <div data-popper-arrow></div>
                  </div>
                )}

                {isOpen && (
                  <div className="fixed inset-0 z-[1000] w-full h-full flex items-center justify-center bg-black/50 p-5">
                    <div className="bg-white w-full h-full relative rounded-sm overflow-y-auto scrollbar-thin">
                      <div className="w-full h-[60px] bg-white shadow-sm flex items-center justify-start sticky top-0 z-1">
                        <h1 className="text-xl font-normal text-[#171E25] px-5">
                          My Resume
                        </h1>
                        <button
                          onClick={() => setIsOpen(false)}
                          className="absolute top-3 right-4 text-white bg-[#171E25]/80 px-3 transition-all duration-300 rounded-sm hover:bg-[#171E25] text-[25px] transform hover:scale-105"
                        >
                          &times;
                        </button>
                      </div>

                      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 p-5">
                        <div className="w-full h-full flex items-center justify-centerp pb-10 p-1">
                          <img
                            src="/portfolio/public/assets/resume/2.png"
                            alt="page 1"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="w-full h-full flex items-center justify-centerp pb-10 p-1">
                          <img
                            src="/portfolio/public/assets/resume/3.png"
                            alt="page 1"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      <div className="">
                        <a
                          href="/portfolio/public/assets/resume/MacayanCV.pdf"
                          download
                        >
                          <button className="fixed bottom-10 right-10 text-white bg-[#171E25]/90 px-5 transition-all duration-300 rounded-sm hover:bg-[#171E25] text-[14px] transform hover:scale-105">
                            Download{" "}
                            <i className="fa-solid fa-download pl-1"></i>
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-[60%] h-[50px] bg-gradient-to-r from-[#171E25] via-[#171E25]/80 via-30% to-transparent z-5 whitespace-nowrap" data-aos="fade-right" data-aos-delay="300"
          style={{ clipPath: "polygon(0% 0, 90% 0, 100% 100%, 0 100%)" }}
        ></div>

        <div className="w-full h-auto bg-gradient-to-r from-[#171E25] via-[#171E25]/80 via-50% to-transparent" data-aos="fade-right" data-aos-delay="400">
          <div className="w-full h-full flex items-center justify-start text-white p-8 px-25"></div>
        </div>

        <div className="w-full h-auto p-5 md:p-10 flex items-center justify-center relative">
          <div className="w-full max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 pt-10">
            <div className="col-span-1 md:col-span-2 w-full h-full flex items-center justify-start text-[#171E25] pb-10 " data-aos="fade-right">
              <p
                className="text-3xl font-bold py-1 pr-[2rem] border-l-4 border-[#171E25] pl-2 hover:bg-[#171E25]/20 hover:cursor-pointer hover:pr-[5rem] transition-all duration-200"
                style={{ clipPath: "polygon(0% 0, 100% 0, 92% 100%, 0 100%)" }}
              >
                Tech <span className="text-[#2F465B] font-normal">Stack</span>
              </p>
            </div>

            <div className="flex flex-col items-start pb-10" data-aos="fade-right">
              <p
                className="font-bold text-[20px] py-1 pr-[2rem] border-l-2 border-[#171E25]/50 pl-2 hover:bg-[#171E25]/20 hover:cursor-pointer hover:pr-[5rem] transition-all duration-200"
                style={{ clipPath: "polygon(0% 0, 100% 0, 92% 100%, 0 100%)" }}
              >
                Markup & Styling
              </p>
              <div className="flex items-center gap-3 pt-5 px-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  alt="html logo"
                  className="h-9 w-9 md:w-12 md:h-12 object-cover transition-all duration-200 transform hover:scale-105"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  alt="css logo"
                  className="h-9 w-9 md:w-12 md:h-12 object-cover transition-all duration-200 transform hover:scale-105"
                />
              </div>
            </div>

            <div className="flex flex-col items-start pb-10" data-aos="fade-left">
              <p
                className="font-bold text-[20px] py-1 pr-[2rem] border-l-2 border-[#171E25]/50 pl-2 hover:bg-[#171E25]/20 hover:cursor-pointer hover:pr-[5rem] transition-all duration-200"
                style={{ clipPath: "polygon(0% 0, 100% 0, 92% 100%, 0 100%)" }}
              >
                Languages
              </p>
              <div className="flex items-center gap-3 pt-5 px-0 lg:px-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="javascript logo"
                  className="h-9 w-9 md:w-12 md:h-12 object-cover transition-all duration-200 transform hover:scale-105"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                  alt="csharp logo"
                  className="h-9 w-9 md:w-12 md:h-12 object-cover transition-all duration-200 transform hover:scale-105"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                  alt="java logo"
                  className="h-9 w-9 md:w-12 md:h-12 object-cover transition-all duration-200 transform hover:scale-105"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                  alt="php logo"
                  className="h-9 w-9 md:w-12 md:h-12 object-cover transition-all duration-200 transform hover:scale-105"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  alt="typescript logo"
                  className="h-9 w-9 md:w-12 md:h-12 object-cover transition-all duration-200 transform hover:scale-105"
                />
              </div>
            </div>

            <div className="flex flex-col items-start pb-10" data-aos="fade-right">
              <p
                className="font-bold text-[20px] py-1 pr-[2rem] border-l-2 border-[#171E25]/50 pl-2 hover:bg-[#171E25]/20 hover:cursor-pointer hover:pr-[5rem] transition-all duration-200"
                style={{ clipPath: "polygon(0% 0, 100% 0, 92% 100%, 0 100%)" }}
              >
                Databases
              </p>
              <div className="flex items-center gap-3 pt-5 px-2">
                <img
                  src="https://cdn.simpleicons.org/mysql/4479A1"
                  alt="mysql logo"
                  className="h-9 w-9 md:w-12 md:h-12 object-cover transition-all duration-200 transform hover:scale-105"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                  alt="firebase logo"
                  className="h-9 w-9 md:w-12 md:h-12 object-cover transition-all duration-200 transform hover:scale-105"
                />
              </div>
            </div>

            <div className="flex flex-col items-start pb-10" data-aos="fade-left">
              <p
                className="font-bold text-[20px] py-1 pr-[2rem] border-l-2 border-[#171E25]/50 pl-2 hover:bg-[#171E25]/20 hover:cursor-pointer hover:pr-[5rem] transition-all duration-200"
                style={{ clipPath: "polygon(0% 0, 100% 0, 92% 100%, 0 100%)" }}
              >
                Tools
              </p>
              <div className="flex items-center gap-3 pt-5 px-0 lg:px-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                  alt="vscode logo"
                  className="h-9 w-9 md:w-12 md:h-12 object-cover transition-all duration-200 transform hover:scale-105"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"
                  alt="visualstudio logo"
                  className="h-9 w-9 md:w-12 md:h-12 object-cover transition-all duration-200 transform hover:scale-105"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                  alt="figma logo"
                  className="h-9 w-9 md:w-12 md:h-12 object-cover transition-all duration-200 transform hover:scale-105"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                  alt="git logo"
                  className="h-9 w-9 md:w-12 md:h-12 object-cover transition-all duration-200 transform hover:scale-105"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
                  alt="npm logo"
                  className="h-9 w-9 md:w-12 md:h-12 object-cover transition-all duration-200 transform hover:scale-105"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
                  alt="photoshop logo"
                  className="h-9 w-9 md:w-12 md:h-12 object-cover transition-all duration-200 transform hover:scale-105"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg"
                  alt="canva logo"
                  className="h-9 w-9 md:w-12 md:h-12 object-cover transition-all duration-200 transform hover:scale-105"
                />
              </div>
            </div>

            <div className="flex flex-col items-start pb-10" data-aos="fade-right">
              <p
                className="font-bold text-[20px] py-1 pr-[2rem] border-l-2 border-[#171E25]/50 pl-2 hover:bg-[#171E25]/20 hover:cursor-pointer hover:pr-[5rem] transition-all duration-200"
                style={{ clipPath: "polygon(0% 0, 100% 0, 92% 100%, 0 100%)" }}
              >
                Frameworks
              </p>
              <div className="flex items-center gap-3 pt-5 px-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="react logo"
                  className="h-9 w-9 md:w-12 md:h-12 object-cover transition-all duration-200 transform hover:scale-105"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                  alt="tailwindcss logo"
                  className="h-9 w-9 md:w-12 md:h-12 object-cover transition-all duration-200 transform hover:scale-105"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                  alt="bootstrap logo"
                  className="h-9 w-9 md:w-12 md:h-12 object-cover transition-all duration-200 transform hover:scale-105"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"
                  alt="laravel logo"
                  className="h-9 w-9 md:w-12 md:h-12 object-cover transition-all duration-200 transform hover:scale-105"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg"
                  alt="codeigniter logo"
                  className="h-9 w-9 md:w-12 md:h-12 object-cover transition-all duration-200 transform hover:scale-105"
                />
              </div>
            </div>

            <div className="flex flex-col items-start pb-10" data-aos="fade-left">
              <p
                className="font-bold text-[20px] py-1 pr-[2rem] border-l-2 border-[#171E25]/50 pl-2 hover:bg-[#171E25]/20 hover:cursor-pointer hover:pr-[5rem] transition-all duration-200"
                style={{ clipPath: "polygon(0% 0, 100% 0, 92% 100%, 0 100%)" }}
              >
                Server & Services
              </p>
              <div className="flex items-center gap-3 pt-5 px-2">
                <img
                  src="https://skillicons.dev/icons?i=aws"
                  alt="aws logo"
                  className="h-9 w-9 md:w-12 md:h-12 object-cover transition-all duration-200 transform hover:scale-105"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg"
                  alt="apache logo"
                  className="h-9 w-9 md:w-12 md:h-12 object-cover transition-all duration-200 transform hover:scale-105"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  alt="nodejs logo"
                  className="h-9 w-9 md:w-12 md:h-12 object-cover transition-all duration-200 transform hover:scale-105"
                />
              </div>
            </div>

            <div className="flex flex-col items-start pb-10" data-aos="fade-right">
              <p
                className="font-bold text-[20px] py-1 pr-[2rem] border-l-2 border-[#171E25]/50 pl-2 hover:bg-[#171E25]/20 hover:cursor-pointer hover:pr-[5rem] transition-all duration-200"
                style={{ clipPath: "polygon(0% 0, 100% 0, 92% 100%, 0 100%)" }}
              >
                Operating System
              </p>
              <div className="flex items-center gap-3 pt-5 px-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg"
                  alt="windows logo"
                  className="h-9 w-9 md:w-12 md:h-12 object-cover transition-all duration-200 transform hover:scale-105"
                />
              </div>
            </div>
          </div>

          <div
            className="w-full h-full absolute top-0 left-0 z-[-1] bg-gradient-to-t from-transparent via-[#171E25]/20 to-[#171E25]/100"
            style={{
              clipPath:
                "polygon(100% 54%, 100% 75%, 100% 100%, 0 100%, 0 76%, 42% 91%)",
            }}
          ></div>
        </div>

        <div className="w-full h-auto p-5 md:p-10 flex flex-col items-center justify-center relative bg-gradient-to-b from-transparent via-[#171E25]/10 to-[#171E25]/20" >
          <div className="col-span-1 md:col-span-2 w-full h-full flex items-center justify-start text-[#171E25] pb-10 px-2 lg:px-40" data-aos="fade-right">
              <p
                className="text-3xl font-bold py-1 pr-[2rem] border-l-4 border-[#171E25] pl-2 hover:bg-[#171E25]/20 hover:cursor-pointer hover:pr-[5rem] transition-all duration-200"
                style={{ clipPath: "polygon(0% 0, 100% 0, 92% 100%, 0 100%)" }}
              >
                Certificate
              </p>
            </div>
          <div
            className="overflow-hidden w-full max-w-[1000px] rounded-lg pt-5" data-aos="fade-up"
            ref={emblaRef}
          >
            <div className="flex">
              {images.map((src, index) => (
                <div key={index} className="min-w-full flex-[0_0_100%]">
                  <img
                    src={src}
                    alt={`Certificate ${index + 1}`}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="justify-between w-full max-w-[1150px] absolute px-4 hidden md:flex">
            <button
              onClick={scrollPrev}
              className="bg-[#171E25]/80 text-white w-10 h-10 text-md flex items-center justify-center hover:bg-[#171E25]/100 transition rounded-full" data-aos="fade-right"
            >
              <i className="fa-solid fa-chevron-left fa-lg"></i>
            </button>
            <button
              onClick={scrollNext}
              className="bg-[#171E25]/80 text-white w-10 h-10 text-md flex items-center justify-center hover:bg-[#171E25]/100 transition rounded-full" data-aos="fade-left"
            >
              <i className="fa-solid fa-chevron-right fa-lg"></i>
            </button>
          </div>

          <div className="flex items-center space-x-3 pt-5 gap-2" data-aos="fade-up">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`rounded-full ${
                  index === selectedIndex
                    ? "bg-[#171E25] w-4 h-4"
                    : "bg-[#171E25]/50 w-3 h-3"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
