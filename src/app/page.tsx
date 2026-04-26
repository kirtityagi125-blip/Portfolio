"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, ExternalLink, Sparkles, Terminal, Code2, MonitorPlay, Briefcase } from "lucide-react";

export default function Home() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="relative min-h-screen bg-[#030303] text-zinc-200 overflow-hidden selection:bg-purple-500/30 selection:text-purple-200">
      
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-900/20 blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-blue-900/10 blur-[150px] mix-blend-screen"></div>
        <div className="absolute top-[40%] left-[60%] w-[30vw] h-[30vw] rounded-full bg-indigo-900/10 blur-[100px] mix-blend-screen"></div>
        
        {/* Subtle noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            className="flex flex-col items-center justify-center text-center max-w-4xl"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 backdrop-blur-md">
                <Sparkles className="w-4 h-4" /> Available for new opportunities
              </span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1]">
              Hi, I&apos;m <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">
                Keerti Tyagi
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="max-w-2xl text-lg md:text-2xl text-zinc-400 mb-12 leading-relaxed font-light">
              I build immersive, user-centric digital experiences. 
              Turning complex problems into elegant solutions through design and code.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-white/10 border border-white/10 rounded-full backdrop-blur-md hover:bg-white/20 transition-colors"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#resume"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-zinc-900 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.4)] transition-shadow"
              >
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 md:py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="relative p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-purple-500/10 to-transparent blur-3xl"></div>
              
              <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Me</h2>
                  <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                    Hi, I am Keerti Tyagi, a B.Tech 2025 graduate in Computer Science from ABESIT, Ghaziabad. I currently reside in Ghaziabad and completed my schooling from Dehradun Public School.
                  </p>
                  <p className="text-zinc-400 text-lg leading-relaxed">
                    I am deeply passionate about front-end technologies and creating seamless user interfaces that bridge the gap between design and engineering.
                  </p>
                </div>
                
                <div className="flex flex-col gap-4">
                  {[
                    { title: "B.Tech CSE 2025", desc: "ABESIT, Ghaziabad", icon: <Terminal className="w-5 h-5 text-purple-400" /> },
                    { title: "High School (89%)", desc: "Dehradun Public School", icon: <Code2 className="w-5 h-5 text-blue-400" /> },
                    { title: "Intermediate (87%)", desc: "Dehradun Public School", icon: <MonitorPlay className="w-5 h-5 text-indigo-400" /> }
                  ].map((edu, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.05)" }}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 transition-colors"
                    >
                      <div className="p-3 rounded-full bg-white/5 border border-white/10">
                        {edu.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-zinc-200">{edu.title}</h4>
                        <span className="text-sm text-zinc-500">{edu.desc}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 md:py-32 px-6">
          <div className="max-w-6xl mx-auto flex flex-col items-center">
            <motion.h2 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Featured Projects
            </motion.h2>
            <motion.p 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="text-lg text-zinc-500 mb-16 text-center max-w-2xl"
            >
              A selection of my recent work, showcasing a mix of frontend interfaces, real-time detection systems, and full-stack applications.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              {[
                {
                  title: "Driver Drowsiness Detection",
                  description: "Real-time safety system using computer vision to monitor eye movement and trigger alerts upon fatigue detection.",
                  techStack: ["Python", "OpenCV", "dlib", "Webcam"],
                  imageUrl: "/Driver_drawsiness.png"
                },
                {
                  title: "Fun Games Website",
                  description: "A web-based collection of 8 interactive mini-games designed for entertainment with smooth gameplay.",
                  techStack: ["HTML", "CSS", "JavaScript"],
                  imageUrl: "/Fun_games.png"
                },
                {
                  title: "Placement Portal",
                  description: "A full-stack application providing access to company prep requirements and alumni feedback for students.",
                  techStack: ["MongoDB", "Express.js", "React", "Node.js"],
                  imageUrl: "/Placement_portal.png"
                },
                {
                  title: "Missing Person Detection",
                  description: "An upcoming project aimed at helping identify missing individuals using image recognition. (In Progress)",
                  techStack: ["MERN Stack"],
                  imageUrl: "/missing_person.png"
                }
              ].map((project, idx) => (
                <motion.div 
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: idx * 0.1 } }
                  }}
                  whileHover={{ y: -10 }}
                  className="group flex flex-col bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md hover:border-purple-500/30 transition-colors"
                >
                  {/* Image Container with Hover Scale */}
                  <div className="relative h-64 overflow-hidden bg-zinc-900 border-b border-white/10">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent z-10 opacity-60"></div>
                    {project.imageUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-zinc-700">Image Placeholder</div>
                    )}
                    
                    {/* Floating Action Button */}
                    <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                    <p className="text-zinc-400 mb-8 flex-grow leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.techStack.map((tech, tIdx) => (
                        <span key={tIdx} className="px-3 py-1 bg-white/5 border border-white/10 text-zinc-300 rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 md:py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="flex items-center gap-4 mb-16"
            >
              <div className="h-px bg-white/10 flex-grow"></div>
              <h2 className="text-4xl font-bold text-white"><span className="text-purple-500">/</span> Experience</h2>
              <div className="h-px bg-white/10 flex-grow"></div>
            </motion.div>

            <div className="space-y-8 relative">
              {/* Timeline line */}
              <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-white/10 to-transparent hidden md:block"></div>

              {[
                {
                  role: "IT Executive",
                  company: "Patel Pulse Venture Pvt. Ltd., Gaur City",
                  date: "Dec 2025 - Present",
                  points: [
                    "Client interaction and requirement understanding",
                    "Managing project delivery workflows",
                    "Focusing on business growth alongside technical work"
                  ]
                },
                {
                  role: "Frontend Developer",
                  company: "Cincooni System Private Limited, Noida",
                  date: "Dec 2024 - Mar 2025",
                  points: [
                    "Developed UI components for an e-learning platform",
                    "Focused on clean design and usability",
                    "Improved UX through responsive layouts"
                  ]
                }
              ].map((job, idx) => (
                <motion.div 
                  key={idx}
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                  variants={{
                    hidden: { opacity: 0, x: idx % 2 === 0 ? -50 : 50 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.6, type: "spring", bounce: 0.4 } }
                  }}
                  className={`flex flex-col md:flex-row gap-8 items-center ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className={`hidden md:flex w-1/2 ${idx % 2 === 0 ? "justify-start" : "justify-end"}`}>
                    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-sm font-medium backdrop-blur-md">
                      {job.date}
                    </span>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:flex relative z-10 w-14 h-14 rounded-full bg-[#030303] border border-white/20 items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                    <Briefcase className="w-5 h-5 text-purple-400" />
                  </div>

                  <div className="w-full md:w-1/2">
                    <div className="p-8 bg-white/[0.02] border border-white/10 rounded-3xl backdrop-blur-md hover:bg-white/[0.04] transition-colors relative group">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-3xl"></div>
                      
                      <div className="md:hidden inline-block mb-4">
                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-xs font-medium">
                          {job.date}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2">{job.role}</h3>
                      <h4 className="text-purple-400 font-medium mb-6">{job.company}</h4>
                      
                      <ul className="space-y-3">
                        {job.points.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-3 text-zinc-400">
                            <ArrowRight className="w-5 h-5 text-zinc-600 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Resume & Why Me Grid */}
        <section className="py-24 md:py-32 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            
            {/* PMT Resume Card */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              id="resume"
              className="relative p-10 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-500/20 rounded-3xl overflow-hidden group"
            >
              <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-purple-500/30 blur-[80px] rounded-full group-hover:bg-purple-400/40 transition-colors duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <h2 className="text-3xl font-bold text-white mb-4">Resume</h2>
                <p className="text-zinc-400 mb-8 flex-grow">
                  Download my resume for a comprehensive overview of my skills, experience, and qualifications as a Project Management Trainee.
                </p>
                
                <motion.a
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="/Keerti_PMTresume.pdf"
                  download
                  className="flex items-center justify-between w-full p-4 bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md hover:bg-white/20 transition-colors"
                >
                  <div>
                    <div className="font-semibold text-white">Project Management Trainee</div>
                    <div className="text-sm text-zinc-400">PDF Document</div>
                  </div>
                  <div className="p-3 bg-purple-500 rounded-xl text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                    <Download className="w-5 h-5" />
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {/* Why Me Card */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }
              }}
              id="whyme"
              className="p-10 bg-white/[0.02] border border-white/10 rounded-3xl backdrop-blur-md"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Why Me?</h2>
              <div className="space-y-6 text-zinc-400 leading-relaxed">
                <p>
                  I am someone who is always ready to work and grow. I enjoy learning new technologies and constantly improving my skills. Whenever I come across something I don&apos;t know, I make sure to learn and understand it.
                </p>
                <p>
                  I don&apos;t just focus on my own tasks—I am also interested in understanding how others work and how teams collaborate. My goal is to contribute in a way that supports both my personal growth and the growth of the company.
                </p>
                <div className="pt-6 border-t border-white/10">
                  <p className="font-medium text-purple-200">
                    I believe in being consistent, adaptable, and open to learning in every situation.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-12 text-center text-zinc-600 border-t border-white/5 relative z-10 backdrop-blur-sm">
          <p>© {new Date().getFullYear()} Keerti Tyagi. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
