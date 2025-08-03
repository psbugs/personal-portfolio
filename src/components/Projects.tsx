const Projects = () => {
  const projects = [
    {
      title: "LoveMedia",
      description: "Full-stack e-commerce solution with React JS, Node.js, Express JS and MongoDB",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhNE15JFu9jbUGmICmlGqbAR7In8FiwUp6rQ&s",
      technologies: ["React", "Node.js", "MongoDB", "Express", "HTML5", "CSS3", "Stripe", "AWS S3"],
      demoLink: "https://lovemedia.world",
      githubLink: "https://github.com/praveen-sunhare/ecommerce"
    },
    {
      title: "Car Market Place 2.0 | 2025",
      description: "A Car Marketplace is a web platform that allows users to buy, sell, and browse new or used cars, with features like search filters, listings, pricing, and user authentication.",
      image: "https://www.shutterstock.com/image-vector/deal-car-logo-design-vector-600nw-2324097589.jpg",
      technologies: ["React", "Tailwind Css", "Redux"],
      demoLink: "https://marketplace2-switcher.pixel-base.de/",
      githubLink: "https://github.com/praveen-sunhare/taskapp"
    },
    {
      title: "MediaPad Admin Panel",
      description: "An Admin Panel built with React.js, Node.js, Express.js, and MongoDB provides a secure and intuitive interface for administrators to manage users, media contents, domains, content packs, and system settings with full CRUD functionality, role-based access control, and real-time updates.",
      image: "https://www.shutterstock.com/image-vector/modern-admin-panel-icon-vector-260nw-1580556469.jpg",
      technologies: ["React", "API Integration", "Express Js", "Tailwind"],
      demoLink: "https://manage-uat.mediapad.dev/user",
      githubLink: "https://github.com/praveen-sunhare/weather"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-slate-800/30 transition-colors duration-500">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-700 dark:text-slate-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200 dark:border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent dark:from-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-slate-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-600/20 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-300 text-sm"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-gray-300 dark:border-slate-600 hover:border-blue-500 text-gray-800 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 text-center py-2 px-4 rounded-lg transition-colors duration-300 text-sm"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
