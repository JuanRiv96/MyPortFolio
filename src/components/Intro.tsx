import Image from "next/image";
import { Button, Link } from "@nextui-org/react";
import foto from "../../public/perfil.jpg";

export const Intro = () => {
  return (
    <section id="home">
        <div className="
            w-full space-y-5 py-36
            container mx-auto  
            flex flex-col items-center
            xl:max-w-5xl
            lg:max-w-4xl
            md:max-w-2xl md:py-44"
        >
          <div className="
            flex flex-row items-center
            space-x-7
            px-4
            container mx-auto
            md:px-0"
          >
            <Image 
                src={foto} 
                alt="Not Found"
                width={300}
                height={300}
                priority
                className="rounded-full shadow-lg size-24"
                />
              <Button variant="ghost" as={Link} href="https://www.linkedin.com/in/juanjos%C3%A9-riveraram%C3%ADrez/" color="success" size="sm" className="w-44 rounded-full text-base">
                  Open to work
              </Button>
          </div>
           
          <div className="
              flex flex-col items-start 
              container mx-auto
              space-y-8 px-4
              lg:px-0
              md:px-0">
              <h1 className="text-3xl font-bold text-gray-800 text-pretty md:text-5xl dark:text-white">Hi, I´m Juan 👋</h1>
              <p className="text-xl text-gray-800 text-pretty font-semibold md:text-2xl dark:text-white"><span className="text-[#fec107]">I´m a Full Stack Developer</span> based in Acapulco, Guerrero, Mexico. My main objective is to develop as a programmer and demonstrate
              my ability to the world as well as create quality applications that satisfy the needs of users.
              </p>
              <a download="CV-Juan Jose Rivera" href="/mycv.pdf" className="w-24 rounded-full">
                  <Button color="primary" variant="ghost" size="sm" className="w-24 rounded-full">
                    Resume 📄
                  </Button> 
              </a>
          </div>
        </div>
    </section>
  )
}
