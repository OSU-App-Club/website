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
    email: "goehrint@oregonstate.edu",
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

const dylanBio =
  "Hi! I'm Dylan K., a Senior CS Student here at OSU. I'm interested in computer graphics and games. I love coffee, cooking, and photography!";
const AdamBio =
  "Hello! My name is Adam Bobich. I'm from California and am currently a 2nd year Computer Science student at Oregon State.";
const kevinRubioBio =
  "Hi my name is Kevin Rubio I am Sophomore majoring in Computer Science with a minor in mathematics. Some of my hobbies include hiking, weightlifting, and snowboarding. A fun fact about Richard Sherman at an airport";
const chaseDbio =
  "Hi! I'm Chase! I'm a second year computer science student at Oregon State University. Prompt engineer specialist.";
const lukasBio =
  "Ahoi 👋 I'm Lukas Werner, I'm a second year software engineering student at Oregon State University.";
const harryBio =
  "Hello! My name is Harry Yu, and I am currently a junior majoring in computer science at OSU. I have lived in Corvallis my whole life, and I love playing video games, running, listening to music, and watching the NBA. During this past fall and winter terms, I was fortunate enough to have worked as a SWE intern at a healthcare startup in San Francisco. I am excited to be back at OSU and be a part of the App Dev Club!";
const EthanBio =
  "Hello, I'm Ethan Ossana, a junior at Oregon State University studying both computer science and mechanical enigeering.";
const harveyBio =
  "Hi everyone, I'm a Post-Bacc student majoring in Computer Science at Oregon State University";
const jeremyBio = 
  "Hi, I'm Jeremy. I'm a transfer student from Washington studying Computer Science at Oregon State University."
const omoriBio =
  "Hi I'm Michael. I'm a pHD student and I'm an incoming intern at Panasonic"
// In case of a first name conflict, do firstnameLastnameBio = "Your biography"

const memberData: MemberCardItem[] = [
  {
    name: "Dylan Keyhantaj",
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQGWTFDbTLv9Og/profile-displayphoto-crop_800_800/B4EZe.YYJDHgAI-/0/1751245752381?e=1775088000&v=beta&t=YAIHBW4Fl9k5xVvOJCgY5mFOruiWXdmnlSyXxv__eR8",
    github: "https://github.com/slaiff",
    linkedin: "https://www.linkedin.com/in/dylan-keyhantaj/",
    other: "Personal Website Link (optional)",
    email: "dylan.keyhantaj@gmail.com",
    biography: dylanBio,
  },
  {
    name: "Adam Bobich",
    image: "/adam.png",
    github: "https://github.com/abobich675",
    linkedin: "https://www.linkedin.com/in/adambobich/",
    email: "bobicha@oregonstate.edu",
    biography: AdamBio,
  },
  {
    name: "Lukas Werner",
    image: "https://avatars.githubusercontent.com/u/55150634?v=4",
    github: "https://github.com/lukasmwerner",
    linkedin: "https://www.linkedin.com/in/lukasmwerner/",
    other: "https://lukasmwerner.com",
    email: "wernerlu@oregonstate.edu",
    biography: lukasBio,
  },
  {
    name: "Kevin Rubio",
    image: "/kevin_image.JPG",
    github: "https://github.com/kevinru2023",
    linkedin: "https://www.linkedin.com/in/kevin-rubio-851269236/",
    email: "rubiok@oregonstate.edu",
    biography: kevinRubioBio,
  },
  {
    name: "Chase Dunn",
    image:
      "https://avatars.githubusercontent.com/u/194431855?s=400&u=a39753085c6a4650799897a210fe1e1a224e0946&v=4",
    email: "dunnchas@oregonstate.edu",
    biography: chaseDbio,
  },
  {
    name: "Harry Yu",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQFdI-Kd-cOvFQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1707326158067?e=1750291200&v=beta&t=Aq6Yix9r7PiLCn5JOfuZTgqKGRF9CY5rnjMp8HetbgQ",
    github: "https://github.com/harry23yu/",
    linkedin: "https://www.linkedin.com/in/harry23yu/",
    email: "yuhar@oregonstate.edu",
    biography: harryBio,
  },
  {
    name: "Michael Omori",
    image:
      "https://avatars.githubusercontent.com/u/17519743?s=400&u=4db0e5aeae88eaff0735cf6d3aebfe9a3633868f&v=4",
    github: "https://github.com/AstroBoy1",
    linkedin: "https://www.linkedin.com/in/michaeljomori/",
    other: "https://www.pawnpixels.com/",
    email: "omorim@oregonstate.edu",
    biography: omoriBio,
  },
  {
    name: "Ethan Ossana",
    image:
      "https://avatars.githubusercontent.com/u/183556701?s=400&u=1de971ca18de004f6311f6d5e989b073c4168a4d&v=4",
    github: "https://github.com/EthanHorizons",
    linkedin: "https://www.linkedin.com/in/ethan-ossana",
    email: "ethanbenstar@gmail.com",
    biography: EthanBio,
  },
  {
    name: "Harvey Ng",
    image: "https://avatars.githubusercontent.com/u/100104771?v=4",
    biography: harveyBio,
  },
  {
    name: "Jeremy Lammon",
    image: "https://avatars.githubusercontent.com/jeremy-lammon",
    github: "https://github.com/jeremy-lammon",
    linkedin: "https://www.linkedin.com/in/jeremy-lammon-41506a241/",
    email: "lammonj@oregonstate.edu",
    biography: jeremyBio,
  },
  {
    name: "Daniel Tran",
    image:
      "",
    github: "https://github.com/DT199012",
    linkedin: "https://www.linkedin.com/in/quocnnam-daniel-tran",
    email: "namdanieltran@gmail.com",
    biography: "This member has no biography.",
  }
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
