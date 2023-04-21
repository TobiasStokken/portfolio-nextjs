import Image from "next/image";
import Link from "next/link";
import React from "react";
import androidAppImg from "../public/assets/projects/dart.png";
import hkraftImg from "../public/assets/projects/hkraft.png";
import ProjectItem from "./projectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full lg:h-scre">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Prosjekter
        </p>
        <h2 className="py-4">Hva Jeg Har Jobbet Med</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Nextjs portfolio"
            backgroundImg={nextjsImg}
            projectUrl="/nextjs"
            tech="Nextjs med react og tailwind"
          />
          <ProjectItem
            title="Haugaland kraft bestlling side"
            backgroundImg={hkraftImg}
            projectUrl="/hkraft"
            tech="Vue/go"
          />
          <ProjectItem
            title="Random Ord Generator"
            backgroundImg={androidAppImg}
            projectUrl="/androidApp"
            tech="Dart/Flutter for Android"
          />
          <ProjectItem
            title="Random Ord Generator"
            backgroundImg={androidAppImg}
            projectUrl="/androidApp"
            tech="Dart/Flutter for Android"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
