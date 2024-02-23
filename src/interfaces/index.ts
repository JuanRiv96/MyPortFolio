import { StaticImageData } from "next/image";

export interface UserInfo {
  title: string;
  label: string;
  page: string;
}

export interface MySkills {
  skill: string;
}

export interface MyProjects {
  img: StaticImageData;
  href: string;
  name: string;
  deploy: string;
  description: string;
}
