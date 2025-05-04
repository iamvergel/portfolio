// src/App.tsx

import TopNav from "./main/topnav";
import { useState, useEffect } from "react";

export default function App() {
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
    <>
      <TopNav />
      <div
        className="h-screen w-full bg-gradient-to-br from-[#ffffff] via-[#ffffff] via-[#ffffff] via-[#ffffff] via-[#ffffff] via-[rgba(36,30,37,0)] via-[rgba(36,30,37,0.10)] to-[rgba(70,0,0,1)]"
        id="main"
      >
        <img
          src="/portfolio/src/assets/images/bg-image.png"
          alt="image"
          className="w-[700px] 2xl:w-[1100px] object-cover absolute right-[0rem] top-[0rem] hidden lg:block"
        />

        <div
          className="z-2 text-[#171E25] border-l-4 border-[#171E25] absolute top-[15rem] 2xl:top-[25rem] left-[3rem] px-5 flex flex-col justify-center items-start "
          id="info"
        >
          <p className="text-2xl font-semibold uppercase">HI I'M</p>
          <h1
            className="text-7xl font-bold uppercase"
            style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            Vergel <br /> Ocado <br /> Macayan
          </h1>
          <p className="pt-5 capitalize text-[12px]">
            Frontend Developer · Visual Artist · UI/UX Designer
          </p>
        </div>

        <div
          className="z-20 text-[#171E25] absolute bottom-[3rem] 2xl:top-[45rem] left-[3rem]"
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
              className="relative z-10"
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
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <div className="relative transform overflow-hidden rounded-sm bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        {/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                          
                        </div> */}
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <h3
                            className="text-base font-semibold text-gray-900"
                            id="modal-title"
                          >
                            Contact Me
                          </h3>
                          <div className="mt-2">
                            {/* <ul className="list-disc pl-4 text-sm text-gray-700">
                              <li></li>
                              <li>
                                
                              </li>
                            </ul> */}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-sm bg-[#171E25] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#2F465B] sm:ml-3 sm:w-auto"
                        onClick={() => setIsOpen(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="z-1 absolute w-full h-full flex flex-col justify-center items-center bg-gradient-to-br from-[#ffffff] via-[#ffffff] via-[#ffffff] via-[#ffffff] via-[#ffffff] via-[rgba(36,30,37,0)] via-[rgba(36,30,37,0.10)] to-[rgba(70,0,0,1)] animate-pulse infinite"></div>

        <div className="z-2 absolute top-[58%] left-[55%] transform -translate-x-1/2 -translate-y-1/2 rounded-full w-[500px] h-[500px] 2xl:w-[600px] 2xl:h-[600px] border-[50px] border-white flex flex-col justify-center items-center bg-gradient-to-b from-[#192734] to-[#250000]"></div>

        <div className="absolute right-5 top-1/2 transform -translate-y-1/2 flex flex-col gap-5 z-2">
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:bg-gray-200 transition"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#171E25";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "white";
              e.currentTarget.style.color = "black";
            }}
          >
            <i className="fab fa-instagram"></i>
            <span className="hidden group-hover:block absolute left-12 bg-black text-white px-2 py-1 rounded">
              Vergel Macayan
            </span>
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:bg-gray-200 transition"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#171E25";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "white";
              e.currentTarget.style.color = "black";
            }}
          >
            <i className="fab fa-facebook-f"></i>
            <span className="hidden group-hover:block absolute left-12 bg-black text-white px-2 py-1 rounded">
              Vergel Macayan
            </span>
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:bg-gray-200 transition"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#171E25";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "white";
              e.currentTarget.style.color = "black";
            }}
          >
            <i className="fab fa-github"></i>
            <span className="hidden group-hover:block absolute left-12 bg-black text-white px-2 py-1 rounded">
              Vergel Macayan
            </span>
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:bg-gray-200 transition"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#171E25";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "white";
              e.currentTarget.style.color = "black";
            }}
          >
            <i className="fab fa-twitter"></i>
            <span className="hidden group-hover:block absolute left-12 bg-black text-white px-2 py-1 rounded">
              Vergel Macayan
            </span>
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:bg-gray-200 transition"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#171E25";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "white";
              e.currentTarget.style.color = "black";
            }}
          >
            <i className="fab fa-telegram-plane"></i>
            <span className="hidden group-hover:block absolute left-12 bg-black text-white px-2 py-1 rounded">
              Vergel Macayan
            </span>
          </a>
        </div>

        <img
          src="/portfolio/src/assets/images/me.png"
          alt="me"
          className="z-3 h-[500px] w-[500px] 2xl:h-[600px] 2xl:w-[600px] object-cover absolute top-[61%] 2xl:top-[69%] left-[55%] transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </>
  );
}
