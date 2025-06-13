import { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Zoom from "yet-another-react-lightbox/plugins/zoom";

export default function Artwork() {
  const images = [
    {
      src: "/assets/artworks/artwork1.jpg",
      title: "Artwork 1",
      description: "This is a description of artwork 1",
    },
    {
      src: "/assets/artworks/artwork2.jpg",
      title: "Artwork 2",
      description: "This is a description of artwork 2",
    },
    {
      src: "/assets/artworks/artwork3.jpg",
      title: "Artwork 3",
      description: "This is a description of artwork 3",
    },
    {
      src: "/assets/artworks/artwork4.jpg",
      title: "Artwork 4",
      description: "This is a description of artwork 4",
    },
    {
      src: "/assets/artworks/artwork5.jpg",
      title: "Artwork 5",
      description: "This is a description of artwork 5",
    },
    {
      src: "/assets/artworks/artwork6.jpg",
      title: "Artwork 6",
      description: "This is a description of artwork 6",
    },
    {
      src: "/assets/artworks/artwork7.jpg",
      title: "Artwork 7",
      description: "This is a description of artwork 7",
    },
    {
      src: "/assets/artworks/artwork8.jpg",
      title: "Artwork 8",
      description: "This is a description of artwork 8",
    },
    {
      src: "/assets/artworks/artwork9.jpg",
      title: "Artwork 9",
      description: "This is a description of artwork 9",
    },
    {
      src: "/assets/artworks/artwork10.jpg",
      title: "Artwork 10",
      description: "This is a description of artwork 10",
    },
    {
      src: "/assets/artworks/artwork11.jpg",
      title: "Artwork 11",
      description: "This is a description of artwork 11",
    },
    {
      src: "/assets/artworks/artwork12.jpg",
      title: "Artwork 12",
      description: "This is a description of artwork 12",
    },
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <section
      className="xl:max-w-[1400px] w-full h-auto  px-0 relative overflow-hidden"
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
            className="absolute w-[80%] lg:w-[900px] xl:w-[1000px] xl:max-w-[1200px] h-full bg-gray-100"
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
            Artworks
          </h3>
        </div>
      </div>

      <div className="xl:max-w-[1400px] w-full h-auto p-2 lg:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-4 pt-10">
          {images.map((img, i) => (
            <div
              key={i}
              className={`group w-auto h-[500px] shadow-lg rounded-sm p-3 relative overflow-hidden ${
                i === 0 ? "col-span-1 sm:col-span-2 lg:col-span-3" : "col-span-1 sm:col-span-1 lg:col-span-1"
              }` } data-aos="fade-up" data-aos-delay={i * 100}
              onClick={() => {
                setLightboxIndex(i);
                setLightboxOpen(true);
              }}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover rounded-sm transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute h-full w-full bg-black/50 bottom-0 left-0 p-4 hover:bg-black/30 transition-all duration-200">
                <div className="text-white absolute bottom-0 left-0 p-4">
                  <h4 className="text-4xl font-bold">{img.title}</h4>
                  <p className="text-[18px]">{img.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={images.map((img) => ({
            src: img.src,
            title: img.title,
            description: img.description,
          }))}
          index={lightboxIndex}
          animation={{ fade: 300, swipe: 300 }}
          plugins={[Zoom]}
        />
      )}
    </section>
  );
}
