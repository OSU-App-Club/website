import type { ProjectCardItem, TeamCardItem } from "@/types";

const tomBiography = `Hey -- My name is Tom but most call me "nuu-muh". I'm from Orlando, Florida. My hobbies include reading manga, mastering the clarinet, and free climbing. If you ever want to laugh about floating points in JavaScript, or share disappointment by the second season of the Promised Neverland, feel free to reach out! This club is a great place to meet new people and learn new things, so I hope to see you at our next meeting and or event!`;
const sebastianBiography = `Hey! My name is Sebastian Torresola, and I am currently a sophomore majoring in CS at OSU. I’m a proud Arizonian, but I moved to Corvallis from Washington. I really enjoy basketball, practicing piano, losing at poker, and playing video games with my friends that I’ve lost touch with after moving. Please feel free to reach out to me on my socials!`;
const tazBiography = `Hi! My name is Taz Larson and I'm a sophomore at OSU studying computer science. I was born in Oregon and have pretty much lived here my whole life. In my free time I like to go mountain bike, read, and of course play video games. Always feel free to reach out and chat!`;
const chiBiography = `Hello, my name is Chi Chan and I am a sophomore at OSU. I am studying CS with a focus in web development! I am born in China moved to USA when I was kid. I am big fan of video game. My favorite thing to do is play soccer and basketball. I have been playing soccer since I was kid. If you want to 1v1 me in basketball let me know:`;

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
  {
    name: "Sebastian Torresola",
    role: "Vice President",
    image: "/sebpfp.png",
    github: "https://github.com/sebat2004",
    linkedin: "https://www.linkedin.com/in/sebastian-torresola-7b3b3b1b3/",
    email: "torresos@oregonstate.edu",
    biography: sebastianBiography,
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
    name: "Chi Chan",
    role: "Public Relations",
    image: "https://avatars.githubusercontent.com/u/114010974?v=4",
    github: "https://github.com/ChiChan17",
    linkedin:
      "https://www.linkedin.com/in/chi-chan-14577a26b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    biography: chiBiography,
  },
];

const pastProjectsData: ProjectCardItem[] = [
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
    video:
      "https://d3uraa353l50l1.cloudfront.net/video-1705999762920-beavsai_vj6hyw.mov?Expires=1711215415&Key-Pair-Id=K2QFIALPUONXG1&Signature=dtWaL9XRwn5qeSpLQ4tOV9jBBFOR3M5ZEENtLKj2Q2Hc8qLrCFDj-46kBraWWsPnmSEOx8XXOwAzucY~psyrcGSuSHhqGF3qOM00oGJ0wl9BfsjhWBRZqPblOPo-FQ2RGvtfDrT7HK3d31CebEzo4lBAztJP9UQA61ul3QQvA0kzzM1~sthU0TVJCO-hZdwGveENpFY618Q-iB91mi4AOHMmWOYA8dYOnWfPdmaavCrGFjBzZWcj1yI8W3W4Yyuf5YW2QI6aZy-PrV6F2NPgn5rZE4pCMfOD0DIpu22S0mGqgVU68ggxqsxNR0XtP7Tv3lkJJ2h0TK8sgoFIpNs9Bw__",
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
    video:
      "https://d3uraa353l50l1.cloudfront.net/video-1708649909184-Spring%202023%20-%20App%20Dev%20Club%20-%20Gesture%20Project%20-%20Holo%20Industries%20holographic%20plate%20demo.mp4?Expires=1711241931&Key-Pair-Id=K2QFIALPUONXG1&Signature=tu~i4UVWT1e27Eo-r1HFW5T~apLYDQW8q-T3WePuKh3oNxxQCzYF-Sam3oWqKEmwSWhBx39xLrujgsaNGGzoKaDBngvaGJmPTOeSIZDzpoYB0WGItTPF4K0NUA95fIoYchZDYEbbaXMAwNNRmImJdXOh22RKOjgndubJbF12Dcy56~Kf81Vlv6F8v3BVxSW5M-7ST-F3jVwZeNNrc1N9KMWYrVvlp2fEGZPq8DeuiYzqSQg0zB0W7D~Bj4qUkNdQ-5EaXiX5ZJT3LGE3Qv0R74Z8Mmb2stao06PF3bEvV9j4emmQxEz4wRFE0sivrZtNGfWurTtZ4cncsK9VfgRJLg__",
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
