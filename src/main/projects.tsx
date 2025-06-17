import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

type ProjectType = {
  name: string;
  description: string;
  tech: string[];
  images: string[];
  link: string;
  domain: string;
};

const projects: ProjectType[] = [
  {
    name: "SIMGT - St.Emilie Learning Center Student Portal",
    description:
      "The SIMGT is a student portal with five user roles: Super Admin, Admission, Registrar, Teacher, and Student. It manages and displays student and teacher information. Students can view their grades, access announcements, and interact with the portal based on their role.",
    tech: [
      "Laravel",
      "PHP",
      "JavaScript",
      "Blade",
      "Tailwind",
      "MySQL",
      "Restful API",
    ],
    images: [
      "/assets/project/project1/page1.png",
      "/assets/project/project1/page2.png",
      "/assets/project/project1/page3.png",
      "/assets/project/project1/page4.png",
      "/assets/project/project1/page5.png",
    ],
    link: "",
    domain: "https://www.simgt66.com/",
  },
  {
    name: "TLAD - Tala Learning and Development",
    description:
      "TLAD (Tala Learning and Development) is a web-based system designed to manage and store employee training certificates. It allows administrators to track which employees have attended seminars or training sessions each year. The platform includes features for uploading certificates, generating reports, and monitoring employee learning progress over time.",
    tech: ["PHP", "JavaScript", "MySQL", "Bootstrap", "jQuery"],
    images: [
      "/assets/project/project2/page1.png",
      "/assets/project/project2/page2.png",
      "/assets/project/project2/page3.png",
    ],
    link: "",
    domain: "",
  },
  {
    name: "Villa Reyes Family Private Resort Reservation System",
    description:
      "Villa Reyes Family Private Resort Reservation System is a backend-focused web application developed using PHP and MySQL. It allows users to make resort reservations online while providing an admin dashboard for managing bookings, users, and website content. The system features two main user roles: admin and regular users. Admins have full control over the reservation system, including approving or declining bookings and updating resort information.",
    tech: ["PHP", "JavaScript", "MySQL", "Bootstrap", "jQuery"],
    images: [
      "/assets/project/project3/page1.png",
      "/assets/project/project3/page2.png",
      "/assets/project/project3/page3.png",
      "/assets/project/project3/page4.png",
    ],
    link: "",
    domain: "https://villareyesfamilyprivateressort.com/",
  },
  {
    name: "AccuraPos - Point of Sale System",
    description:
      "A comprehensive point of sale system designed to streamline retail operations, manage inventory, and enhance customer experience. This system integrates sales tracking, inventory management, and customer relationship features to provide a complete solution for businesses.",
    tech: [
      "Laravel",
      "PHP",
      "JavaScript",
      "Blade",
      "Tailwind",
      "MySQL",
      "Restful API",
    ],
    images: [
      "/assets/project/project4/page1.png",
      "/assets/project/project4/page2.png",
      "/assets/project/project4/page3.png",
      "/assets/project/project4/page4.png",
      "/assets/project/project4/page5.png",
    ],
    link: "",
    domain: "https://accurapos.shop/",
  },
  {
    name: "Zach Memorial Chapels and Funeral Services",
    description:
      "Zach Memorial Chapels and Funeral Services is a web-based booking system with two main user roles: admin and regular users. The system allows users to book funeral services and manage their personal booking records. Admins have full control over the platform, including managing user bookings, service inventory, and payment records. The system also features real-time notifications with sound alerts for both admins and users to ensure prompt updates and responses.",
    tech: ["PHP", "JavaScript", "MySQL", "Bootstrap", "jQuery"],
    images: [
      "/assets/project/project5/page1.png",
      "/assets/project/project5/page2.png",
      "/assets/project/project5/page3.png",
      "/assets/project/project5/page4.png",
      "/assets/project/project5/page5.png",
    ],
    link: "",
    domain: "",
  },
  {
    name: "Barangay Information Management System",
    description:
      "Barangay Information Management System is a web-based platform designed to efficiently manage resident information, blotter records, and settlements. It offers online services for certificates such as clearance, ID, and indigency, supporting both walk-in and online direct printing options. The system also sends email notifications to residents to inform them when their online requests are ready for claim.",
    tech: [
      "CodeIgniter",
      "PHP",
      "JavaScript",
      "MySQL",
      "Bootstrap",
      "Restful API",
    ],
    images: [
      "/assets/project/project6/page1.png",
      "/assets/project/project6/page2.png",
      "/assets/project/project6/page3.png",
      "/assets/project/project6/page4.png",
      "/assets/project/project6/page5.png",
      "/assets/project/project6/page6.png",
      "/assets/project/project6/page7.png",
      "/assets/project/project6/page8.png",
      "/assets/project/project6/page9.png",
      "/assets/project/project6/page10.png",
    ],
    link: "",
    domain: "https://barangay185bms.com/",
  },
  {
    name: "Merciful Healthcare Management System",
    description:
      "A comprehensive point of sale system designed to streamline retail operations, manage inventory, and enhance customer experience. This system integrates sales tracking, inventory management, and customer relationship features to provide a complete solution for businesses.",
    tech: [
      "CodeIgniter",
      "PHP",
      "JavaScript",
      "Tailwind",
      "Restful API",
      "MySQL",
    ],
    images: [
      "/assets/project/project7/page1.png",
      "/assets/project/project7/page2.png",
    ],
    link: "",
    domain: "https://www.mercifulsaviourhc.com/",
  },
  {
    name: "Attendance Monitoring System",
    description:
      "The Attendance Monitoring System is a web-based application designed to manage and track student attendance efficiently. It features role-based access for admins, teachers, and students. Admins and teachers can generate unique QR codes, which students scan using a scanner integrated with the system. Upon scanning, the system logs the student's time-in and time-out and automatically sends an email notification to their parents. The system enhances accuracy, security, and real-time monitoring of student attendance.",
    tech: ["PHP", "JavaScript", "MySQL", "Bootstrap", "jQuery"],
    images: [
      "/assets/project/project8/page1.png",
      "/assets/project/project8/page2.png",
      "/assets/project/project8/page3.png",
      "/assets/project/project8/page4.png",
      "/assets/project/project8/page5.png",
      "/assets/project/project8/page6.png",
      "/assets/project/project8/page7.png",
    ],
    link: "",
    domain: "",
  },

  {
    name: "ICC - Canteen Ordering System",
    description:
      "ICC Canteen Ordering System is a real-time web application that facilitates canteen orders for students and admin. The system features two main user roles: admin and student. Admins can manage student recess times, control inventory, and oversee student orders. Students can browse the menu and manage their own orders seamlessly. Built with Firebase for real-time data updates, this system ensures smooth and efficient ordering operations.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase", "jQuery", "Node.js"],
    images: [
      "/assets/project/project9/page1.png",
      "/assets/project/project9/page2.png",
      "/assets/project/project9/page3.png",
      "/assets/project/project9/page4.png",
    ],
    link: "",
    domain: "https://icc-ordering-canteen.vercel.app/",
  },
  {
    name: "ICC - Enrollment System",
    description:
      "ICC Enrollment System is a web application designed to manage student enrollment and their personal information. It also allows students to view their enrolled subjects and personal details. The system streamlines enrollment processes and keeps all student records organized in one place.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase", "jQuery"],
    images: [
      "/assets/project/project10/page1.png",
      "/assets/project/project10/page2.png",
      "/assets/project/project10/page3.png",
      "/assets/project/project10/page4.png",
    ],
    link: "",
    domain: "https://icc-enrollment-system.vercel.app/",
  },
  {
    name: "NBAI",
    description:
      "NBAI is a fun project created for our group of friends, where each person has a unique hero role, skill, and personal history. It’s a creative and playful space built to enjoy and share stories together.",
    tech: ["HTML", "CSS", "JavaScript"],
    images: [
      "/assets/project/project11/page1.png",
      "/assets/project/project11/page2.png",
      "/assets/project/project11/page3.png",
      "/assets/project/project11/page4.png",
    ],
    link: "",
    domain: "https://nbai-international.vercel.app/",
  },
  {
    name: "OWLS - Student Management System",
    description:
      "OWLS - Student Management System is the first project I developed during my 3rd year. It features an enrollment system, sends account credentials via email, and manages student information. Although the project is not fully completed, you can view the UI/UX design by visiting the link. Use the credentials: username: Sample, password: Sample.",
    tech: ["PHP", "HTML", "SASS", "CSS", "JavaScript", "MySQL"],
    images: [
      "/assets/project/project12/page1.png",
      "/assets/project/project12/page2.png",
      "/assets/project/project12/page3.png",
      "/assets/project/project12/page4.png",
      "/assets/project/project12/page5.png",
      "/assets/project/project12/page6.png",
      "/assets/project/project12/page7.png",
    ],
    link: "",
    domain: "https://olws-student-management-system.vercel.app/",
  },
];

function ProjectCarousel({ images }: { images: string[] }) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const autoplay = useCallback(() => {
    if (!embla) return;
    const interval = setInterval(() => {
      embla.scrollNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [embla]);

  useEffect(() => {
    const stop = autoplay();
    return () => stop && stop();
  }, [autoplay]);

  const slides = images.map((src) => ({ src }));

  return (
    <>
      <div className="overflow-hidden rounded-sm relative" ref={emblaRef}>
        <div className="flex ">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt=""
              className="flex-[0_0_100%] object-cover h-[200px] w-full cursor-zoom-in"
              onClick={() => {
                setLightboxIndex(index);
                setLightboxOpen(true);
              }}
            />
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          on={{
            view: ({ index }) => setLightboxIndex(index),
          }}
          slides={slides}
          plugins={[Zoom]}
        />
      )}
    </>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section
      className="w-full xl:max-w-[1400px] mx-auto h-auto px-4 py-10"
      id="projects"
    >
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {visibleProjects.map((project, i) => (
          <div
            key={i}
            className="bg-white rounded-md shadow-lg p-3 flex flex-col gap-4"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <ProjectCarousel images={project.images} />
            <h3 className="text-xl font-semibold text-[#2F465B]">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
            </h3>
            <p className="text-[14px] text-gray-600 text-justify">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 text-sm">
              {project.tech.map((tech, j) => (
                <span
                  key={j}
                  className="bg-[#2F465B] hover:bg-[#171E25] text-white px-3 py-2 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-2 justify-center items-center">
              {/* <a
                href={project.domain}
                target="_blank"
                rel="noopener noreferrer"
                className="text-md w-full flex items-center justify-center text-center bg-[#171E25] text-white px-3 py-2 rounded hover:bg-[#2F465B] transition"
              >
                Show More
              </a> */}
              {project.domain ? (
                <a
                  href={project.domain}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md w-full flex items-center justify-center text-center bg-[#171E25] text-white px-3 py-2 rounded hover:bg-[#2F465B] transition"
                >
                  Go to website <i className="fas fa-arrow-right pl-2" />
                </a>
              ) : (
                <button
                  className="text-md w-full flex items-center justify-center text-center bg-gray-500 text-white px-3 py-2 rounded cursor-not-allowed"
                  disabled
                >
                  No Available Link
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center pt-8">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-[#2F465B] text-white px-6 py-2 rounded-sm hover:bg-[#171E25] transition"
        >
          {showAll ? "Show Less" : "Show More"}
          {showAll ? (
            <i className="fas fa-arrow-up pl-2" />
          ) : (
            <i className="fas fa-arrow-down pl-2" />
          )}
        </button>
      </div>
    </section>
  );
}
