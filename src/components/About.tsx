
const About = () => {
  const technologies = [
    {
      name: "React",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Redux",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
      name: "Node.js",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "MongoDB",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "JavaScript",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "CSS",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "AWS S3",
      image: "https://www.edureka.co/blog/wp-content/uploads/2016/10/1_B9CIOrxdROHvtdmouQA1_A-removebg-preview-300x225.png"
    },
    {
      name: "HTML5",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "Mailchimp",
      image: "data:image/png;base64,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"
    }
  ];
  return (
    <section id="about" className="py-20 px-6 bg-slate-800/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-slate-400">
            Get to know me better
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-semibold text-white mb-4">Who I Am</h3>
              {/* Profile Image */}
              <div className="flex justify-center mb-6">
                <img
                  src="/assets/images/praveen-2025-profile-pic.jpg"
                  alt="Praveen Sunhare"
                  className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg object-cover"
                />
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                Hi! I'm Praveen Sunhare, a passionate MERN stack developer with a love for creating
                innovative web solutions. With a strong foundation in modern web technologies, I enjoy
                building applications that not only look great but also provide exceptional user experiences.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                My journey in web development began with a curiosity about how websites work, and it has
                evolved into a career where I get to solve complex problems and bring ideas to life through code.
                I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends.
              </p>
              <p className="text-slate-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source
                projects, or sharing my knowledge with the developer community. I'm always excited to take on
                new challenges and collaborate on projects that make a positive impact.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-semibold text-white mb-6">What I Do</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-medium">Frontend Development</h4>
                    <p className="text-slate-400 text-sm">Building responsive and interactive user interfaces with React, TypeScript, and modern CSS frameworks.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-medium">Backend Development</h4>
                    <p className="text-slate-400 text-sm">Creating robust server-side applications with Node.js, Express, and database management.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-medium">Full Stack Solutions</h4>
                    <p className="text-slate-400 text-sm">Developing end-to-end web applications with seamless integration between frontend and backend.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-medium">API Development</h4>
                    <p className="text-slate-400 text-sm">Designing and implementing RESTful APIs and GraphQL endpoints for efficient data handling.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">Technologies I Work With</h3>
          <p className="text-slate-400">Here are some of the technologies I use to bring projects to life</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-3 rounded-lg overflow-hidden">
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h4 className="text-white font-medium text-sm">{tech.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
