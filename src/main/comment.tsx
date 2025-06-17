import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { doc, updateDoc, increment } from "firebase/firestore";
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

type CommentType = {
  id?: string;
  email: string;
  comment: string;
  createdAt: Timestamp;
  likes?: number;
};

export default function Comment() {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [likedComments, setLikedComments] = useState<Set<string>>(new Set());

  const fetchComments = async () => {
    try {
      const snapshot = await getDocs(collection(db, "comments"));
      const list: CommentType[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        if (data.status === 1) {
          list.push({
            ...(data as CommentType),
            id: doc.id,
            likes: data.likes || 0,
          });
        }
      });
      setComments(list);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleLike = async (id: string) => {
    if (likedComments.has(id)) return;

    try {
      const docRef = doc(db, "comments", id);
      await updateDoc(docRef, {
        likes: increment(1),
      });
      setLikedComments((prev) => new Set(prev).add(id));
      fetchComments();
    } catch (error) {
      console.error("Error liking comment:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  useEffect(() => {
    if (alertMessage) {
      const timer = setTimeout(() => setAlertMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [alertMessage]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.endsWith("@gmail.com")) {
      setAlertMessage("Email must be a @gmail.com address.");
      return;
    }

    if (comment.length > 60) {
      setAlertMessage("Comment must be 60 characters or less.");
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "comments"), {
        email,
        comment,
        createdAt: Timestamp.now(),
        status: 1,
      });

      setEmail("");
      setComment("");
      setAlertMessage("Comment submitted!");
      fetchComments();
    } catch (err) {
      console.error(err);
      setAlertMessage("Submission failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="w-full xl:max-w-[1400px] mx-auto min-h-[800px] bg-gradient-to-b from-[#171E25]/0 via-[#171E25]/0 to-[#171E25]/50"
      id="comment"
    >
      <div className="text-start px-3 lg:px-10 mb-10 w-full py-10 pt-25 relative">
        <div
          className="absolute w-full h-[70px] bg-gradient-to-r from-transparent via-transparent via-10% to-[#171E25] top-0 left-0 z-[-1]"
          data-aos="fade-left"
        ></div>
        <div
          className="absolute w-full h-[80px] bg-gradient-to-r from-transparent via-transparent via-10% to-[#171E25] top-17.5 left-0 z-[-1]"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div
            className="absolute w-[85%] lg:w-[900px] xl:w-[1000px] xl:max-w-[1200px] h-full bg-gray-100"
            style={{ clipPath: "polygon(0% 0, 90% 0, 100% 100%, 0 100%)" }}
          ></div>
        </div>
        <h2 className="text-4xl font-bold text-[#2F465B] mb-2">Comments</h2>
        <p className="text-[#2F465B] text-md pt-3 sm:pt-0">
          Leave a comment about my website and let me know what you think.
        </p>
      </div>

      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 px-3 lg:px-10 p-10">
        <div className="flex flex-col gap-7 max-h-[500px] overflow-y-auto py-8  pr-2">
          {comments.map((c) => (
            <div
              key={c.id}
              className="w-full bg-white p-6 shadow-lg rounded-md relative text-wrap border border-gray-300"
            >
              <p className="text-md text-[#2F465B]">{c.email}</p>
              <p className="text-sm text-[#2F465B]/80 absolute bottom-4 right-4">
                {c.createdAt.toDate().toDateString()}
              </p>
              <p className="text-[#2F465B] pt-3 text-sm break-words whitespace-pre-wrap pb-3">
                “{c.comment}”
              </p>

              <button
                className="absolute top-[-15px] right-4 flex items-center gap-1 bg-white border border-gray-300 shadow-md hover:bg-[#2F465B]/50 h-10 w-10 justify-center rounded-full"
                onClick={() => handleLike(c.id || "")}
                disabled={likedComments.has(c.id || "")}
              >
                <i
                  className={`fas fa-heart text-xl ${
                    (c.likes || 0) > 0 ? "text-red-500" : "text-gray-400"
                  }`}
                ></i>
                <span className="text-sm text-white bg-[#2F465B] w-6 h-6 rounded-full flex items-center justify-center absolute top-[-8px] right-[-10px]">{c.likes || 0}</span>
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center py-5 bg-white rounded relative px-5">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 flex flex-col gap-4 w-full max-w-md relative"
          >
            {alertMessage && (
              <div
                className={`${
                  alertMessage.includes("Comment submitted!")
                    ? "bg-green-100 border border-green-200 text-green-700"
                    : "bg-red-100 border border-red-200 text-red-700 "
                } px-4 py-3 rounded relative mb-4`}
              >
                {alertMessage}
              </div>
            )}
            <input
              type="email"
              placeholder="Email ex: vergelmacayan@gmail.com"
              className="w-full p-2 border border-gray-300 rounded text-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="Your Comment (Max 60 chars)"
              rows={6}
              maxLength={60}
              className="w-full p-2 border border-gray-300 rounded text-md"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
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
                {loading ? (
                  "Submitting..."
                ) : (
                  <>
                    Submit Comment <i className="fas fa-paper-plane pl-2"></i>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

