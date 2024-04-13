"use client"
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Button, Tooltip, Input, Textarea} from "@nextui-org/react";
import NextImage from "next/image"
import { GrGithub } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { text } from "stream/consumers";

export const Contact = () => {

    const form = useRef<HTMLFormElement>(null!);
    const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      emailjs.sendForm("service_6ymz9ek", "template_hyf5p1b", form.current, "VXbNUKy6A7sQzs7je")
        .then((result) => {
            console.log(result.text);
            form.current.reset();
        }, (error) => {
            console.log(error.text);
        });
      };
  return (
    <section id="contact">
        <div className="
            w-full
            container mx-auto
            my-12 pb-12 md:pt-12 md:pb-48
            px-4
            xl:max-w-5xl
            lg:max-w-4xl
            md:max-w-2xl md:px-0"
         >
            <h1 className="text-left text-gray-800 text-pretty pb-20 font-bold text-4xl dark:text-white">
                Contact
            </h1>
            
            <div className="flex flex-col lg:flex lg:flex-row lg:items-start lg:space-x-24">
                <Card className="
                    w-full 
                    bg-[#fec107] 
                    shadow shadow-[#94a3b8]
                    rounded-2xl
                    lg:w-1/2
                    dark:bg-gradient-to-tr from-purple-800 to-gray-800 dark:shadow-white">
                    <CardHeader className="flex flex-col items-start space-y-1">
                        <p className="text-3xl text-gray-800 dark:text-white font-bold">Get in Touch.</p>
                        <p className="text-sm text-gray-800 text-pretty dark:text-white">
                            If you need more information about me or have a more extensive conversation, I am happy to do so.
                        </p>
                    </CardHeader>
                    <Divider/>
                    <CardBody className="space-y-2 px-3">
                        <p className="text-sm text-pretty text-gray-800 dark:text-white">✉ jjrr0213@gmail.com.</p>
                        <p className="text-sm text-pretty text-gray-800 dark:text-white">🚩 Acapulco de Juarez - Mexico</p>
                    </CardBody>
                    <Divider/>
                    <CardFooter className="space-x-2.5">
                        <Link
                            color="foreground"
                            size="md"
                            aria-label="Github"
                            href="https://github.com/JuanRiv96"
                        >
                            <GrGithub size={32} className="rounded-full bg-white dark:bg-black"/>
                        </Link>    
                        <Link
                            color="foreground"
                            size="md"
                            aria-label="LinkedIn"
                            href="https://www.linkedin.com/in/juanjos%C3%A9-riveraram%C3%ADrez/"
                        >
                            <GrLinkedin size={32} className="rounded-full bg-white dark:bg-black"/>
                        </Link>
                    </CardFooter>
                </Card>
                <form ref={form} onSubmit={sendEmail} autoComplete="off" className=" 
                    bg-[#fec107] shadow shadow-[#94a3b8] 
                    w-full h-96
                    lg:block
                    hidden
                    lg:w-80
                    rounded-2xl
                    dark:bg-gradient-to-tr from-purple-800 to-gray-800 dark:text-white dark:shadow-[white]"
                >
                    <Input 
                        isRequired 
                        type="text" 
                        variant="bordered" 
                        placeholder="Enter your name" 
                        label="Name:" 
                        labelPlacement="outside" 
                        name="Name" 
                        id="Name" 
                        autoComplete="off" 
                        size="sm"
                        classNames={{
                            inputWrapper: [ 
                                "bg-slate-200",
                                "border-transparent",
                            ],
                            mainWrapper:[
                                "w-72",
                                "pt-3",
                                "mx-auto"
                                
                            ],
                            input:[
                                "text-gray-800"
                            ]
                        }}
                    />
                    <Input 
                        isRequired 
                        type="email" 
                        variant="bordered" 
                        placeholder="Enter your email" 
                        label="Email:" 
                        labelPlacement="outside" 
                        name="Email" 
                        id="Email" 
                        autoComplete="off"
                        size="sm"
                        classNames={{
                            inputWrapper: [ 
                                "bg-slate-200",
                                "border-transparent",
                            ],
                            mainWrapper:[
                                "w-72",
                                "pt-3",
                                "mx-auto"
                                
                            ],
                            input:[
                                "text-gray-800"
                            ]
                        }}
                    />
                    <Textarea 
                        label="Message:"
                        id="Message"
                        name="Message"
                        placeholder="Enter your message"
                        isRequired
                        minRows={6}
                        maxRows={6}
                        type="text" 
                        variant="bordered" 
                        labelPlacement="outside" 
                        autoComplete="off"
                        size="sm"
                        classNames={{
                            innerWrapper:[
                                "resize-none",
                            ],
                            inputWrapper:[
                                "bg-slate-200",
                                "border-transparent",
                                "lg:w-72",
                                "mx-auto",
                                "text-gray-800"
                            ],
                            label:[
                                "mx-4"
                            ],
                            base:[
                                "pt-3",
                                "pb-4"
                            ]
                        }}
                    />
                    <Button type="submit" color="primary" size="md" radius="full" className="w-72 mx-4">Send</Button>
                </form>
            </div>
         </div>
    </section>
  )
}
