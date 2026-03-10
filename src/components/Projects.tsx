import ProjectSkeleton from "@/loaders/ProjectSkeletonLoader";
import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  interface Tech {
    name: string;
    image?: string;
  }

  const projects = [
    {
      title: "Sentriom",
      description:
        "An in-house AI-based product for Solugenix. A conversational ChatGPT clone supporting file uploads and all OpenAI models in a secure application to leverage AI.",
      image:
        "https://apps.solugenix.com/sentriom/assets/Office_Signage.png",
      technologies: [
        { name: "NestJS", image: "https://nestjs.com/logo-small-gradient.0ed287ce.svg" },
        { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg" },
        { name: "Angular 18", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
        { name: "AI" },
        { name: "OpenAI" },
        { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      ],
      demoLink: "https://apps.solugenix.com/sentriom/login",
      githubLink: "",
    },
    {
      title: "LoveMedia",
      description:
        "Full-stack e-commerce solution with React JS, Node.js, Express JS and MongoDB",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhNE15JFu9jbUGmICmlGqbAR7In8FiwUp6rQ&s",
      technologies: [
        { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" },
        { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg" },
        { name: "Express" },
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "Stripe" },
        { name: "AWS S3" },
        { name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      ],
      demoLink: "https://lovemedia.world",
      githubLink: "https://github.com/praveen-sunhare/ecommerce",
    },
    {
      title: "Car Market Place 2.0 | 2025",
      description:
        "A Car Marketplace is a web platform that allows users to buy, sell, and browse new or used cars, with features like search filters, listings, pricing, and user authentication.",
      image:
        "https://www.shutterstock.com/image-vector/deal-car-logo-design-vector-600nw-2324097589.jpg",
      technologies: [
        { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Tailwind Css" },
        { name: "Redux" },
      ],
      demoLink: "https://marketplace2-switcher.pixel-base.de/",
      githubLink: "https://github.com/praveen-sunhare/taskapp",
    },
    {
      title: "MediaPad Admin Panel",
      description:
        "An Admin Panel built with React.js, Node.js, Express.js, and MongoDB provides a secure and intuitive interface for administrators to manage users, media contents, domains, content packs, and system settings with full CRUD functionality, role-based access control, and real-time updates.",
      image:
        "https://www.shutterstock.com/image-vector/modern-admin-panel-icon-vector-260nw-1580556469.jpg",
      technologies: [
        { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "API Integration" },
        { name: "Express Js" },
        { name: "Tailwind" },
      ],
      demoLink: "https://manage-uat.mediapad.dev/user",
      githubLink: "https://github.com/praveen-sunhare/weather",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="py-12 sm:py-20 px-4 sm:px-6 bg-white dark:bg-slate-800/30 transition-colors duration-500">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            {t('projects_title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-slate-400 max-w-2xl mx-auto">
            {t('projects_subtitle')}
          </p>
        </div>

        {loading ? (
          <ProjectSkeleton count={projects.length} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200 dark:border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group flex flex-col"
              >
                <div className="relative overflow-hidden h-40 sm:h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent dark:from-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-slate-400 mb-4 text-xs sm:text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="flex items-center gap-1 px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-600/20 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium"
                      >
                        {tech.image && (
                          <img
                            src={tech.image}
                            alt={tech.name}
                            className="h-3 sm:h-4 w-3 sm:w-4 object-contain"
                          />
                        )}
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 sm:gap-3">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-3 rounded-lg transition-colors duration-300 text-xs sm:text-sm font-medium"
                    >
                      {t('live_demo')}
                    </a>
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 border border-gray-300 dark:border-slate-600 hover:border-blue-500 text-gray-800 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 text-center py-2 px-3 rounded-lg transition-colors duration-300 text-xs sm:text-sm font-medium"
                      >
                        {t('github')}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
