
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
