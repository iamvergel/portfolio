// src/main/About.tsx
import { useState, useEffect } from "react";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <section
      className="xl:max-w-[1400px] w-full h-auto text-black px-0 lg:px-0 py-6"
      id="about"
    >
      <div className="w-full h-auto">
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-3">
          <div className="relative col-span-1 lg:col-span-1 h-full w-full">
            <div className="relative h-full w-full ">
              <img
                src="/portfolio/public/assets/images/me.png"
                alt="me"
                className=" z-3 h-[300px] w-auto sm:h-[350px] md:w-[280px] md:h-[400px] lg:h-[450px] lg:w-[300px] object-cover relative lg:absolute top-[50%] left-[35%] md:top-[50%] md:left-[30%] lg:top-[63.5%] lg:left-[40%] xl:top-[56%] transform -translate-x-1/2 -translate-y-1/2"
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
              className="hidden sm:block h-[150px] w-[1000px] bg-gradient-to-l from-transparent via-[#4b0000] to-[#171E25] absolute bottom-[-15%] left-[0%] transform -translate-x-1/2 -translate-y-1/2"
              
              data-aos-delay="200"
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
              <p className="pb-5" data-aos="fade-left" data-aos-delay="300">
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
                  onClick={() => setIsOpen(true)}
                  className="px-3 py-1 bg-[#171E25]/90 text-[14px] text-white rounded-sm hover:bg-[#171E25] transition-all duration-200 transform hover:scale-105"
                  data-aos="fade-up"
                >
                  View My Resume <i className="fa-solid fa-file-lines pl-1"></i>
                </button>

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
                        <div className="w-full h-full flex items-center justify-centerp pb-5 p-1">
                          <img
                            src="/portfolio/public/assets/resume/2.png"
                            alt="page 1"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="w-full h-full flex items-center justify-centerp pb-5 p-1">
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

        <div className="w-[60%] h-[50px] bg-gradient-to-r from-[#171E25] via-[#171E25]/80 via-30% to-transparent z-5"  style={{ clipPath: "polygon(0% 0, 90% 0, 100% 100%, 0 100%)" }}></div>

        <div className="w-full h-auto bg-[#171E25]">
          <div className="w-full h-full flex items-center justify-center text-white p-5">
            <h1 className="text-3xl font-bold">Tech Stack</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
