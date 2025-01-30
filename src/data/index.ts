import type { ProjectCardItem, TeamCardItem } from "@/types";

const tomBiography = `Hey there! My name is Tom but most know me by my last name, Nyuma ("nuu-muh"). My hobbies include reading manga, mastering the clarinet, and building fun websites. I've seen a lot as president here at the App Development Club, so if I can assist you in any way with classes, your career, or even life, feel free to reach out! This club is a great place to meet new people and learn new things, so I hope to see you at our next meeting and or event : )`;
const sebastianBiography = `Hey! My name is Sebastian Torresola, and I am currently a sophomore majoring in CS at OSU. I'm a proud Arizonian, but I moved to Corvallis from Washington. I really enjoy basketball, practicing piano, losing at poker, and playing video games with my friends that I’ve lost touch with after moving. Please feel free to reach out to me on my socials!`;
const anthonyBiography = `Hello! My name is Anthony Silva, and I am currently a double major student in computer science and mathematics at Oregon State University. Other than coding web and mobile applications, I like to study geography, go swimming, and play video games. Feel free to reach out to chat with me, whether it is about coding, academics, career prep, or whatever else that is going on!`;
const tazBiography = `Hi! My name is Taz Larson and I'm a sophomore at OSU studying computer science. I was born in Oregon and have pretty much lived here my whole life. In my free time I like to go mountain bike, read, and of course play video games. Always feel free to reach out and chat!`;
const owenBiography = `Whatsup, my name is Owen, I'm a 2027 grad majoring in CS at OSU. I've lived in Oregon all my life, but my family moved to Hawaii after I graduated from high school. Other than coding I love to hangout with friends, shop for second hand clothing, and watch anime.`;

const officerData: TeamCardItem[] = [
  {
    name: "Tom Nyuma",
    role: "President",
    image: "https://avatars.githubusercontent.com/u/46255836?v=4",
    github: "https://github.com/nyumat",
    other: "https://tomnyuma.rocks",
    email: "nyumat@oregonstate.edu",
    biography: tomBiography,
  },
  /*{
    name: "Sebastian Torresola",
    role: "Vice President",
    image: "/sebpfp.png",
    github: "https://github.com/sebat2004",
    linkedin: "https://www.linkedin.com/in/sebastian-torresola-7b3b3b1b3/",
    email: "torresos@oregonstate.edu",
    biography: sebastianBiography,
  },*/
  {
    name: "Anthony Silva",
    role: "Vice President",
    image: "/anthony.jpg",
    github: "https://github.com/wreckinaj",
    linkedin: "https://www.linkedin.com/in/anthony-silva-613165291/",
    email: "silvanth@oregonstate.edu",
    biography: anthonyBiography,
  },
  {
    name: "Taz Larson",
    role: "Treasurer",
    image: "https://avatars.githubusercontent.com/u/127142580?v=4",
    github: "https://github.com/ttlarson7",
    email: "idk@oregonstate.edu",
    linkedin: "https://www.linkedin.com/in/taz-larson-a32955265/",
    biography: tazBiography,
  },
  {
    name: "Owen Krause",
    role: "Secretary",
    image: "https://avatars.githubusercontent.com/u/114010974?v=4",
    github: "https://github.com/owenkrause",
    email: "krauseo@oregonstate.edu",
    biography: owenBiography,
  },
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

export { officerData, pastProjectsData };
