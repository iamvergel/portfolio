import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Zoom from "yet-another-react-lightbox/plugins/zoom";

type Design = {
  id: number;
  title: string;
  images: string[];
  prototypeUrl?: string;
  link?: string;
};

const designs: Design[] = [
  {
    id: 1,
    title: "Student Portal ICC Design",
    images: [
      "/assets/design/design1/page1.png",
      "/assets/design/design1/page2.png",
      "/assets/design/design1/page3.png",
      "/assets/design/design1/page4.png",
      "/assets/design/design1/page5.png",
    ],
    prototypeUrl: "",
    link: "https://embed.figma.com/design/x0NJBu5uWFLBzgmQCthjCF/STUDENT_PORTAL_ICC?node-id=0-1&embed-host=share",
  },
  {
    id: 2,
    title: "EJ Traing Center Design",
    images: [
      "/assets/design/design2/page1.png",
      "/assets/design/design2/page2.png",
      "/assets/design/design2/page3.png",
      "/assets/design/design2/page4.png",
    ],
    prototypeUrl:
      "https://embed.figma.com/proto/G4xVMPMzPoz11jq2pTsyjH/GROUP-5---DESIGN---PROTOTYPE?page-id=0%3A1&node-id=115-4334&viewport=367%2C-239%2C0.15&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=115%3A4334&show-proto-sidebar=1&embed-host=share",
    link: "",
  },
  {
    id: 3,
    title: "Old Manila Design",
    images: [
      "/assets/design/design3/page1.png",
      "/assets/design/design3/page2.png",
      "/assets/design/design3/page3.png",
      "/assets/design/design3/page4.png",
    ],
    prototypeUrl:
      "https://embed.figma.com/proto/tUBRWjFTLAyiU3z5pQxeog/OldManila_UiDesign?page-id=87%3A8&node-id=188-6385&viewport=-2416%2C1286%2C0.66&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=188%3A6385&show-proto-sidebar=1&embed-host=share",
    link: "https://www.figma.com/design/tUBRWjFTLAyiU3z5pQxeog/OldManila_UiDesign?node-id=0-1&t=PQzn7N0bVXQchzxP-1",
  },
  {
    id: 4,
    title: "My First Portfolio Design",
    images: ["/assets/design/design4/page1.png"],
    prototypeUrl: "",
    link: "",
  },
  {
    id: 5,
    title: "Merciful Design",
    images: [
      "/assets/design/design5/page1.png",
      "/assets/design/design5/page2.png",
    ],
    prototypeUrl: "",
    link: "",
  },
  {
    id: 6,
    title: "Phanthom Troupe Hunter x Hunter Design",
    images: [
      "/assets/design/design6/page1.jpg",
      "/assets/design/design6/page2.jpg",
    ],
    prototypeUrl: "",
    link: "",
  },
  {
    id: 7,
    title: "Activity Brew Haven And Personal Logo Design",
    images: [
      "/assets/design/design7/page1.jpg",
      "/assets/design/design7/page2.jpg",
    ],
    prototypeUrl: "",
    link: "",
  },
  {
    id: 8,
    title: "Activity UI and UX Design",
    images: [
      "/assets/design/design8/page1.jpg",
      "/assets/design/design8/page2.jpg",
    ],
    prototypeUrl: "",
    link: "",
  },
];

export default function Design() {
  const [selected, setSelected] = useState<Design | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const slides = selected?.images.map((img) => ({ src: img })) || [];

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section
      id="design"
      className="xl:max-w-[1400px] w-full h-auto px-0 relative  overflow-hidden"
    >
      <div className="h-[150px] md:h-[150px] lg:h-[150px] w-full xl:max-w-[1400px] relative">
        <div
          className="absolute  border-[#171E25] left-[1rem] lg:left-[3rem] top-[6rem] xl:top-[6rem] z-1"
          data-aos="fade-right"
        >
          <h3
            className="px-3 py-1 border-l-4 text-3xl font-bold text-[#171E25] hover:bg-[#171E25]/20 hover:cursor-pointer hover:pr-[10rem] transition-all duration-200"
            style={{ clipPath: "polygon(0% 0, 100% 0, 92% 100%, 0 100%)" }}
          >
            Design
          </h3>
        </div>
      </div>

      <div className="relative w-full h-[2100px] sm:h-[1100px] md:h-[1100px] lg:h-[900px] bg-gradient-to-bl from-transparent via-70% via-transparent to-[#460000]/70">
        <img
          src="/assets/images/design-bg.png"
          alt="logo"
          className="w-[300px] sm:w-[380px] md:w-[400px] xl:w-[500px] h-auto absolute bottom-0 right-0 lg:bottom-0 lg:left-0 grayscale-30 contrast-120 z-[1] hidden lg:block border-b-[2rem] border-[#171E25]/50"
          data-aos="fade-up"
        />

        <div className="absolute w-full h-full top-0 left-0  p-10">
          <div className="w-full h-full grid grid-cols-1 lg:grid-cols-3">
            <div className="w-full h-full "></div>
            <div className="col-span-1 lg:col-span-2 w-full h-full flex justify-center items-center p-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
                {designs.map((design, index) => (
                  <motion.div
                    key={design.id}
                    whileHover={{ scale: 1.01 }}
                    onClick={() => setSelected(design)}
                    className="cursor-pointer overflow-hidden rounded-sm bg-white shadow-lg p-1"
                    data-aos="fade-left"
                    data-aos-delay={index * 300}
                  >
                    <img
                      src={design.images[0]}
                      alt={design.title}
                      className="w-full h-40 object-cover hover:scale-102 transition-all duration-200"
                    />
                    <div className="p-4 text-center font-bold text-[#171E25]">
                      {design.title}
                    </div>
                  </motion.div>
                ))}
              </div>

              <AnimatePresence>
                {selected && (
                  <motion.div
                    key="modal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-1000 p-5"
                    onClick={() => setSelected(null)}
                  >
                    <motion.div
                      initial={{ scale: 0.95 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0.9 }}
                      onClick={(e) => e.stopPropagation()}
                      className="bg-white rounded-sm shadow-2xl w-full h-full overflow-y-auto"
                    >
                      <div className="w-full h-[60px] shadow-sm flex items-center justify-start sticky top-0 z-1 bg-white">
                        <h1 className="text-xl font-normal text-[#171E25] px-5">
                          {selected.title}
                        </h1>
                        <button
                          onClick={() => setSelected(null)}
                          className="absolute top-3 right-4 text-white bg-[#171E25]/80 px-3 transition-all duration-300 rounded-sm hover:bg-[#171E25] text-[25px] transform hover:scale-105"
                        >
                          &times;
                        </button>
                      </div>
                      <div className="w-full h-full grid grid-cols-1 md:grid-cols-3">
                        <div className="col-span-1 md:col-span-1 p-5">
                          <div className="col-span-1 md:col-span-1 w-full h-[800px] lg:h-[800px]">
                            <div className="w-full h-full bg-black/10 rounded-sm overflow-hidden">
                              {selected.prototypeUrl ? (
                                <iframe
                                  src={selected.prototypeUrl}
                                  allowFullScreen
                                  className="w-full  h-full object-cover rounded-sm"
                                  title={`${selected.title} Prototype`}
                                ></iframe>
                              ) : (
                                <div className="w-full h-[400px] flex items-center justify-center text-md text-gray-500">
                                  No prototype available
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 p-5 w-full h-[500px]">
                          {selected?.images?.map((img, index) => (
                            <div
                              key={index}
                              onClick={() => {
                                setLightboxIndex(index);
                                setLightboxOpen(true);
                              }}
                              className="p-2 shadow-xl border border-gray-200 rounded-sm hover:scale-102 transition-all duration-300 hover:shadow-2xl h-[250px]"
                            >
                              <img
                                src={img}
                                alt={`${selected.title} - ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}

                          {selected && (
                            <Lightbox
                              open={lightboxOpen}
                              close={() => setLightboxOpen(false)}
                              index={lightboxIndex}
                              slides={slides}
                              plugins={[Zoom]}
                            />
                          )}

                          <div className="absolute bottom-8 right-8">
                            {selected.link ? (
                              <a
                                href={selected.link}
                                target="_blank"
                                className="text-white bg-[#171E25]/80 px-2 py-2 transition-all duration-300 rounded-sm hover:bg-[#171E25]"
                              >
                                Go to{" "}
                                <span className="font-semibold">
                                  {selected.title}
                                </span>{" "}
                                Design <i className="fab fa-figma pl-2"></i>
                              </a>
                            ) : (
                              <span className="text-white bg-gray-500 px-2 py-2 transition-all duration-300 rounded-sm cursor-not-allowed">
                                No link available
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute w-full h-full top-0 left-0 z-[-1] bg-gradient-to-t from-transparent via-70% via-[#460000]/20 via-50% to-[#171E25]/20"
        style={{
          clipPath:
            "polygon(0% 0%, 0 6%, 64% 6%, 64% 28%, 86% 28%, 86% 100%, 100% 100%, 100% 0%)",
        }}
      ></div>
    </section>
  );
}
