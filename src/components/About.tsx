import { MySkills } from "@/interfaces";

const skills: MySkills[] = [
  { 
    skill: "JavaScript" 
  },
  {
    skill: "Typescript"
  },
  {
    skill: "NodeJS"
  },
  {
    skill: "ReactJS"
  },
  {
    skill: "NextJS"
  },
  {
    skill: "SQL"
  },
  {
    skill: "PostgresSQL"
  },
  {
    skill: "MongoDB"
  },
  {
    skill: "HTML"
  },
  {
    skill: "CSS"
  },
  {
    skill: "Tailwind CSS"
  },
  {
    skill: "GitHub"
  },
  {
    skill: "GIT"
  },
  {
    skill: "Scrum"
  }
];

export const About = () => {
  return (
    <section id="about">
        <div className="
            w-full
            container mx-auto
            my-16 pb-12 md:pt-12 md:pb-46
            px-4
            xl:max-w-5xl
            lg:max-w-4xl
            md:max-w-2xl md:px-0"
        >
            <h1 className="text-start text-pretty font-bold pb-16 text-4xl dark:text-neutral-100">About me.</h1>
            <div className="
                space-y-14 
                flex flex-col justify-center 
                lg:space-x-24 lg:flex lg:flex-row lg:items-start lg:space-y-0"
            >
                <div className="space-y-5">
                    <h1 className="text-left text-2xl text-gray-800 text-pretty font-bold mb-6 md:text-left dark:text-white">
                        Get to know me !
                    </h1>
                    <p className="text-gray-800 text-pretty dark:text-white">
                        Hi there! My name is Juan Jose Rivera Ramirez, I am a full stack developer located in Mexico with knowledge of agile 
                        technologies and methodologies such as React, NextJS, NodeJS, Express, PostgresSQL, GIT, HTML, JavaScript and Typescript.
                    </p>
                    <p className="text-gray-800 text-pretty font-normal dark:text-white">
                        I graduated from National Polytechnic Institute, Mexico in 2020 with a BS in Communications and Electronics Engineering. 
                        I have a passion for technology and a desire to always push the limits of what is possible. I am excited to see where my 
                        career takes me and am always open to new opportunities. 🙂
                    </p>
                </div>
                <div className="space-y-2">
                    <h1 className="text-left text-2xl text-gray-800 text-pretty font-bold mb-6 dark:text-white">Education</h1>
                    <ul className="
                      flex flex-row 
                      space-x-10 pl-4
                      list-disc list-outside 
                      md:pl-4 md:space-x-24 
                      lg:flex lg:flex-col lg:space-y-3 lg:space-x-0
                      dark:text-neutral-100">
                        <li>
                            <p className="font-medium text-gray-800 text-pretty dark:text-white">Full Stack Developer.</p>
                            <p className="text-gray-800 text-sm italic dark:text-white">SoyHenry Bootcamp.</p>
                            <span className="text-gray-800 text-xs italic dark:text-white">2022-2023</span>
                            
                        </li>
                        <li>
                            <p className="font-medium text-gray-800 text-pretty dark:text-white">Communications and Electronics Engineering.</p>
                            <p className="text-gray-800 text-sm italic dark:text-white">National Polytechnic Institute.</p>
                            <span className="text-gray-800 text-xs italic dark:text-white">2015-2020</span>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col md:text-left">
                    <h1 className="text-left text-2xl text-gray-800 text-pretty font-bold mb-6 dark:text-white">Skills</h1>
                    <div className="flex flex-wrap flex-row justify-start z-10 lg:w-80">
                        {skills.map((item, idx) => {
                                return (
                                <p
                                    key={idx}
                                    className="
                                    shadow shadow-[#94a3b8] 
                                    px-4 py-2 
                                    mr-2 mt-2 
                                    text-gray-800
                                    rounded-2xl
                                    font-semibold 
                                    bg-[#fec107] 
                                    dark:bg-gradient-to-tr from-purple-800 to-gray-800 dark:text-white"
                                >
                                    {item.skill}
                                </p>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    </section>
    // <div class="relative h-full w-full bg-neutral-900"><div class="absolute inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px]"></div></div>
  )
}
