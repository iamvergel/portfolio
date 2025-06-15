import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  Timestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCccjYddyAiZKzZhUwbTaVodTCiUblhYsM",
  authDomain: "portfolio-ce801.firebaseapp.com",
  projectId: "portfolio-ce801",
  storageBucket: "portfolio-ce801.firebasestorage.app",
  messagingSenderId: "279198391501",
  appId: "1:279198391501:web:2d4acf7d9f2354dc69dd84",
  measurementId: "G-MEQTHDV749",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const validTokens = [
  "ILOMDY-Zw9KHYo5amMdQDAzfSMCknwYo9QgShCA4?nyviFga9CZVIPI?uSiv3GqY",
  "U!es3nz8UOlWJkowGZbU46fh-0muxZ2Z=jX?Iu/sYQR9!B9FyBuNuK=8sREOagDv",
  "548N-G2ogMZ1zw7vC5B7O1UQ4pWNhcphaybP3R70AOHVn-=aVIGKDI1-O55QyfK3",
  "i0Mfe5IKdAYFUCBKhceamZQZO!7CJ18FZDxTX!x?ZbsJGMG8/gv9JwahD5l38I3i",
  "-fPOUhIOZsRz8tJ8hUmdib7fwuG-2/y4FmGA!WFa2?Taoh4rmpSyqNNdZ=T/-Pg6",
];

type TestimonialType = {
  name: string;
  email: string;
  position: string;
  testimonial: string;
  createdAt: Timestamp;
};

export default function Testimonial() {
  const [testimonials, setTestimonials] = useState<TestimonialType[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const fetchTestimonials = async () => {
    try {
      const snapshot = await getDocs(collection(db, "testimonials"));
      const list: TestimonialType[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        if (data.status === 1) {
          list.push(data as TestimonialType);
        }
      });
      setTestimonials(list);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (alertMessage) {
      const timer = setTimeout(() => setAlertMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [alertMessage]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validTokens.includes(token)) {
      setAlertMessage("Invalid token");
      return;
    }

    if (!/^[\w-\.]+@([\w-]+\.)+(com|ph)$/.test(email)) {
      setAlertMessage("Invalid email format");
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "testimonials"), {
        name,
        email,
        position,
        testimonial: message,
        createdAt: Timestamp.now(),
        status: 1,
      });

      setName("");
      setEmail("");
      setPosition("");
      setMessage("");
      setToken("");
      setIsModalOpen(false);
      setAlertMessage("Testimonial submitted!");
      fetchTestimonials();
    } catch (err) {
      console.error(err);
      setAlertMessage("Submission failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="w-full xl:max-w-[1400px] mx-auto min-h-[700px] relative overflow-hidden "
      id="testimonial"
    >
      <div className="text-center mb-10 w-full py-10"></div>
      <div
        className="text-center bg-[#171E25] mb-10 w-full py-10"
        style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)" }}
      >
        <h2 className="text-4xl font-bold text-white mb-2">Testimonials</h2>
        <p className="text-white text-lg">See what others have said</p>
      </div>

      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-1 gap-5 px-10 py-10 flex justify-center">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`w-full flex ${
              i % 2 === 0 ? "justify-start text-left" : "justify-end text-right"
            }`}
          >
            <div className="w-full lg:w-[80%] bg-white p-6 shadow-lg rounded-md w-full py-10 relative">
              <h4 className="font-semibold text-[#2F465B]">
                <span
                  className={`bg-[#2F465B] text-white px-2 py-0 rounded-full ${
                    i % 2 === 0 ? "hidden" : ""
                  } `}
                >
                  {t.position}
                </span>{" "}
                {t.name}{" "}
                <span
                  className={`bg-[#2F465B] text-white px-2 py-0 rounded-full ${
                    i % 2 === 0 ? "" : "hidden"
                  } `}
                >
                  {t.position}
                </span>
              </h4>

              <p className="text-sm text-[#2F465B] pt-1">{t.email}</p>
              <p
                className={`text-sm text-[#2F465B]/80 absolute bottom-4 ${
                  i % 2 === 0 ? "right-4" : "left-4"
                }`}
              >
                {t.createdAt.toDate().toDateString()}
              </p>
              <p className=" text-[#2F465B] pt-3 text-md ">“{t.testimonial}”</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center py-10 px-10">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#2F465B] text-white px-6 py-3 rounded hover:bg-[#171E25] transition"
        >
          <i className="fas fa-quote-left pr-2"></i> Leave a Testimonial
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-1000 p-3">
          <div className="relative bg-white p-5 rounded-sm shadow-lg max-w-xl w-full mx-4">
            <div className="w-full h-[60px] bg-white shadow-sm flex items-center justify-start sticky top-0 z-1">
              <h1 className="text-xl font-normal text-[#171E25] px-5">
                Leave a Testimonial
              </h1>
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-4 text-white bg-[#171E25]/80 px-3 transition-all duration-300 rounded-sm hover:bg-[#171E25] text-[25px] transform hover:scale-105"
              >
                &times;
              </button>
            </div>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 flex flex-col gap-2 pt-5"
            >
              {alertMessage && (
                <div className="bg-red-100 border border-red-200 text-red-700 px-4 py-3 rounded relative mb-4">
                  <i className="fas fa-exclamation-triangle pr-2"></i>
                  {alertMessage}
                </div>
              )}
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-2 border border-gray-300 rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email ex: vergelmacayan@gmail.com"
                className="w-full p-2 border border-gray-300 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Work Position / Work Role"
                className="w-full p-2 border border-gray-300 rounded"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                required
              />
              <textarea
                placeholder="Your Testimonial About to @Vergel Macayan"
                rows={4}
                className="w-full p-2 border border-gray-300 rounded"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Token"
                className="w-full p-2 border border-gray-300 rounded"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                required
              />
              <small className="text-gray-500 text-sm flex items-center gap-1 mt-1">
                <i className="fas fa-info-circle"></i>
                The token will be provided by the developer. Please enter it
                here.
              </small>
              <div className="flex justify-center pt-5">
                <button
                  type="submit"
                  className={`w-full bg-[#2F465B] text-white p-2 rounded transition ${
                    loading
                      ? "cursor-wait hover:bg-[#2F465B]"
                      : "hover:bg-[#171E25]"
                  }`}
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit Testimonial"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div
        className="text-center bg-[#171E25]/90 mb-10 w-full py-10"
        style={{ clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)" }}
      ></div>
    </section>
  );
}

