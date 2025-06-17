import { useEffect, useState } from "react";

export default function Home() {
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

  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [prevIndex, setPrevIndex] = useState<number | null>(null);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setPrevIndex(currentIndex);
  //     setCurrentIndex((prev) => (prev + 1) % images.length);
  //   }, 250);

  //   return () => clearInterval(interval);
  // }, [currentIndex]);

  return (
    <section
      className="xl:max-w-[1400px] xl:max-h-[650px] w-full h-[750px] md:h-screen lg:h-screen overflow-hidden"
      id="main"
    >
      <div className="absolute left-15 top-[45rem] lg:top-[9rem] transform -translate-y-1/2 gap-0 h-28 hidden">
        <img
          src="/assets/images/top-image1.png"
          alt="image1"
          className="w-auto object-cover hover:scale-110 transition duration-300"
        />
        <img
          src="/assets/images/top-image2.png"
          alt="image1"
          className="w-auto object-cover hover:scale-110 transition duration-300"
        />
        <img
          src="/assets/images/top-image3.png"
          alt="image1"
          className="w-auto object-cover hover:scale-110 transition duration-300"
        />
        <img
          src="/assets/images/top-image4.png"
          alt="image1"
          className="w-auto object-cover hover:scale-110 transition duration-300"
        />
      </div>

      <div className="relative right-0 w-full h-full bg-gradient-to-br from-transparent via-70% via-transparent to-[#460000]"></div>

      {/* <div className="relative w-full h-full flex justify-center items-center z-1 hidden sm:hidden md:hidden lg:hidden xl:hidden">
        <div className="absolute right-0 w-1/2 h-full bg-gradient-to-br from-transparent via-[#460000] via-transparent via-[#460000] to-[#460000]"></div>
        <div className="absolute w-full h-full">
          {prevIndex !== null && (
            <img
              src={images[prevIndex]}
              alt="previous"
              className="w-[1000px] h-[600px] lg:w-[750px] absolute top-0 right-0 transition-opacity duration-200 opacity-0 z-0"
            />
          )}

          <img
            src={images[currentIndex]}
            alt="current"
            className="w-auto h-[700px] object-cover lg:w-[650px] lg:h-[750px] xl:w-[700px] xl:h-[900px] absolute top-0 right-0 lg:right-0 transition-opacity duration-200 opacity-0 z-0 opacity-30 md:opacity-100 lg:opacity-100 xl:opacity-100"
          />
        </div>
        <img
          src="/assets/images/me.png"
          alt="me"
          className=" z-3 h-[300px] w-auto sm:h-[350px] md-hidden md:w-[280px] md:h-[400px] lg:block lg:h-[450px] lg:w-[300px] object-cover absolute bottom-0 left-[70%] md:left-[68%] lg:left-[51.5%] transform -translate-x-1/2"
          data-aos="zoom-in"
        />

        <div
          className="hidden md:block z-1 md:z-1 absolute md:top-[60%] md:left-[70%] lg:top-[60%] lg:left-[54%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5 w-18 h-80 justify-center items-center lg:z-1 absolute top-[60%] left-[54%] transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <div className="absolute top-[210px] left-[75%] md:top-[70%] md:left-[70%] lg:top-[58%] lg:left-[55%] transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] xl:w-[450px] xl:h-[450px] rounded-full bg-gradient-to-l from-[#ffffff] via-[rgba(255,255,255,0.6)] via-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0)] p-[30px] lg:p-[50px] 2xl:p-[60px]">
            <div className="absolute top-[38%] lg:top-[54%] left-[85%] lg:left-[88%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5 z-4 w-18 h-80 justify-center items-center">
              <a
                href="#"
                className="absolute md:top-[4rem] md:left-0 lg:top-0 lg:left-0 w-10 h-10 rounded-full bg-white text-[#171E25] flex items-center justify-center hover:bg-gray-200 transition"
                onMouseEnter={(e) => {
                  e.currentTarget.style.width = "auto";
                  e.currentTarget.style.padding = "0.5rem";
                  e.currentTarget.style.background = "#171E25";
                  e.currentTarget.style.color = "white";
                  const icon = e.currentTarget.querySelector("i");
                  const text = e.currentTarget.querySelector("span");
                  if (icon) icon.style.display = "block";
                  if (text) text.style.display = "block";
                  e.currentTarget.style.animation = "expand 0.3s ease-in-out";
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
                <span className="hidden text-sm px-2">@vergel_macayan</span>
              </a>
              <a
                href="https://www.facebook.com/vergel.macayan.7/"
                target="_blank"
                className="absolute md:top-[7rem] md:left-8 lg:top-14 lg:left-6.5 w-10 h-10 rounded-full bg-white text-[#171E25] flex items-center justify-center hover:bg-gray-200 transition"
                onMouseEnter={(e) => {
                  e.currentTarget.style.width = "auto";
                  e.currentTarget.style.padding = "0.5rem";
                  e.currentTarget.style.background = "#171E25";
                  e.currentTarget.style.color = "white";
                  const icon = e.currentTarget.querySelector("i");
                  const text = e.currentTarget.querySelector("span");
                  if (icon) icon.style.display = "block";
                  if (text) text.style.display = "block";
                  e.currentTarget.style.animation = "expand 0.3s ease-in-out";
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
                <span className="hidden text-sm px-2">vergel.macayan.7</span>
              </a>
              <a
                href="https://github.com/iamvergel"
                target="_blank"
                className="absolute md:top-[11rem] md:left-12 lg:top-30 lg:left-9 w-10 h-10 rounded-full bg-white text-[#171E25] flex items-center justify-center hover:bg-gray-200 transition"
                onMouseEnter={(e) => {
                  e.currentTarget.style.width = "auto";
                  e.currentTarget.style.padding = "0.5rem";
                  e.currentTarget.style.background = "#171E25";
                  e.currentTarget.style.color = "white";
                  const icon = e.currentTarget.querySelector("i");
                  const text = e.currentTarget.querySelector("span");
                  if (icon) icon.style.display = "block";
                  if (text) text.style.display = "block";
                  e.currentTarget.style.animation = "expand 0.3s ease-in-out";
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
                className="absolute md:top-[15rem] md:left-11 lg:top-46 lg:left-6.5 w-10 h-10 rounded-full bg-white text-[#171E25] flex items-center justify-center hover:bg-gray-200 transition"
                onMouseEnter={(e) => {
                  e.currentTarget.style.width = "auto";
                  e.currentTarget.style.padding = "0.5rem";
                  e.currentTarget.style.background = "#171E25";
                  e.currentTarget.style.color = "white";
                  const icon = e.currentTarget.querySelector("i");
                  const text = e.currentTarget.querySelector("span");
                  if (icon) icon.style.display = "block";
                  if (text) text.style.display = "block";
                  e.currentTarget.style.animation = "expand 0.3s ease-in-out";
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
                <span className="hidden text-sm px-2">@vergel_macayan</span>
              </a>
              <a
                href="https://t.me/VergelMacayan"
                target="_blank"
                className="absolute md:top-[18rem] md:left-5 lg:top-60 lg:left-0 w-10 h-10 rounded-full bg-white text-[#171E25] flex items-center justify-center hover:bg-gray-200 transition"
                onMouseEnter={(e) => {
                  e.currentTarget.style.width = "auto";
                  e.currentTarget.style.padding = "0.5rem";
                  e.currentTarget.style.background = "#171E25";
                  e.currentTarget.style.color = "white";
                  const icon = e.currentTarget.querySelector("i");
                  const text = e.currentTarget.querySelector("span");
                  if (icon) icon.style.display = "block";
                  if (text) text.style.display = "block";
                  e.currentTarget.style.animation = "expand 0.3s ease-in-out";
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
            <div className="md:w-[300px] md:h-[300px] lg:w-[320px] lg:h-[320px] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[rgba(36,30,37,0.2)] via-[rgba(36,30,37,0.10)] to-[rgba(70,0,0,1)]"></div>
          </div>
        </div>
      </div> */}

      <div className="absolute top-[4rem] sm:top-0 md:top-[0rem] lg:max-top-[0rem] w-full h-[650px] z-4 px-6 md:px-12 lg:px-12 flex flex-col justify-center ">
        <div
          className="z-2 text-[#171E25] w-full border-l-4 border-[#171E25] flex flex-col justify-center items-start px-4 mt-10"
          id="info"
          data-aos="fade-right"
        >
          <p className="text-2xl font-semibold uppercase pb-1 lg:pb-3">
            HI I'M
          </p>
          <h1
            className="text-[50px] sm:text-[60px] md:text-[65px] lg:text-[65px] font-bold uppercase leading-10 lg:leading-14 sm:leading-12"
            style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            Vergel{" "}
            <span className="text-[#2F465B] font-normal">
              {" "}
              Ocado <br /> Macayan{" "}
            </span>
          </h1>
          <p className="pt-3 lg:pt-5 capitalize font-semibold text-[14px] lg:text-[14px]  lg:pr-0">
            Frontend Developer · Visual Artist · UI/UX Designer
          </p>
        </div>

        <div
          className="z-2 text-[#171E25] text-[14px] text-justify px-2 pt-8 w-full sm:w-[80%] md:w-[80%] lg:w-[500px] xl:w-[600px] lg:pt-10"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          I'm Vergel Macayan, a BS Computer Science student passionate about
          technology, innovation, and creative expression. As both an artist and
          aspiring front-end developer or software engineer, I aim to bring my
          designs to life through interactive, real-time programming. With a
          solid foundation in coding and a dedication to continuous learning, I
          strive to create impactful digital experiences.
        </div>

        <div
          className="relative top-[2rem] pt-1 left-[0rem] lg:left-[0rem] flex flex-col md:flex-row items-start justify-start gap-5 z-3"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <button
            className="w-[200px] md:w-[300px] lg:w-[200px] z-3 bg-[#171E25] hover:bg-[#2F465B] text-white font-semibold py-1 uppercase pl-4 pr-10 hover:border-[#2F465B] transition-all duration-200 hover:w-[250px] hover:pr-20"
            data-aos-delay="300"
            style={{ clipPath: "polygon(1% 0, 100% 0, 87% 100%, 0 100%)" }}
            onClick={(e) => {
              e.preventDefault();
              window.open("https://m.me/9800513043350604", "_blank");
            }}
          >
            Contact me
          </button>
          <div className="flex items-center justify-start gap-3 w-full lg:w-auto pl-0 md:pl-3 lg:pl-0">
            <a
              href="mailto:vergelmacayan7@gmail.com"
              className="w-10 h-10 rounded-full bg-white text-[#171E25] flex items-center justify-center transition-all  duration-200 overflow-hidden"
              onMouseEnter={(e) => {
                e.currentTarget.style.width = "auto";
                e.currentTarget.style.padding = "0rem";
                e.currentTarget.style.background = "#171E25";
                e.currentTarget.style.color = "white";

                const icon = e.currentTarget.querySelector("i");
                const text = e.currentTarget.querySelector("span");

                if (icon) icon.style.display = "block";
                if (text) text.style.display = "block";
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
              }}
            >
              <i className="fas fa-envelope text-xl px-3"></i>
              <span className="hidden text-sm pr-3">
                vergelmacayan7@gmail.com
              </span>
            </a>

            <a
              href="tel:+639363007584"
              className="w-10 h-10 rounded-full bg-white text-[#171E25] flex items-center justify-center transition-all duration-200 overflow-hidden"
              onMouseEnter={(e) => {
                e.currentTarget.style.width = "auto";
                e.currentTarget.style.padding = "0rem";
                e.currentTarget.style.background = "#171E25";
                e.currentTarget.style.color = "white";

                const icon = e.currentTarget.querySelector("i");
                const text = e.currentTarget.querySelector("span");

                if (icon) icon.style.display = "block";
                if (text) text.style.display = "block";
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
              }}
            >
              <i className="fas fa-phone-alt text-x px-3"></i>
              <span className="hidden text-sm pr-3">+639363007584</span>
            </a>
          </div>
        </div>
      </div>

      <div className="relative bottom-[15rem] lg:bottom-[8rem] lg:left-[3rem] left-[1rem] 2xl:max-w-[800px] z-10">
        <div className="z-4 text-[#171E25]" style={{ letterSpacing: "3px" }}>
          {isOpen && (
            <div
              className="relative "
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              <div
                className="fixed inset-0 bg-black/50 transition-opacity"
                aria-hidden="true"
                onClick={() => setIsOpen(false)}
              ></div>

              <div className="fixed inset-0 z-20 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                  <div className="relative transform overflow-hidden rounded-sm bg-white text-left shadow-xl transition-all w-96 lg:w-[800px] lg:h-[500px] xl:max-w-[800px] p-2">
                    <div className="bg-gray-200 px-4 pt-5 pb-4 sm:p-6 sm:pb-4 w-full h-full">
                      <div className="sm:flex sm:items-start">
                        {/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      
                    </div> */}
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <button
                            type="button"
                            className="absolute top-0 right-0 mt-2 mr-2 text-gray-400 hover:text-gray-500 p-2"
                            onClick={() => setIsOpen(false)}
                          >
                            <span className="sr-only">Close</span>
                            <i className="fas fa-times text-2xl"></i>
                          </button>

                          <h3
                            className="text-base font-semibold text-gray-900 pt-3"
                            id="modal-title"
                          >
                            Contact Me
                          </h3>
                          <div className="mt-2">
                            <p className="text-sm text-gray-500 text-justify pt-2">
                              I'm always open to new opportunities,
                              collaborations, or questions. Whether you're
                              reaching out with a project or just want to
                              connect — feel free to drop a message anytime.
                            </p>
                            <div className="flex items-center justify-between pt-4 gap-2">
                              <a
                                href="https://m.me/9800513043350604"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#171E25] hover:bg-[#2F465B] text-white py-1 font-semibold w-full uppercase border border-[#171E25] hover:border-[#2F465B] text-center"
                              >
                                <i className="fab fa-facebook-messenger text-2xl"></i>
                              </a>
                              <a
                                href="tel:+639363007584"
                                className="bg-[#171E25] hover:bg-[#2F465B] text-white py-1 font-semibold w-full uppercase border border-[#171E25] hover:border-[#2F465B] text-center"
                              >
                                <i className="fas fa-phone-alt text-2xl"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-sm bg-[#171E25] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#2F465B] sm:ml-3 sm:w-auto"
                      onClick={() => setIsOpen(false)}
                    >
                      Close
                    </button>
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div
          className="hidden absolute gap-5 bg-[#171E25] py-2 z-1 top-[11rem] left-[-1rem] w-full justify-center items-center"
          data-aos="fade-up"
        >
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white text-[#171E25] flex items-center justify-center hover:bg-gray-200 transition"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#171E25";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "white";
              e.currentTarget.style.color = "#171E25";
            }}
          >
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a
            href="https://www.facebook.com/vergel.macayan.7/"
            target="_blank"
            className="w-10 h-10 rounded-full bg-white text-[#171E25] flex items-center justify-center hover:bg-gray-200 transition"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#171E25";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "white";
              e.currentTarget.style.color = "#171E25";
            }}
          >
            <i className="fab fa-facebook-f text-2xl"></i>
          </a>
          <a
            href="https://github.com/iamvergel"
            target="_blank"
            className="w-10 h-10 rounded-full bg-white text-[#171E25] flex items-center justify-center hover:bg-gray-200 transition"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#171E25";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "white";
              e.currentTarget.style.color = "#171E25";
            }}
          >
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white text-[#171E25] flex items-center justify-center hover:bg-gray-200 transition"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#171E25";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "white";
              e.currentTarget.style.color = "#171E25";
            }}
          >
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a
            href="https://t.me/VergelMacayan"
            target="_blank"
            className="w-10 h-10 rounded-full bg-white text-[#171E25] flex items-center justify-center hover:bg-gray-200 transition"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#171E25";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "white";
              e.currentTarget.style.color = "#171E25";
            }}
          >
            <i className="fab fa-telegram-plane text-2xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
