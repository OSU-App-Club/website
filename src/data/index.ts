import type { MemberCardItem, ProjectCardItem, TeamCardItem } from "@/types";

const sebastianBio = `Hey! My name is Sebastian Torresola, and I am currently a junior majoring in CS at OSU. I've lived in Arizona, Vancouver (BC), and Washington/Oregon for almost 7 years each. I really enjoy basketball, practicing piano, losing at poker, and playing video games with my friends that I’ve lost touch with after moving. Please feel free to reach out to me on my socials!`;
const anthonyBio = `Hello! My name is Anthony Silva, and I am currently a double major student in computer science and mathematics at Oregon State University. Other than coding web and mobile applications, I like to study geography, go swimming, and play video games. Feel free to reach out to chat with me, whether it is about coding, academics, career prep, or whatever else that is going on!`;
const tristanBio = "";
const seanBio = "Hello! My name is Sean Gutmann, and I am currently majoring in CS Systems at OSU. I'm from Seattle, WA. I really enjoy playing soccer, spikeball, and frisbee with friends. I also enjoy coding websites and mobile apps that I can use.";
const noamBio = "Hey! My name is Noam, and I’m a first year computer science major with a focus on computer systems. I was born in Israel, and relocated to Portland, Oregon more than a decade ago. I love thrifting, listening to music, and spending time with my family and friends. Feel free to reach out on any of my socials if you have any questions about the club, or if you just want to say hi!";
const tylerBio = "";

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
    email: "gutmanns@oregonstate.edu",
    biography: seanBio,
  },
  {
    name: "Noam Yaffe",
    role: "Community Outreach",
    image: "https://avatars.githubusercontent.com/u/185013802?v=4",
    github: "https://github.com/yaffenator",
    email: "yaffen@oregonstate.edu",
    linkedin: "https://www.linkedin.com/in/noam-yaffe-5429ab331/",
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
