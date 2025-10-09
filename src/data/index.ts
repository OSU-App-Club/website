import type { MemberCardItem, ProjectCardItem, TeamCardItem } from "@/types";

const sebastianBio = `Hey! My name is Sebastian Torresola, and I am currently a junior majoring in CS at OSU. I've lived in Arizona, Vancouver (BC), and Washington/Oregon for almost 7 years each. I really enjoy basketball, practicing piano, losing at poker, and playing video games with my friends that I’ve lost touch with after moving. Please feel free to reach out to me on my socials!`;
const anthonyBio = `Hello! My name is Anthony Silva, and I am currently a double major student in computer science and mathematics at Oregon State University. Other than coding web and mobile applications, I like to study geography, go swimming, and play video games. Feel free to reach out to chat with me, whether it is about coding, academics, career prep, or whatever else that is going on!`;
const tristanBio =
  "What’s up! My name is Tristan Goehring, and I am a freshman CS student in the systems option at OSU. I love working out at the gym, playing golf with my friends, and basketball. My favorite academic subjects outside of CS are math (especially vector calculus) and anything with problem solving. ";
const seanBio =
  "Hello! My name is Sean Gutmann, and I am currently majoring in CS Systems at OSU. I'm from Seattle, WA. I really enjoy playing soccer, spikeball, and frisbee with friends. I also enjoy coding websites and mobile apps that I can use.";
const noamBio =
  "Hey! My name is Noam, and I’m a first year computer science major with a focus on computer systems. I was born in Israel, and relocated to Portland, Oregon more than a decade ago. I love thrifting, listening to music, and spending time with my family and friends. Feel free to reach out on any of my socials if you have any questions about the club, or if you just want to say hi!";
const tylerBio = "";
const omoriBio = "Hi, I'm Michael Omori, an AI grad student at OSU!";



const officerData: TeamCardItem[] = [
  {
    name: "Sebastian Torresola",
    role: "President",
    image: "/sebpfp.png",
    github: "https://github.com/sebat2004",
    linkedin: "https://www.linkedin.com/in/sebastian-torresola-7b3b3b1b3/",
    email: "torresos@oregonstate.edu",
    biography: sebastianBio,
  },
  {
    name: "Anthony Silva",
    role: "Vice President",
    image: "/anthony.jpg",
    github: "https://github.com/wreckinaj",
    linkedin: "https://www.linkedin.com/in/anthony-silva-613165291/",
    email: "silvanth@oregonstate.edu",
    biography: anthonyBio,
  },
  {
    name: "Tristan Goehring",
    role: "Secretary",
    image: "https://avatars.githubusercontent.com/u/93668156?v=4",
    github: "https://github.com/0Tristan0",
    email: "",
    linkedin: "https://www.linkedin.com/in/tristan-goehring/",
    biography: tristanBio,
  },
  {
    name: "Sean Gutmann",
    role: "Webmaster",
    image: "https://avatars.githubusercontent.com/u/70712778?v=4",
    github: "https://github.com/SeanG-rsd",
    linkedin: "https://www.linkedin.com/in/seangutmann/",
    email: "",
    biography: seanBio,
  },
  {
    name: "Noam Yaffe",
    role: "Community Outreach",
    image: "https://avatars.githubusercontent.com/u/185013802?v=4",
    github: "https://github.com/yaffenator",
    email: "",
    biography: noamBio,
  },
  {
    name: "Tyler Quach",
    role: "Community Outreach",
    image: "https://avatars.githubusercontent.com/u/158121390?v=4",
    github: "https://github.com/Splash791",
    email: "",
    biography: tylerBio,
  },
];

const dylanBio =
  "Hi! I'm Dylan! Junior here at Oregon State studying Computer Science with a focus in Computer Graphics and Games :)";
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
// In case of a first name conflict, do firstnameLastnameBio = "Your biography"

const MarBio = "Hi! My name is Marika Handa, and I am a second year ECE student at OSU. 


const memberData: MemberCardItem[] = [
  {
    name: "Dylan Keyhantaj",
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQFAJMVfK-vkEw/profile-displayphoto-shrink_400_400/B4EZX_czWwG0Ag-/0/1743747495706?e=1750291200&v=beta&t=CQBWYYkIWlZySRB0el88-7GO-W4nMIe22JYLLHHEK6s",
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
    linkedin: "www.linkedin.com/in/ethan-ossana",
    email: "ethanbenstar@gmail.com",
    biography: EthanBio,
  },
  {
    name: "Harvey Ng",
    image: "https://avatars.githubusercontent.com/u/100104771?v=4",
    biography: harveyBio,
  },

  name: "Marika Handa",
  github: "https://github.com/ENGR-C0ffeee",
  biography: MarBio, 

  
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
