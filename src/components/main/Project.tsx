import { useState } from "react";
import ProjectModal from "./ProjectModal";
import { projects, type Project } from "../../data/projectsData";

// export interface Project {
//   title: string;
//   position: string;
//   feature: string;
//   technology: string;
//   link: string;
//   date: string;
//   description: string;
// }

// const projects: Project[] = [
//   {
//     title: "Website quản lý bán đồ chơi",
//     position: "Fullstack Developer",
//     feature:
//       "Đăng nhập, đăng ký, phân quyền, danh mục sản phẩm, mượn sản phẩm, quản lý, quên mật khẩu (email),...",
//     technology: "Spring Boot (Java), MySQL, React, Typescript, TailwindCSS,...",
//     link: "https://github.com/TriKhai/toycollect",
//     date: "3/2023",
//     description: "Xây dựng hệ thống quản lý bán đồ chơi",
//   },
//   {
//     title: "Website quản lý thư viện sách",
//     position: "Fullstack Developer",
//     feature:
//       "Đăng nhập, đăng ký, phân quyền, danh mục sách, mượn sách, quản lý thư viện sách,...",
//     technology: "NodeJS (Express), Mongodb, VueJS, ...",
//     link: "https://github.com/TriKhai/LibraZone/",
//     date: "10/2023",
//     description: "Xây dựng hệ thống quản lý thư viện sách",
//   },
//   {
//     title: "Dự Đoán Thiên Thạch Có Khả Năng Va Chạm Với Trái Đất",
//     position: "Developer",
//     feature: "Đưa ra dự đoán khả năng thiên thạch có va vào trái đất hay không",
//     technology: "Máy học ứng dụng, Python",
//     link: "https://astraeus.streamlit.app/",
//     date: "10/2023",
//     description:
//       "Vận dụng kiến thức máy học ứng dụng để xây dựng mô hình AI dự đoán khả năng va chạm của thiên thạch đến với trái đất thông qua các số liệu của thiên thạch.",
//   },
//   {
//     title: "Dự Đoán Thiên Thạch Có Khả Năng Va Chạm Với Trái Đất",
//     position: "Developer",
//     feature: "Đưa ra dự đoán khả năng thiên thạch có va vào trái đất hay không",
//     technology: "Máy học ứng dụng, Python",
//     link: "https://astraeus.streamlit.app/",
//     date: "10/2023",
//     description:
//       "Vận dụng kiến thức máy học ứng dụng để xây dựng mô hình AI dự đoán khả năng va chạm của thiên thạch đến với trái đất thông qua các số liệu của thiên thạch.",
//   },
//   {
//     title: "Thuật Toán Simulated Annealing",
//     position: "Developer",
//     feature:
//       "Tim đường đi cho bài toán TSP bằng giải thuật Simulated Annealing",
//     technology: "Python",
//     link: "https://github.com/TriKhai/stimul-anneal",
//     date: "10/2024",
//     description:
//       "Áp dụng kiến thức thuật toán Simulated Annealing trong trí tuệ nhân tạo để giải quyết bài toán TSP",
//   },
//   {
//     title: "Website Ẩm Thực Miền Tây",
//     position: "Frontend Developer",
//     feature:
//       "Trang chủ, Trang admin, danh mục sản phẩm, đặt hàng, đăng nhập, đăng ký, ....",
//     technology: "HTML, CSS, Bootstrap, JQuery",
//     link: "https://github.com/TriKhai/foodweb",
//     date: "2023-2024",
//     description:
//       "Áp dụng kiến thức về website cơ bản, có tích hợp thư viện bootstrap",
//   },
// ];

export default function Project() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">Dự án</h2>
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
