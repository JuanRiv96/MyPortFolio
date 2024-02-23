"use client"
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { UserInfo } from "../interfaces";
import { Link as Scroll } from "react-scroll/modules";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Link} from "@nextui-org/react";

const navItems : UserInfo[] = [
    {
        title: "Home",
        label: "home",
        page: "home"
    },
    {
        title: "About",
        label:"about",
        page: "about"
    },
    {
        title: "Projects",
        label: "projects",
        page: "projects"
    },
    {
        title: "Contact",
        label: "contact",
        page:"contact"
    }
];

export const NavBar = () => {

    const {systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false)
    const [ navbar, setNavbar ] = useState(false);

    useEffect(() => {
        setMounted(true)
      }, [])

      if(!mounted) return null;
      const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <header className="
        w-full mx-auto
        px-4 
        h-16
        sm:px-20 
        fixed 
        top-0 z-50 
        shadow
        backdrop-blur
        dark:bg-fuchsia-950/30 dark:border-b dark:border-white">
      <div className="justify-between md:items-center md:flex">
            <div>
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <Link href="/" color="foreground" id="titulo">
                        <div className="container flex items-center space-x-2" id="titulo">
                            <h2 className=" text-xl md:text-2xl text-pretty text-gray-800 font-bold dark:text-white" id="titulo">Juan Jose Rivera</h2>
                        </div>
                    </Link>
                    <div className="md:hidden">
                        <Dropdown onClose={() => setNavbar(!navbar)}>
                            <DropdownTrigger>
                                <Button 
                                    isIconOnly
                                    variant="light"
                                    radius="full"
                                    onClick={() => setNavbar(!navbar)}
                                    color={navbar ? "danger" : "default"}
                                    className={navbar ? "text-danger" : ""}
                                >
                                    {navbar ? <IoMdClose size={30}/> : <IoMdMenu size={30}/>}
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu id="menu" aria-label="menu">
                                <DropdownItem key="home" aria-label="home" className="h-9">
                                    <Scroll 
                                        to="home"
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        className="block w-full h-9 flex justify-start items-center"
                                    >
                                        Home
                                    </Scroll>
                                </DropdownItem> 
                                <DropdownItem key="about" aria-label="about" className="h-9">
                                    <Scroll 
                                        to="about"
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        className="block w-full h-9 flex justify-start items-center"
                                    >
                                        About
                                    </Scroll>
                                </DropdownItem> 
                                <DropdownItem key="projects" aria-label="projects" className="h-9">
                                    <Scroll 
                                        to="projects"
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        className="block w-full h-9 flex justify-start items-center"
                                    >
                                        Projects
                                    </Scroll>
                                </DropdownItem>
                                <DropdownItem key="contact" aria-label="contact" className="h-9">
                                    <Scroll 
                                        to="contact"
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        className="block w-full h-9 flex justify-start items-center"
                                    >
                                        Contact
                                    </Scroll>
                                </DropdownItem>
                                <DropdownItem key="darkmode" aria-label="darkmode" className="h-9">
                                    {currentTheme === "dark" ? (
                                        <RiSunLine onClick={() => setTheme("light")} size={10} color="white" className="block w-full h-7"/>
                                    ) : (
                                        <RiMoonFill onClick={() => setTheme("dark")} size={10}  color="black" className="block w-full h-7"/>
                                    )}
                                </DropdownItem> 
                            </DropdownMenu>
                        </Dropdown>
                    </div> 
                </div>
            </div>

            <div>
                <div className="hidden md:block flex-1 justify-self-center">
                    <div className="flex items-center justify-center space-x-6">
                        {navItems.map((item, idx) => {
                            return (
                            <Scroll 
                                key={idx} 
                                to={item.page}
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className="
                                    text-pretty text-base text-gray-800
                                    rounded-xl 
                                    w-20 h-9
                                    cursor-pointer
                                    flex justify-center items-center
                                    dark:text-white"
                                >
                                    {item.title}
                            </Scroll>
                            )
                        })}

                        {currentTheme === "dark" ? (
                            <RiSunLine onClick={() => setTheme("light")} size={25} color="white"/>
                        ) : (
                            <RiMoonFill onClick={() => setTheme("dark")} size={25}  color="black"/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

{/* 
<DropdownItem aria-label="home">
    <Scroll 
        to="home"
        activeClass="active"
        spy={true}
        smooth={true}
        duration={500}
    >
        Home
    </Scroll>
</DropdownItem> 
<DropdownItem aria-label="about">
    <Scroll 
        to="about"
        activeClass="active"
        spy={true}
        smooth={true}
        duration={500}
    >
        About
    </Scroll>
</DropdownItem> 
<DropdownItem aria-label="projects">
    <Scroll 
        to="projects"
        activeClass="active"
        spy={true}
        smooth={true}
        duration={500}
    >
        Projects
    </Scroll>
</DropdownItem>
<DropdownItem aria-label="contact">
    <Scroll 
        to="contact"
        activeClass="active"
        spy={true}
        smooth={true}
        duration={500}
    >
        Contact
    </Scroll>
</DropdownItem>
<DropdownItem aria-label="about">
    {currentTheme === "dark" ? (
        <RiSunLine onClick={() => setTheme("light")} size={25} color="white"/>
    ) : (
        <RiMoonFill onClick={() => setTheme("dark")} size={25}  color="black"/>
    )}
</DropdownItem> 



{navItems.map((item, idx) => {
    return (
        <DropdownItem key={idx} aria-label={item.label}>
            <Button id={item.label} as={Link} variant="light" href={item.page}>
                {item.label}
            </Button>
        </DropdownItem>
    ) 
})}
*/}

