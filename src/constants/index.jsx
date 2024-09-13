import photography1 from "../assets/heroassets/photography1.jpg";
import artwork from "../assets/heroassets/artwork.webp";
import normadic6 from "../assets/heroassets/normadic6.webp";

import { FaReact, FaGithub, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFramer } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { GiClick } from "react-icons/gi";

import { FaCheckCircle } from "react-icons/fa";

import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaWhatsappSquare,
} from "react-icons/fa";

import {
  SiCanva,
  SiDavinciresolve,
  SiAdobexd,
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiAdobelightroom,
  SiAdobepremierepro,
} from "react-icons/si";

import { FaRegCirclePlay } from "react-icons/fa6";

export const mainSkills = [
  {
    id: 1,
    skill: "web development",
    icon: <FaCheckCircle />,
  },
  {
    id: 2,
    skill: "graphics design",
    icon: <FaCheckCircle />,
  },
  {
    id: 3,
    skill: "motion graphics",
    icon: <FaCheckCircle />,
  },
  {
    id: 4,
    skill: "digital marketing",
    icon: <FaCheckCircle />,
  },
  {
    id: 5,
    skill: "photography",
    icon: <FaCheckCircle />,
  },
];

export const socialMedia = [
  {
    id: 1,
    title: "linkedIn",
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    title: "Instagram",
    icon: <FaInstagramSquare />,
  },
  {
    id: 3,
    title: "Facebook",
    icon: <FaFacebook />,
  },
  {
    id: 4,
    title: "WhatsApp",
    icon: <FaWhatsappSquare />,
  },
];

export const myWork = [
  {
    id: 1,
    title: "marketing",
  },
  {
    id: 1,
    title: "motion",
  },
  {
    id: 2,
    title: "graphics",
  },
  {
    id: 3,
    title: "photography",
  },
  {
    id: 4,
    title: "videography",
  },
  {
    id: 5,
    title: "webdev",
  },
];

export const myImages = [
  {
    id: 1,
    heading: "Dynamic visuals",
    title: "Web Development",
    description:
      "As a full-stack developer, I specialize in crafting robust and scalable web applications. From front-end design to back-end infrastructure, I deliver seamless user experiences and efficient data management. With expertise in HTML, CSS, JavaScript, Python, Ruby, or Node.js, and databases like MySQL, PostgreSQL, or MongoDB, I create custom web solutions tailored to your unique business needs, ensuring optimal performance, security, and scalability.",
    buttons: "Visit",
    link: "https://freddymazenge.vercel.app/#",
    play: <GiClick />,
    Number: "01",
    backgroundImage1: photography1,
  },
  {
    id: 2,
    heading: "Ideas that Sell",
    title: "Advertising",
    description:
      "In the dynamic world of advertising, I thrive on the challenge of crafting impactful and memorable campaigns. My expertise in visual storytelling, brand strategy, and creative problem-solving allows me to develop advertising solutions that engage audiences and drive results. Whether it's a bold print ad, a captivating digital campaign, or a compelling video, my work is designed to capture attention, convey key messages, and leave a lasting impression. Discover how I can leverage the power of advertising to elevate your brand.",
    buttons: "Create Impact",
    link: "https://www.linkedin.com/in/freddy-mazenge-32ab1b2a2/",
    play: <FaRegCirclePlay />,
    Number: "02",
    backgroundImage1: normadic6,
  },
  {
    id: 3,
    heading: "Art Meets Technology",
    title: "Digital Artwork",
    description:
      "As a digital artist, I have a deep passion for creating visually captivating and thought-provoking artwork. My portfolio showcases a diverse range of digital pieces that blend cutting-edge techniques with a unique artistic vision. From vibrant abstract compositions to detailed digital illustrations, I strive to push the boundaries of the digital medium and deliver truly immersive visual experiences. Explore the boundless creativity and technical mastery behind my digital artwork.",
    buttons: "Explore Now",
    link: "https://www.instagram.com/p/C-3o0VSKeev/?img_index=1",
    play: <FaRegCirclePlay />,
    Number: "03",
    backgroundImage1: artwork,
  },
  // {
  //   id: 4,
  //   title: "Designs",
  //   description: "Art on Fabric.",
  //   Number: "04",
  //   backgroundImage1: cityrun,
  //   backgroundImage2: cityrun2,
  // },
  // {
  //   id: 4,
  //   title: "Designs",
  //   description: "Art on Fabric.",
  //   Number: "04",
  //   backgroundImage1: cityrun,
  //   backgroundImage2: cityrun2,
  // },
];

export const MyProgramming = [
  {
    id: 1,
    title: "React",
    icon: <FaReact />,
  },
  {
    id: 2,
    title: "Github",
    icon: <FaGithub />,
  },
  {
    id: 3,
    title: "Html",
    icon: <FaHtml5 />,
  },
  {
    id: 4,
    title: "Css",
    icon: <FaCss3Alt />,
  },
  {
    id: 5,
    title: "Java-Script",
    icon: <DiJavascript />,
  },
  {
    id: 6,
    title: "Talwind-Css",
    icon: <RiTailwindCssFill />,
  },
  {
    id: 7,
    title: "Framer",
    icon: <SiFramer />,
  },
  {
    id: 8,
    title: "Mysql",
    icon: <GrMysql />,
  },
];

export const creativeDesigns = [
  {
    id: 1,
    title: "Canva",
    icon: <SiCanva />,
  },
  {
    id: 2,
    title: "Adobe-xd",
    icon: <SiAdobexd />,
  },
  {
    id: 3,
    title: "Photoshop",
    icon: <SiAdobephotoshop />,
  },
  {
    id: 4,
    title: "Lightroom",
    icon: <SiAdobelightroom />,
  },
  {
    id: 5,
    title: "Premier-Pro",
    icon: <SiAdobepremierepro />,
  },
  {
    id: 6,
    title: "illustrator",
    icon: <SiAdobeillustrator />,
  },
  {
    id: 7,
    title: "After-effects",
    icon: <SiAdobeaftereffects />,
  },
  {
    id: 8,
    title: "Davinci-rosolve",
    icon: <SiDavinciresolve />,
  },
];
