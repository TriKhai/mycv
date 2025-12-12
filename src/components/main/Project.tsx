import { useState } from "react";
import ProjectModal from "./ProjectModal";
import { projects, type Project } from "../../data/projectsData";

export default function Project() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">Kinh nghiệm làm việc</h2>
      {projects.map((project, index) => (
        <div
          className="mb-6 hover:bg-gray-100"
          key={index}
          onClick={() => setSelectedProject(project)}
        >
          <h3 className="font-bold">
            {project.title}{" "}
            <span className="float-right text-sm font-normal">
              {project.date}
            </span>
          </h3>
          <div className="text-sm italic">
            <span className="font-semibold mr-2">Vai trò:</span>
            <span className="text-gray-700">{project.position}</span>
          </div>
          <div className="text-sm italic">
            <span className="font-semibold mr-2">Mô tả:</span>
            <span className="text-gray-700">{project.description}</span>
          </div>
          <div className="text-sm italic">
            <span className="font-semibold mr-2">Tính năng:</span>
            <span className="text-gray-700">{project.feature}</span>
          </div>
          <div className="text-sm italic">
            <span className="font-semibold mr-2">Công nghệ sử dụng:</span>
            <span className="text-gray-700">{project.technology}</span>
          </div>


          <p className="text-sm">
            🔗{" "}
            <a className="text-blue-600 underline" href={project.link}>
              {project.link}
            </a>
          </p>
        </div>
      ))}

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
