import Avatar from "../components/slidebar/Avatar";
import Contact from "../components/slidebar/Contact";
import Education from "../components/slidebar/Education";
import Skill from "../components/slidebar/Skill";
import Language from "../components/slidebar/Language";
import Project from "../components/main/Project";

export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row max-w-5xl mx-auto my-10 shadow-lg">
        <aside className="w-full md:w-1/3 bg-[#1d3557] text-white p-6 flex flex-col items-center">
          <Avatar />
          <Contact />
          <Education />
          <Skill />
          {/* <Language /> */}
        </aside>
        {/* Main content */}
        <main className="w-full md:w-2/3 bg-white p-8">
          <Project />
        </main>
      </div>
    </div>
  );
}
