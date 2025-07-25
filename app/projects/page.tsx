'use client'

import { useEffect, useRef } from 'react'
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Github, Telescope, ArrowLeft } from 'lucide-react'
import bannerImage from '../../public/banner.png'
import taskify from '../../public/taskify.png'
import superstudy from '../../public/superstudy.png'
import artifacts from '../../public/artifacts.png'
import portfolio from '../../public/portfolio.png'
import landing from '../../public/landing.png'
import tors from '../../public/tors.png'
import weathero from '../../public/weathero.png'
import moody from '../../public/moody.png'


const projects = [
  {
    title: "Taskify",
    description: "A simple task manager built with JavaScript and CSS.",
    image: taskify,
    tags: ["Javascript", "CSS", "HTML", "Docker"],
    sourceUrl: "https://github.com/clarkpy/taskify",
    visitUrl: "https://taskify.snowyjs.lol"
  },
  {
    title: "SuperStudy",
    description: "A complex and reactive study system for students",
    image: superstudy,
    tags: ["React", "TailwindCSS", "Kotlin"],
    sourceUrl: "https://github.com/clarkpy/SuperStudy",
    visitUrl: "https://superstudy.snowy.codes"
  },
  {
    title: "Artifacts",
    description: "An advanced and reliable Jitpack alternative",
    image: artifacts,
    tags: ["React", "NextJS", "TypeScript", "Kotlin"],
    sourceUrl: "https://github.com/clarkpy/artifacts",
    visitUrl: "https://artifacts.akrylic.org"
  },
  {
    title: "Portfolio",
    description: "The source code for this portfolio website",
    image: portfolio,
    tags: ["React", "NextJS", "TypeScript"],
    sourceUrl: "https://github.com/clarkpy/portfolio",
    visitUrl: "#"
  },
  {
    title: "Weathero",
    description: "A weather app that uses the free Weather API",
    image: weathero,
    tags: ["React", "NextJS", "TypeScript"],
    sourceUrl: "https://github.com/clarkpy/Weathero",
    visitUrl: "https://weathero.snowy.codes"
  },
  {
    title: "Moody",
    description: "A mood tracking app that I used to learn about ShadCN graphs",
    image: moody,
    tags: ["React", "NextJS", "TypeScript"],
    sourceUrl: "https://github.com/clarkpy/Moody",
    visitUrl: "https://moody.snowy.codes"
  },
  {
    title: "Landing",
    description: "A landing page template for your next project",
    image: landing,
    tags: ["React", "NextJS", "TypeScript"],
    sourceUrl: "https://github.com/clarkpy/landing",
    visitUrl: "https://vandal.snowy.codes"
  },
  {
    title: "Tors",
    description: "A simple and secure way to managet tasks via the command line",
    image: tors,
    tags: ["Rust", "Javascript", "TypeScript"],
    sourceUrl: "https://github.com/clarkpy/Tors-CLI",
    visitUrl: "https://tors.snowy.codes"
  }
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#13111C] text-[#D2D2D4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <nav className="flex justify-between items-center mb-16">
          <Link className="flex items-center space-x-2 text-[#DCB8B0] hover:text-[#D2D2D4] transition-colors" href="/">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-mono">back to home</span
>
          </Link>
        </nav>

        <div className="mb-16 rounded-lg overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Image
              alt="Projects banner"
              className="w-full h-[300px] object-cover"
              height={300}
              width={1200}
              src={bannerImage}
            />
          </motion.div>
        </div>

        <header className="space-y-4 max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold font-mono text-[#DCB8B0]">My Projects</h1>
          <p className="text-[#D2D2D4] leading-relaxed">
            Here's a comprehensive list of my projects. Click on a project to view more details.
          </p>
        </header>

        <section className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.01, y: -10}}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: index * 0.1
                }}
              >
                <div className="bg-[#1A1721]/80 border border-white/10 rounded-lg overflow-hidden h-full flex flex-col relative">
                  <Link href={`/project/${project.title?.toLowerCase()}`}>
                    <div className="aspect-video relative cursor-pointer">
                      <Image
                        src={project.image}
                        alt={`Screenshot of ${project.title}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Link>

                  <div className="p-4 flex-grow flex flex-col">
                    <h3 className="font-mono text-[#DCB8B0] text-lg mb-2 font-bold cursor-pointer">
                      <Link href={`/project/${project.title?.toLowerCase()}`}>{project.title}</Link>
                    </h3>
                    <p className="font-mono text-[#D2D2D4] text-sm mb-4 flex-grow">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center gap-1.5 px-2 py-1 bg-[#1E1E1E] border border-[#333333] rounded text-xs font-mono text-[#D2D2D4]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D2D2D4]" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between font-mono text-sm">
                      <Link 
                        href={project.sourceUrl}
                        className="inline-flex items-center text-[#DCB8B0] hover:text-[#D2D2D4] transition-colors"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        view source
                      </Link>
                      <div className="button-container flex justify-end">
                        <Link 
                          href={project.visitUrl}
                          className="inline-flex items-center text-[#DCB8B0] hover:text-[#D2D2D4] transition-colors visit-button"
                        >
                          <Telescope className="w-4 h-4 mr-2" />
                          visit
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <header className="space-y-4 max-w-3xl mx-auto text-center mt-16">
          <h1 className="text-4xl font-bold font-mono text-[#DCB8B0]"></h1>
            <p className="text-[#D2D2D4] leading-relaxed">
            Nothing more for now.. All Projects are created for HighSeas
            <span className="mx-1"></span>
            <Link 
              href="https://highseas.hackclub.com"
              className="text-[#DCB8B0] hover:text-[#D2D2D4] transition-colors"
            >
              Learn More
            </Link>
            </p>
        </header>

      </div>
    </div>
  )
}