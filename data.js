const abilities = [
  // Programming Languages
  [
    { name: "JavaScript", percent: 92 },
    { name: "Java", percent: 88 },
    { name: "Python", percent: 85 },
    { name: "C++", percent: 85 },
    { name: "C", percent: 70 },
    { name: "Assembly", percent: 70 },
  ],
  // Databases
  [
    { name: "MySQL", percent: 90 },
    { name: "PostgreSQL", percent: 90 },
    { name: "MongoDB", percent: 86 },
  ],
  // Cloud Platforms
  [
    { name: "Amazon Web Services (AWS)", percent: 83 },
    { name: "Google Cloud Platform", percent: 75 },
    { name: "Microsoft Azure", percent: 82 },
  ],
  // Technologies:  HTML, CSS, React, Node.js, jQuery, Bootstrap, Docker,
  //                Git, Tomcat, WordPress, Matlab, R
  [
    { name: "HTML", percent: 95 },
    { name: "CSS", percent: 95 },
    { name: "React", percent: 92 },
    { name: "Node.js", percent: 90 },
    { name: "jQuery", percent: 89 },
    { name: "Bootstrap", percent: 90 },
    { name: "Docker", percent: 85 },
    { name: "Git", percent: 88 },
    { name: "Tomcat", percent: 73 },
    { name: "WordPress", percent: 80 },
    { name: "Matlab", percent: 70 },
    { name: "R", percent: 76 },
  ],
];

const projects = [
  {
    name: "Toping.com",
    images: ["img/7-1.png", "img/7-2.png"],
    details: "Toping is an e-commerce website that delivers footwear and services.",
    types: "Design, Develop",
    tags: {
      front: ["Html", "Css", "JavaScript", "React"],
      database: ["PostgreSQL"],
      others: ["Node.js"],
    },
  },
  {
    name: "CollegeBA.com",
    images: ["img/3-1.jpg", "img/3-2.jpg"],
    details:
      "CollegeBA is a platform that gives college students a chance to sell and buy what they use in college.",
    types: "Design, Develop",
    tags: {
      front: ["Html", "Css", "JavaScript"],
      database: [],
      others: ["Node.js", "ESLint"],
    },
  },
  {
    name: "Safetyline.com",
    images: [
      "img/2-1.png",
      "img/2-2.png",
      "img/2-3.png",
      "img/2-4.png",
    ],
    details:
      "Safetyline website is an e-commerce website that provides a huge variety of safety-related supplies.",
    types: "Design, Develop",
    tags: {
      front: ["Html", "Css", "JavaScript", "Bootstrap"],
      database: ["MySQL"],
      others: [],
    },
  },
  {
    name: "Fabflix shopping website & Android App",
    images: [
      "img/1-1.png",
      "img/1-2.png",
      "img/1-3.png",
      "img/1-4.png",
    ],
    details:
      "Fablix is a mock e-commerce movie database website. Users can browse for movies, learn more details, add them into shopping cart as they want, and check out. There is also an Android app built on the website. And we apply master-slave instances technique for load balancing.",
    types: "Design, Develop",
    tags: {
      front: ["Html", "Css", "JavaScript", "Bootstrap", "reCAPTCHA"],
      database: ["MySQL"],
      others: ["Java", "Tomcat"],
    },
  },
  {
    name: "Search Engine",
    images: ["img/blank.jpg"],
    details:
      "Users type in keywords and the program will offer the most relevant results. Apply TF-IDF score ranking algorithm to find the shortest path.",
    types: "Develop",
    tags: {
      front: [],
      database: ["MongoDB"],
      others: ["Python"],
    },
  },
  {
    name: "Computational Photography Program",
    images: [
      "img/5-1.jpg",
      "img/5-2.jpg",
      "img/5-3.jpg",
      "img/5-4.jpg",
    ],
    details:
      "Build an object detector based on gradient featurs and sliding window classification. And develop a face-swapping function to warp from one face to another using the piecewise affine warping technique",
    types: "Develop",
    tags: {
      front: [],
      database: [],
      others: ["Python"],
    },
  },
  {
    name: "Wumpus World AI",
    images: ["img/6-1.jpg"],
    details:
      "Wumpus World game is a gold mining game. The player plays in a random generated map that has some obstacles like Wumpus and pit. The main goal is to grab the gold and bring it back to the start point. And we apply minimax algorithm and Alpha-Beta pruning to find the shorted path.",
    types: "Develop",
    tags: {
      front: [],
      database: [],
      others: ["C++"],
    },
  },
];
