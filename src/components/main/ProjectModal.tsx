import React, { MouseEvent } from "react";
import { Project } from "../../data/projectsData";


interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4 animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl animate-slide-up">
        
        {/* --- HEADER --- */}
        <div className="p-4 md:p-6 border-b flex justify-between items-start sticky top-0 bg-white z-10 rounded-t-2xl">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
            <p className="text-gray-500 font-medium">
              {project.position} | {project.date}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 hover:bg-gray-100 p-2 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* --- BODY (Scrollable) --- */}
        <div className="p-4 md:p-6 overflow-y-auto">
          {/* Mô tả */}
          <div className="mb-6">
            <h4 className="font-bold text-gray-800 mb-2 text-lg">Mô tả & Tính năng</h4>
            <p className="text-gray-700 leading-relaxed mb-4">{project.description}</p>
            <p className="text-gray-700 leading-relaxed mb-4">{project.feature}</p>

            <div>
              <span className="font-semibold mr-2">Công nghệ:</span>
              <span className="text-gray-700">{project.technology}</span>
            </div>
            {project.link && (
              <div className="flex items-center mb-2">
                <span className="font-semibold mr-2">Source/Demo:</span>
                <a className="text-blue-600 underline hover:text-blue-800" href={project.link} target="_blank" rel="noreferrer">
                  {project.link}
                </a>
              </div>
            )}

            
          </div>

          {/* Danh sách ảnh */}
          {project.images.length > 0 && (
            <div>
              <h4 className="font-bold text-gray-800 mb-3 text-lg border-t pt-4">Hình ảnh minh họa</h4>
              <div className="space-y-4">
                {project.images.map((imgUrl, idx) => (
                  <div key={idx} className="rounded-lg overflow-hidden border shadow-sm">
                    <img
                      src={imgUrl}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* --- FOOTER --- */}
        <div className="p-4 border-t bg-gray-50 rounded-b-2xl flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-medium transition-colors"
          >
            Đóng lại
          </button>
        </div>
      </div>
    </div>
  );
}