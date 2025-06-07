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
  }, [currentIndex]);

  return (
    <section
      className=" h-screen w-full bg-gradient-to-br from-[#ffffff] via-[#ffffff] via-[#ffffff] via-[#ffffff] via-[#ffffff] via-[rgba(36,30,37,0)] via-[rgba(36,30,37,0.10)] to-[rgba(70,0,0,1)]"
      id="main"
    >
      <div className="absolute left-15 top-[45rem] lg:top-[9rem] transform -translate-y-1/2 lg:flex flex-row gap-0 h-28">
        <img
          src="/portfolio/public/assets/images/top-image1.png"
          alt="image1"
          className="w-auto object-cover hover:scale-110 transition duration-300"
        />
        <img
          src="/portfolio/public/assets/images/top-image2.png"
          alt="image1"
          className="w-auto object-cover hover:scale-110 transition duration-300"
        />
        <img
          src="/portfolio/public/assets/images/top-image3.png"
          alt="image1"
          className="w-auto object-cover hover:scale-110 transition duration-300"
        />
        <img
          src="/portfolio/public/assets/images/top-image4.png"
          alt="image1"
          className="w-auto object-cover hover:scale-110 transition duration-300"
        />
      </div>

      <div className="absolute right-0 top-5 opacity-40 lg:opacity-100  w-[600px] lg:w-[700px] 2xl:w-[1100px] h-auto">
        {prevIndex !== null && (
          <img
            src={images[prevIndex]}
            alt="previous"
            className="w-full object-cover absolute top-0 left-0 transition-opacity duration-200 opacity-0 z-0"
          />
        )}

        <img
          src={images[currentIndex]}
          alt="current"
          className="w-full object-cover absolute top-0 left-0 transition-opacity duration-200 opacity-100"
        />
      </div>

      <div
        className="z-2 text-[#171E25] border-l-4 border-[#171E25] absolute top-[7rem] lg:top-[14rem] 2xl:top-[25rem] left-[1rem] lg:left-[3rem] px-3 lg:px-5 flex flex-col justify-center items-start "
        id="info"
      >
        <p className="text-2xl font-semibold uppercase">HI I'M</p>
        <h1
          className="text-5xl lg:text-7xl font-bold uppercase"
          style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
        >
          Vergel <br /> Ocado <br /> Macayan
        </h1>
        <p className="pt-5 capitalize text-[16px] lg:text-[14px] pr-20 lg:pr-0">
          Frontend Developer · Visual Artist · UI/UX Designer
        </p>
      </div>

      <div
        className="z-4 text-[#171E25] absolute bottom-[13rem] lg:bottom-[4rem] 2xl:top-[47rem] left-[1rem] lg:left-[3rem]"
        style={{ letterSpacing: "3px" }}
      >
        <button
          className="bg-[#171E25] hover:bg-[#2F465B] text-white font-semibold py-1 uppercase pl-4 pr-10 border border-[#171E25] hover:border-[#2F465B]"
          style={{ clipPath: "polygon(1% 0, 100% 0, 87% 100%, 0 100%)" }}
          onClick={() => setIsOpen(true)}
        >
          Contact me
        </button>

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
                <div className="relative transform overflow-hidden rounded-sm bg-white text-left shadow-xl transition-all w-96">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
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
                            reaching out with a project or just want to connect
                            — feel free to drop a message anytime.
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

      <div className="hidden z-1 absolute w-full h-full flex flex-col justify-center items-center bg-gradient-to-br from-[#ffffff] via-[#ffffff] via-[#ffffff] via-[#ffffff] via-[#ffffff] via-[rgba(36,30,37,0)] via-[rgba(36,30,37,0.10)] to-[rgba(70,0,0,1)] animate-pulse infinite"></div>

      <div className="z-1 relative lg:z-2 absolute top-[58%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
        <div className="absolute top-[210px] left-[75%] lg:top-[58%] lg:left-[55%] transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] 2xl:w-[670px] 2xl:h-[670px] rounded-full bg-gradient-to-l from-[#ffffff] via-[rgba(255,255,255,0.6)] via-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0)] p-[30px] lg:p-[50px] 2xl:p-[60px]">
          <div className="hidden lg:block absolute top-[38%] lg:top-[54%] left-[85%] lg:left-[91%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5 z-4 w-18 h-80 justify-center items-center">
            <a
              href="#"
              className="absolute top-0 left-0 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#171E25";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "white";
                e.currentTarget.style.color = "black";
              }}
            >
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a
              href="https://www.facebook.com/vergel.macayan.7/"
              target="_blank"
              className="absolute top-14 left-6.5 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#171E25";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "white";
                e.currentTarget.style.color = "black";
              }}
            >
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a
              href="https://github.com/iamvergel"
              target="_blank"
              className="absolute top-30 left-9 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#171E25";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "white";
                e.currentTarget.style.color = "black";
              }}
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a
              href="#"
              className="absolute top-46 left-6.5 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#171E25";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "white";
                e.currentTarget.style.color = "black";
              }}
            >
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a
              href="https://t.me/VergelMacayan"
              target="_blank"
              className="absolute top-60 left-0 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#171E25";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "white";
                e.currentTarget.style.color = "black";
              }}
            >
              <i className="fab fa-telegram-plane text-2xl"></i>
            </a>
          </div>
          <div className="w-full h-full rounded-full bg-gradient-to-b from-[#192734] to-[#250000]"></div>
        </div>
      </div>

      <div className="lg:hidden relative top-[38%] lg:top-[61%] left-[85%] lg:left-[70.2%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5 z-4 w-18 h-80 justify-center items-center">
        <a
          href="#"
          className="absolute top-0 left-0 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition"
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#171E25";
            e.currentTarget.style.color = "white";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "white";
            e.currentTarget.style.color = "black";
          }}
        >
          <i className="fab fa-instagram text-2xl"></i>
        </a>
        <a
          href="https://www.facebook.com/vergel.macayan.7/"
          target="_blank"
          className="absolute top-14 left-6.5 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition"
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#171E25";
            e.currentTarget.style.color = "white";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "white";
            e.currentTarget.style.color = "black";
          }}
        >
          <i className="fab fa-facebook-f text-2xl"></i>
        </a>
        <a
          href="https://github.com/iamvergel"
          target="_blank"
          className="absolute top-30 left-9 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition"
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#171E25";
            e.currentTarget.style.color = "white";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "white";
            e.currentTarget.style.color = "black";
          }}
        >
          <i className="fab fa-github text-2xl"></i>
        </a>
        <a
          href="#"
          className="absolute top-46 left-6.5 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition"
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#171E25";
            e.currentTarget.style.color = "white";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "white";
            e.currentTarget.style.color = "black";
          }}
        >
          <i className="fab fa-twitter text-2xl"></i>
        </a>
        <a
          href="https://t.me/VergelMacayan"
          target="_blank"
          className="absolute top-60 left-0 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition"
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#171E25";
            e.currentTarget.style.color = "white";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "white";
            e.currentTarget.style.color = "black";
          }}
        >
          <i className="fab fa-telegram-plane text-2xl"></i>
        </a>
      </div>

      <img
        src="/portfolio/public/assets/images/me.png"
        alt="me"
        className=" z-3 h-[250px] w-[200px] lg:h-[500px] lg:w-[500px] 2xl:h-[600px] 2xl:w-[600px] object-cover absolute bottom-0 left-[70%] lg:left-[55%] transform -translate-x-1/2"
      />
    </section>
  );
}
