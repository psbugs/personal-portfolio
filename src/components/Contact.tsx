
const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Let's discuss how we can work together!
          </p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-12 border border-slate-700/50 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
            <div className="text-left">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                Let's Start a Conversation
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed text-sm sm:text-base">
                Whether you have a project in mind, want to discuss opportunities, or just want to say hello, I'd love to hear from you. Drop me an email and I'll get back to you as soon as possible.              </p>

              <div className="flex items-center space-x-3 mb-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-slate-400 text-sm sm:text-base">Available for freelance work</span>
              </div>
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-slate-400 text-sm sm:text-base">Open to full-time opportunities</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-slate-400 text-sm sm:text-base">Available for consultations</span>
              </div>
            </div>

            <div className="text-center md:text-right flex flex-col items-center md:items-end">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 sm:p-6 w-full max-w-xs">
                <h4 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Email Me</h4>
                <a
                  href="mailto:sunhare.p.2240@gmail.com"
                  className="text-white text-sm sm:text-lg break-all hover:underline transition-all duration-300"
                >
                  sunhare.p.2240@gmail.com
                </a>
              </div>

              <p className="text-slate-400 text-xs sm:text-sm mt-4 mb-2">
                I typically respond within 24 hours
              </p>

              <a
                href="mailto:sunhare.p.2240@gmail.com"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>


        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30">
            <h4 className="text-white font-semibold mb-2">Response Time</h4>
            <p className="text-slate-400 text-sm">Usually within 24 hours</p>
          </div>
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30">
            <h4 className="text-white font-semibold mb-2">Preferred Contact</h4>
            <p className="text-slate-400 text-sm">Email for detailed discussions</p>
          </div>
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30">
            <h4 className="text-white font-semibold mb-2">Time Zone</h4>
            <p className="text-slate-400 text-sm">IST (GMT+5:30)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
