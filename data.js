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
  // Technologies:  HTML, CSS, React, NodeJS, jQuery, Bootstrap, Docker,
  //                Git, Tomcat, WordPress, Matlab, R
  [
    { name: "HTML", percent: 95 },
    { name: "CSS", percent: 95 },
    { name: "React", percent: 92 },
    { name: "NodeJS", percent: 90 },
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
    images: ["img/7-1.png", "img/7-2.png", "img/7-3.png", "img/7-4.png"],
    details:
      "Toping is an e-commerce website that delivers footwear and services.",
    types: "Design, Develop",
    link: null,
    tags: {
      front: ["HTML", "CSS", "JavaScript", "React"],
      database: ["MySQL"],
      others: ["NodeJS", "AWS"],
    },
  },
  {
    name: "Japanese Kana Game",
    images: ["img/9-1.png", "img/9-2.png"],
    details:
      "Japanese Kana Game is a web game to help learn hiragana and katagana.",
    types: "Design, Develop",
    link: "https://github.com/jayneanc/Japanese-Kana-Game",
    tags: {
      front: ["HTML", "CSS", "JavaScript"],
      database: [],
      others: [],
    },
  },
  {
    name: "Random Meal Generator",
    images: ["img/8-1.png", "img/8-2.png", "img/8-3.png"],
    details:
      "Random Meal Generator is a tool to help get ideas of what to eat everyday.",
    types: "Design, Develop",
    link: "https://github.com/jayneanc/Random-Meal-Generator",
    tags: {
      front: ["HTML", "CSS", "JavaScript"],
      database: [],
      others: ["NodeJS"],
    },
  },
  {
    name: "CollegeBA.com",
    images: ["img/3-1.jpg", "img/3-2.jpg"],
    details:
      "CollegeBA is a platform that gives college students a chance to sell and buy what they use in college.",
    types: "Design, Develop",
    link: null,
    tags: {
      front: ["HTML", "CSS", "JavaScript"],
      database: ["MySQL"],
      others: ["NodeJS", "ESLint", "AWS"],
    },
  },
  {
    name: "Safetyline.com",
    images: ["img/2-1.png", "img/2-2.png", "img/2-3.png", "img/2-4.png"],
    details:
      "Safetyline is an e-commerce website that provides a huge variety of safety-related supplies.",
    types: "Design, Develop",
    link: null,
    tags: {
      front: ["HTML", "CSS", "JavaScript", "jQuery"],
      database: ["MySQL"],
      others: [],
    },
  },
  {
    name: "Fabflix shopping website & Android App",
    images: ["img/1-1.png", "img/1-2.png", "img/1-3.png", "img/1-4.png"],
    details:
      "Fablix is a mock e-commerce movie database website. Users can browse for movies, get movie details, add to cart, and check out. There is also an Anroid version of the website as another front-end. To increase scalability and security, this website uses reCAPTCHA, and load balancing via master- slave instances.",
    types: "Design, Develop",
    link: "https://github.com/jayneanc/Fabflix",
    tags: {
      front: ["HTML", "CSS", "JavaScript", "Bootstrap", "reCAPTCHA"],
      database: ["MySQL"],
      others: ["Java", "Tomcat", "Android SDK"],
    },
  },
  {
    name: "Search Engine",
    images: ["img/blank.jpg"],
    details:
      "User types in keywords and the program will offer the most relevant results. This program applies TF-IDF score ranking algorithm to optimize search results.",
    types: "Develop",
    link: "https://github.com/jayneanc/Search-Engine",
    tags: {
      front: ["HTML, CSS"],
      database: ["MongoDB"],
      others: ["Python"],
    },
  },
  {
    name: "Computational Photography Program",
    images: ["img/5-1.jpg", "img/5-2.jpg", "img/5-3.jpg", "img/5-4.jpg"],
    details:
      "Computational Photography are programs to detect, morph, and swap objects. The object detector is built based on gradient features and sliding window classification. The face-swapping function is to warp from one face to another using the piecewise affine warping technique.",
    types: "Develop",
    link: "https://github.com/jayneanc/Computational-Photography",
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
      "Wumpus World game is a gold mining game. The player plays in a random generated map that has some obstacles like Wumpus and pit. The main goal is to grab the gold and bring it back to the start point. The Wumpus World AI applies minimax algorithm and Alpha-Beta pruning to find the shortest path.",
    types: "Develop",
    link: "https://github.com/jayneanc/Wumpus-Wold-AI",
    tags: {
      front: [],
      database: [],
      others: ["C++"],
    },
  },
];
