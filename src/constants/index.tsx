import { styles } from "@/lib/styles";

import { Database, PanelsTopLeft, Server } from "lucide-react"

export const nav = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "ideias",
    title: "Ideias",
  },
  {
    id: "orcamentos",
    title: "Orçamentos",
  },
  {
    id: "clientes",
    title: "Clientes",
  },
];


export const socialMedia = [
  {
    id: "social-media-1",
    icon: "./socials/linkedin.svg",
    iconDark: "./socials/linkedin-dark.svg",
    link: "https://www.linkedin.com/in/bruno-carmo-bb7450227/",
  },
  {
    id: "social-media-2",
    icon: "./socials/instagram.svg",
    iconDark: "./socials/instagram-dark.svg",
    link: "https://www.instagram.com/br_reis15/",
  },
  {
    id: "social-media-3",
    icon: "./socials/behance.svg",
    iconDark: "./socials/behance-dark.svg",
    link: "https://www.behance.net/bruno38",
  },
  {
    id: "social-media-4",
    icon: "./socials/github.svg",
    iconDark: "./socials/github-dark.svg",
    link: "https://github.com/BrunoReCarmo",
  },
];

export const FieldsSkills = [
  {
    id: 1,
    title: "FrontEnd",
    icon: <PanelsTopLeft className={`h-8 w-8 hover:text-orange-600 ${styles.primaryTextColor}`}/>,
    content: "Interfaces com práticas aplicadas de UI/UX como em landing pages ou sistemas similares a CRM."
  },
  {
    id: 2,
    title: "Backend",
    icon: <Server className={`h-8 w-8 hover:text-orange-600 ${styles.primaryTextColor}`}/>,
    content: "Servidores lógicos para serviços separados como APIs RESTful, autenticação ou integrações."
  },
  {
    id: 3,
    title: "Banco de Dados",
    icon: <Database className={`h-8 w-8 hover:text-orange-600 ${styles.primaryTextColor}`}/>,
    content: "Manipulação de dados centrando em um fluxo de dados seguro e otimizado para consumos de APIs."
  }
]