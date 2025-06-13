import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Artworks() {
  const images = [
    "/portfolio/public/assets/artworks/artwork1.jpg",
    "/portfolio/public/assets/artworks/artwork1.jpg",
    "/portfolio/public/assets/artworks/artwork1.jpg",
    "/portfolio/public/assets/artworks/artwork1.jpg",
    "/portfolio/public/assets/artworks/artwork1.jpg",
    "/portfolio/public/assets/artworks/artwork1.jpg",
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <section className="xl:max-w-[1400px] w-full h-auto px-0 relative overflow-hidden">
      <div className="w-full h-full p-2 lg:p-10">
        <div className="grid grid-cols-3 xl:grid-cols-3 gap-4 px-4 py-4">
          <div
            className="w-full h-80 rounded-md col-span-3 shadow-md cursor-pointer"
            onClick={() => {
              setLightboxIndex(0);
              setLightboxOpen(true);
            }}
          >
            <img
              src={images[0]}
              alt="Artwork 1"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="col-span-3 grid grid-rows-3 grid-flow-col gap-4 leading-10">
            <div
              className="w-full h-96 bg-fuchsia-900  rounded-sm row-span-3"
              onClick={() => {
                setLightboxIndex(1);
                setLightboxOpen(true);
              }}
            >
              <img
                src={images[1]}
                alt="Artwork 2"
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
            <div className="p-4 w-full h-80 bg-fuchsia-800  rounded-sm col-span-2">
              &nbsp;
            </div>
            <div className="p-4 w-full bg-fuchsia-700  rounded-sm row-span-2 col-span-2">
              &nbsp;
            </div>
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={images.map((src) => ({ src }))}
          index={lightboxIndex}
          animation={{ fade: 300, swipe: 300 }}
        />
      )}
    </section>
  );
}
