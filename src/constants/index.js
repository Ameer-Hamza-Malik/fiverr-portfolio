import {
  mobile,
  backend,
  creator,
  web,
  Protonics,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Cinematic video ads",
    icon: web,
  },
  {
    title: "FB/IG video ads",
    icon: mobile,
  },
  {
    title: "Business promotional videos",
    icon: backend,
  },
  {
    title: "Commercial videos",
    icon: creator,
  },
];


const testimonials = [
  {
    testimonial:
      "I am beyond thrilled with the work delivered. Hamza went above and beyond my expectations, demonstrating both creativity and professionalism. The communication was seamless and they truly understood my vision, even from a brief and fragmented outline.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Hamza made an amazing sales video in a very short time. The first draft was great and when I sent in my revision Ideas they came back perfect. I’ll be getting more videos made and recommend Hamza to others on my team. outstanding work. I can't wait to collaborate on our next project together!",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Hamza did an amazing job on the video he created for me! The quality exceeded my expectations, and he understood exactly what I needed. The communication was smooth, and he delivered everything on time. Thank you, Hamza! I will definitely work with you again in the future!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Protonics",
    description:
      "On-Demand IT assistance without the need for comprehensive managed services. Streamlined Solutions at Fixed Rates · Swift Hardware Fixes and Software Upgrades.",
    tags: [
      // {
      //   name: "react",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "mongodb",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "tailwind",
      //   color: "pink-text-gradient",
      // },
    ],
    image: Protonics,
    source_code_link: "https://drive.google.com/file/d/1Q4j_q8b6bd3KuiCSBZE26oUPT_JWtAkQ/view?usp=drive_link",
  },
  {
    name: "FasterMe",
    description:
      "The powerful Chrome extension designed to elevate your productivity and efficiency. Whether you’re a student, freelancer, or professional. ",
    tags: [
      // {
      //   name: "react",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "restapi",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "scss",
      //   color: "pink-text-gradient",
      // },
    ],
    image: jobit,
    source_code_link: "https://drive.google.com/file/d/1WgMwJdPVvb_EHKKb9KzmnV-4UO7_5Ltw/view?usp=drive_link",
  },
  {
    name: "I-Speco's",
    description:
      "Ispeco's video management software is the reliable partner you need to keep your business safe. With our cutting-edge solutions..",
    tags: [
      // {
      //   name: "nextjs",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "supabase",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "css",
      //   color: "pink-text-gradient",
      // },
    ],
    image: tripguide,
    source_code_link: "https://drive.google.com/file/d/1KIifoodgxetHHZ3arJwJTbaMsCbwkUcm/view?usp=drive_link",
  },
  
];

export { services, testimonials, projects };
