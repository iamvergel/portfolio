// src/App.tsx

import TopNav from "./main/topnav";
import Home from "./main/home";


export default function App() {



  return (
    <>
      <TopNav />
      <Home />

      <div className="h-96 w-full bg-gradient-to-tr from-[#ffffff] via-[#ffffff] via-[#ffffff] via-[#ffffff] via-[#ffffff] via-[rgba(36,30,37,0)] via-[rgba(36,30,37,0.10)] to-[rgba(70,0,0,1)]"></div>

      <section
        className="h-screen w-full bg-gradient-to-br from-[#ffffff] via-[#ffffff] via-[#ffffff] via-[#ffffff] via-[#ffffff] via-[rgba(36,30,37,0)] via-[rgba(36,30,37,0.10)] to-[rgba(70,0,0,1)]"
        id="about"
      ></section>

      <section
        className="h-screen w-full bg-gradient-to-br from-[#ffffff] via-[#ffffff] via-[#ffffff] via-[#ffffff] via-[#ffffff] via-[rgba(36,30,37,0)] via-[rgba(36,30,37,0.10)] to-[rgba(70,0,0,1)]"
        id="design"
      ></section>

      <section
        className="h-screen w-full bg-gradient-to-br from-[#ffffff] via-[#ffffff] via-[#ffffff] via-[#ffffff] via-[#ffffff] via-[rgba(36,30,37,0)] via-[rgba(36,30,37,0.10)] to-[rgba(70,0,0,1)]"
        id="artworks"
      ></section>

      <section
        className="h-screen w-full bg-gradient-to-br from-[#ffffff] via-[#ffffff] via-[#ffffff] via-[#ffffff] via-[#ffffff] via-[rgba(36,30,37,0)] via-[rgba(36,30,37,0.10)] to-[rgba(70,0,0,1)]"
        id="projects"
      ></section>
    </>
  );
}
