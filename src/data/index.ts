import type { MemberCardItem, ProjectCardItem, TeamCardItem } from "@/types";

const tristanBio = "";
const seanBio = "";
const noamBio = "";
const tylerBio = "";
const varlieBio = "";
const milesBio = "";

const officerData: TeamCardItem[] = [
  {
    name: "Sean Gutmann",
    role: "President",
    image: "https://avatars.githubusercontent.com/u/70712778?v=4",
    github: "https://github.com/SeanG-rsd",
    linkedin: "https://www.linkedin.com/in/seangutmann/",
    email: "",
    biography: seanBio,
  },
  {
    name: "Tristan Goehring",
    role: "Vice President",
    image: "https://avatars.githubusercontent.com/u/93668156?v=4",
    github: "https://github.com/0Tristan0",
    email: "",
    linkedin: "https://www.linkedin.com/in/tristan-goehring/",
    biography: tristanBio,
  },
  {
    name: "Tyler Quach",
    role: "Secretary & Webmaster",
    image: "https://avatars.githubusercontent.com/u/158121390?v=4",
    github: "https://github.com/Splash791",
    linkedin: "https://github.com/Microchip-Cookies",
    email: "",
    biography: varlieBio,
  },
  {
    name: "Valerie Armstrong",
    role: "Treasurer",
    image: "https://avatars.githubusercontent.com/u/123773975?v=4",
    github: "https://github.com/Microchip-Cookies",
    linkedin: "https://www.linkedin.com/in/valerie-armstrong-650954271/",
    email: "quachty@oregonstate.edu",
    biography: tylerBio,
  },
  {
    name: "Miles Chase",
    role: "Community Outreach",
    image: "https://avatars.githubusercontent.com/u/39201587?v=4",
    github: "https://github.com/bobjoerules",
    email: "",
    biography: milesBio,
  },
  {
    name: "Noam Yaffe",
    role: "Community Outreach",
    image: "https://avatars.githubusercontent.com/u/185013802?v=4",
    github: "https://github.com/yaffenator",
    email: "",
    biography: noamBio,
  },
];

const beaverBio = "This is Beaver McBeaverson's biography.";
// firstnameBio = "Your biography"
// In case of a first name conflict, do firstnameLastnameBio = "Your biography"

const memberData: MemberCardItem[] = [
  {
    name: "Beaver McBeaverson",
    image: "https://avatars.githubusercontent.com/u/158121390?v=4",
    github: "https://github.com/sebat2004",
    linkedin: "https://www.linkedin.com/in/sebastian-torresola-7b3b3b1b3/",
    email: "torresos@oregonstate.edu",
    biography: beaverBio,
  },
  //   {
  //     name: "Your Name",
  //     image: "Image url/path",
  //     github: "GitHub Link (optional)",
  //     linkedin: "LinkedIn Link (optional)",
  //     other: "Personal Website Link (optional)",
  //     email: "Your email (optional)",
  //     biography: firstnameBio,
  //   }
];

const pastProjectsData: ProjectCardItem[] = [
  {
    title: "Beavbright",
    description:
      "Beavbright is a web platform that allows students to find and share study resources. The platform is built using Next.js, Tailwind CSS, and PostgreSQL. We completed this project during the Spring 2024 term.",
    href: "/",
    github: "https://github.com/OSU-App-Club/beavbright",
    live: "https://beavbright-web.vercel.app/",
    images: ["/beavbright-1.png", "/beavbright.png"],
    video: "",
    tags: ["Next.js", "Tailwind CSS", "PostgreSQL"],
  },
  {
    title: "BeavsAI",
    description:
      "BeavsAI is a full-stack web application that allows OSU students to have conversations with their course syllabi. Simply add the course and start chatting away. The frontend was made in React, the backend in Express.js and MongoDB, and AI service using Python. We completed this project during the Fall 2023 term.",
    href: "/",
    github: "https://github.com/OSU-App-Club/beavsai-frontend",
    live: "https://beavsai.onrender.com/",
    images: [
      "/beavsai.png",
      "https://d3uraa353l50l1.cloudfront.net/image-1705999424668-Screen_Shot_2023-12-08_at_11.06.02_PM_d9zj0j.png?Expires=1866411416&Key-Pair-Id=K2QFIALPUONXG1&Signature=CX2myqCLMHfzQpsKCMa6K8bH3~DCMYq~s6u-ZYgtFZlbCOBbFMqwBCpk-5hWvRBt0oRl4mKW44eWpEhq85V0pktXK3A8Gl~sEDoTvYJUWhbtNSxScLlhltWFV3y~TBN04a-uqgJ6n0UbYXm-bJvQkAIHtdUytm-nUJ9bx1Lx5MvtsCWSLU2D6Nv4v9qlfHfsBsUQyl3XZrLjnVjrHi3zTNclBCg449pdXKDUixxLysrcY4PRtlDxsUTxYADmli~EEqfI3BId94oui~Pf1BjAimwXOXgvdcXx~1Fv9bMjqc1Xn3J~fCbc~1AVvXeM9yy1RyjOPiOnKHgjDb1wDz3yug__",
      "/beavsai-2.png",
      "beavsai-3.png",
      "beavsai-4.png",
      "beavsai-5.png",
    ],
    video: "",
    tags: [
      "React",
      "PineconeDB",
      "Express.js",
      "RAG",
      "MongoDB",
      "Python",
      "Langchain",
    ],
  },
  {
    title: "Gesture Project",
    description:
      "Gesture Project is a full-stack web application that allows users to control their computer using hand gestures. It is a NextJS web app which reads hand gestures from Ultraleap 3Di camera and user interface is displayed through Holo Industries holographic plate. The backend is deployed on AWS ECS cluster via AWS Copilot using gRPC and Apache Kafka to distrubute messages. The project was made during Spring 2023",
    href: "/",
    github: "https://github.com/OSU-App-Club/GestureProject-AWS",
    live: "https://www.youtube.com/watch?v=OmSSALhqRVc",
    images: ["/gesture-1.webp", "/gesture-2.webp", "/gesture-3.png"],
    video: "",
    tags: [
      "RabbitMQ",
      "Ultraleap 3Di",
      "Holo Industries",
      "AWS ECS",
      "gRPC",
      "AWS Copilot",
      "Apache Kafka",
      "Go",
    ],
  },
  {
    title: "Portfolio Websites",
    description:
      "As a part of spring 2023, we had a portfolio website competition where members of our club were tasked with building a portfolio website throughout the term. We allowed members to choose what individual technologies they used, with the only requirement being that the website had to be hosted on the web. The winners of the competition were awarded a prize. Here are the top 3 winners.",
    href: "/",
    github: "https://github.com/nyumat/showcase",
    live: "https://www.youtube.com/watch?v=OmSSALhqRVc",
    images: ["/website.png", "/website-1.png", "/website-2.png"],
    video: "",
    tags: ["React", "JavaScript", "Svelte", "HTML/CSS", "Angular", "Wix"],
  },
];

export { officerData, pastProjectsData, memberData };
