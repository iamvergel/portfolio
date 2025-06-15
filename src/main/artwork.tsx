import { useState, useRef } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

export default function Artwork() {
  const images = [
    {
      src: "/assets/artworks/artwork1.jpg",
      title: "CIM Art Collab",
      description:
        "This painting is made up of 56 individual canvases. Each piece has its own meaning, but when combined, they form a single, unified artwork. It was a collaborative project created by six people.",
    },
    {
      src: "/assets/artworks/artwork2.jpg",
      title: "TWICE Sana",
      description:
        "I made this in 5 days using Faber-Castell pencils. It’s a detailed portrait of Twice’s Sana, and one of my favorite pencil portrait artworks.",
    },
    {
      src: "/assets/artworks/artwork3.jpg",
      title: "The Akatsuki",
      description:
        "I drew this using a Pentel pen and a black ballpen. It’s a fan art of the Akatsuki group from Naruto.",
    },
    {
      src: "/assets/artworks/artwork4.jpg",
      title: "Brook",
      description:
        "A fan art of Brook from One Piece. I made this using colored pencils. He's one of my favorite anime characters.",
    },
    {
      src: "/assets/artworks/artwork5.jpg",
      title: "BLACKPINK Jennie",
      description: "No description yet",
    },
    {
      src: "/assets/artworks/artwork6.jpg",
      title: "MNL48 Coleen Trinidad",
      description: "No description yet",
    },
    {
      src: "/assets/artworks/artwork7.jpg",
      title: "SB19 Felip - Bulan MV",
      description:
        "A charcoal portrait fan art of Felip from SB19, inspired by the Bulan music video. I used charcoal powder and charcoal pencil to create this piece. He's one of my idols.",
    },
    {
      src: "/assets/artworks/artwork8.jpg",
      title: "Self Portrait",
      description: "No description yet",
    },
    {
      src: "/assets/artworks/artwork9.jpg",
      title: "TWICE Sana B/W",
      description: "No description yet",
    },
    {
      src: "/assets/artworks/artwork10.jpg",
      title: "Chris Brown",
      description: "No description yet",
    },
    {
      src: "/assets/artworks/artwork11.jpg",
      title: "MNL48 Gabb",
      description: "No description yet",
    },
    {
      src: "/assets/artworks/artwork12.jpg",
      title: "HxH SPIDER no.8 Feitan",
      description: "No description yet",
    },
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  type ImageType = {
    src: string;
    title: string;
    description: string;
    index: number;
  };

  const columns: ImageType[][] = [[], [], [], []];
  images.forEach((img, i) => {
    columns[i % 4].push({ ...img, index: i });
  });

  const gridRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full xl:max-w-[1400px] mx-auto p-0 px-0" id="artwork">
      <div className="p-0 px-5 py-5 pb-10 lg:p-10 lg:px-20">
        <p className="text-[14px] text-[#171E25] text-justify">
          Before I tried web development, I started with art. Everything I
          learned about colors, design, and basic art skills, I now apply to
          design and building websites. Art gave me the foundation I use in web
          design today.
        </p>
      </div>

      <div
        ref={gridRef}
        className="grid grid-cols-2 lg:grid-cols-4 gap-1 lg:gap-4 h-[full] overflow-y-hidden px-3 lg:px-20 py-3 lg:py-10 bg-gradient-to-t from-[#171E25]/10 to-[#171E25]/0 scrollbar-thin scrollbar-thumb-[#171E25c7] scrollbar-track-[#171E255b] stable-scrollbar transition duration-300 ease-in-out"
        // onTouchStart={() => {
        //   if (gridRef.current) {
        //     gridRef.current.style.overflowY = "scroll";
        //   }
        // }}
        // onTouchEnd={() => {
        //   if (gridRef.current) {
        //     gridRef.current.style.overflowY = "hidden";
        //   }
        // }}
        // onMouseEnter={() => {
        //   if (gridRef.current) {
        //     gridRef.current.style.overflowY = "scroll";
        //   }
        // }}
        // onMouseLeave={() => {
        //   if (gridRef.current) {
        //     gridRef.current.style.overflowY = "hidden";
        //   }
        // }}
      >
        {columns.map((col, colIndex) => (
          <div key={colIndex} className="grid gap-1 lg:gap-4">
            {col.map((img) => (
              <div
                key={img.index}
                onClick={() => {
                  setLightboxIndex(img.index);
                  setLightboxOpen(true);
                }}
                className="cursor-pointer group bg-white rounded-lg overflow-hidden p-2 relative"
                data-aos="fade-up"
                data-aos-delay={img.index * 100}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full rounded-lg object-cover object-center transition-transform duration-300 group-hover:scale-105 group-active:scale-105"
                />
                <div className="absolute h-full w-full bg-black/60 bottom-0 left-0 p-4 hover:bg-black/10 transition-all duration-200 group-active:bg-black/10">
                  <div className="text-white absolute bottom-0 left-0 p-4">
                    <h4 className="text-xl lg:text-3xl font-bold opacity-100 lg:opacity-100 group-hover:opacity-0 group-active:opacity-0">
                      {img.title}
                    </h4>
                    <p className="text-[12px] lg:text-[14px] hidden sm:block opacity-100 lg:opacity-100 group-hover:opacity-0 group-active:opacity-0">
                      {img.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
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
          on={{
            view: ({ index }) => setLightboxIndex(index),
          }}
          animation={{ fade: 300, swipe: 300 }}
          plugins={[Zoom]}
        />
      )}
    </section>
  );
}
