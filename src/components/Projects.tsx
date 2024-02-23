import NextImage from "next/image";
import { Link, Button } from "@nextui-org/react";
import { MyProjects } from "@/interfaces";
import sleeptracker from "../../public/sleeptracker.webp";
import { GrGithub } from "react-icons/gr";

const projects: MyProjects[] = [
  {
    img: sleeptracker, 
    href: "https://github.com/JuanRiv96/sleep-tracker",
    name: "Sleep Tracker App", 
    deploy:"https://sleep-tracker-two.vercel.app/",
    description: "SleepTracker is a web app that helps you to control and obtain data about your sleep"
  }
];

export const Projects = () => {
  return (
    <section id="projects">
      <div className="
            w-full
            container mx-auto
            my-12 pb-16 md:pt-12 md:pb-46
            px-4
            xl:max-w-5xl
            lg:max-w-4xl
            md:max-w-2xl md:px-0">
        <h1 className="text-left text-gray-800 text-pretty font-bold text-4xl dark:text-white">
          Projects
        </h1>
        <hr className="w-6 mx-auto my-6 md:my-8"></hr>
        <div className="">
          {projects?.map((item, idx) => {
              return (
                <div key={idx} className="flex flex-col lg:flex lg:flex-row lg:items-start lg:space-x-24">
                  <NextImage
                    className="
                    object-cover object-top 
                    w-full h-56
                    lg:w-1/2 
                    shadow-sm shadow-[#94a3b8]
                    rounded-2xl  
                    transition duration-500 ease-in-out md:hover:scale-[1.06]
                    sm:h-full
                    dark:shadow-[white]"
                    src={ item.img }
                    alt="Not Found"
                    loading="lazy"
                  />
                  <div className="w-full md:w-1/2 pt-8 lg:pt-0">
                    <h3 className="text-left text-3xl text-gray-800 text-pretty font-bold mb-6 dark:text-white">
                      { item.name }
                    </h3>
                    <p className="text-pretty text-gray-800 mb-6 dark:text-white">{ item.description }</p>
                    <div className="flex flex-row space-x-5">
                      <Button
                        href={ item.href }
                        as={Link}
                        className="
                        text-gray-800
                        font-semibold
                        rounded-2xl
                        shadow shadow-[#94a3b8]
                        bg-[#fec107] 
                        transition duration-200 ease-in-out md:hover:scale-[1.05]
                        dark:bg-gradient-to-tr from-purple-800 to-gray-800 dark:text-white dark:shadow-white"
                      >
                      Code <GrGithub size={25} className="fill-#1f2937 dark:fill-white"/>
                      </Button>
                      <Button
                        href={ item.deploy }
                        as={Link} 
                        showAnchorIcon
                        className="
                        text-gray-800
                        font-semibold
                        rounded-2xl
                        shadow shadow-[#94a3b8]
                        bg-[#fec107] 
                        transition duration-200 ease-in-out md:hover:scale-[1.05]
                        dark:bg-gradient-to-tr from-purple-800 to-gray-800 dark:text-white dark:shadow-white"
                      >
                        App
                      </Button>
                    </div>
                  </div>
                </div>
              )
           })}
        </div>
      </div>
    </section>
  )
}
