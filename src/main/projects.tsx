import { useEffect, useState } from "react";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  stargazers_count: number;
};

const repoImages: { [key: string]: string } = {
  "portfolio-site": "/images/portfolio-site.png",
  "weather-app": "/images/weather-app.png",
  "chat-app": "/images/chat-app.png",
};

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/iamvergel/repos")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data
          .sort((a: Repo, b: Repo) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6);
        setRepos(sorted);
      })
      .catch((err) => console.error("Error fetching repos:", err));
  }, []);

  return (
    <section id="projects" className="py-12 px-4 bg-gray-100 text-black ">
      <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="bg-white border rounded-xl shadow hover:shadow-lg transition p-5 flex flex-col justify-between"
          >
            {/* Image */}
            {repoImages[repo.name] && (
              <img
                src={repoImages[repo.name]}
                alt={repo.name}
                className="rounded-md mb-4 w-full h-40 object-cover"
              />
            )}

            <div>
              <h3 className="text-xl font-semibold text-[#460000] mb-2">
                {repo.name}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                {repo.description || "No description available."}
              </p>
              <p className="text-xs text-gray-500">
                Language: {repo.language || "N/A"}
              </p>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                View on GitHub →
              </a>
              <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                ⭐ {repo.stargazers_count}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
