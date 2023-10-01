type Project = {
    title: string;
    description: string;
    image: string;
    techStack: Array<Tech>;
    github: string;
    demo: string;
  };
  
  type Category = {
    name: string;
  };
  
  type Tech = {
    name: string;
    image: string;
    icon: string;
    description: string;
    url: string;
    category: Category;
  };
  
  const Categories: Category[] = [
    {
      name: "frontend",
    },
    {
      name: "backend",
    },
    {
      name: "fullstack",
    },
  ];
  export const Techs: Tech[] = [
    // Frontend
    {
      name: "flutter",
      image: "./images/flutter-image.png",
      icon: "./icons/flutter.svg",
      description:
        "Flutter is an open-source UI toolkit created by Google for building natively compiled applications for mobile, web, and desktop from a single codebase.",
      url: "https://docs.flutter.dev/",
      category: Categories[0],
    },
    {
      name: "reactjs",
      image: "./images/reactjs-image.png",
      icon: "./icons/reactjs.svg",
      description:
        "React is a JavaScript library used to build interactive user interfaces for single-page applications, enhancing web development capabilities.",
      url: "https://legacy.reactjs.org/docs/getting-started.html",
      category: Categories[0],
    },
    {
      name: "nextjs",
      image: "./images/nextjs-image.png",
      icon: "./icons/nextjs.svg",
      description:
        "Next.js is a React framework for building static and dynamic websites and web applications with server-side rendering.",
      url: "https://nextjs.org/docs",
      category: Categories[0],
    },
    // Backend
    {
      name: "django rest framework",
      image: "./images/django-rest-image.png",
      icon: "./icons/django-rest.svg",
      description:
        "Django REST framework is a powerful and flexible toolkit for building Web APIs with Django, a popular Python web framework.",
      url: "https://www.django-rest-framework.org/topics/documenting-your-api/",
      category: Categories[1],
    },
    {
      name: "expressjs",
      image: "./images/expressjs-image.png",
      icon: "./icons/expressjs.svg",
      description:
        "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
      url: "https://expressjs.com/",
      category: Categories[1],
    },
    {
      name: "firebase",
      image: "./images/firebase-image.png",
      icon: "./icons/firebase.svg",
      description:
        "Firebase is a comprehensive app development platform with tools to help you build, improve, and grow your app.",
      url: "https://firebase.google.com/docs?gad=1&gclid=CjwKCAjw69moBhBgEiwAUFCx2G6bmSUYtg1G4UnUzoe5_auK7g914kEvVnNzxpw2FnF57CQY3PXVzhoCG2gQAvD_BwE&gclsrc=aw.ds",
      category: Categories[1],
    },
    {
      name: "mongodb",
      image: "./images/mongodb-image.png",
      icon: "./icons/mongodb.svg",
      description:
        "MongoDB is a popular open-source document-oriented NoSQL database that provides high performance, high availability, and easy scalability.",
      url: "https://www.mongodb.com/docs/",
      category: Categories[1],
    },
    {
      name: "postgres",
      image: "./images/postgres-image.png",
      icon: "./icons/postgres.svg",
      description:
        "PostgreSQL is a powerful, open-source object-relational database system known for reliability, robustness, and extensibility.",
      url: "https://www.postgresql.org/docs/",
      category: Categories[1],
    },
    // Fullstack
    {
      name: "nodejs",
      image: "./images/nodejs-image.png",
      icon: "./icons/nodejs.svg",
      description:
        "Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code server-side.",
      url: "https://nodejs.org/en/docs",
      category: Categories[2],
    },
    {
      name: "django",
      image: "./images/django-image.png",
      icon: "./icons/django.svg",
      description:
        "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.",
      url: "https://docs.djangoproject.com/en/4.2/",
      category: Categories[2],
    },
  ];
  
  function getTechsByNames(techNames: string[]): Tech[] {
    return Techs.filter((tech) => techNames.includes(tech.name));
  }
  
  export const Projects: Project[] = [
    {
      title: "Audify",
      description: `This one is the "music app" that I built and another developer responsible for backend. And We use React js to build "Admin Dashboard" for this app.
                  This Demo video was presented to School Client which is a Japanese Company. Now we're waiting for more requirement and change  from client ,in order to continue`,
      techStack: getTechsByNames([
        "flutter",
        "firebase",
        "mongodb",
        "nodejs",
        "expressjs",
        "reactjs",
        "django rest framework",
      ]),
      github: "",
      image: "./images/project-placeholder.png",
      demo: "",
    },
    {
      title: "Flutter Game",
      description: `This is the real gambling app which we target Vietnamese user(so it can access only for mobile phone that use Vietnamese language). User can register and deposit money and play game.`,
  
      techStack: getTechsByNames([
        "flutter",
        "reactjs",
        "nextjs",
        "django rest framework",
        "expressjs",
        "firebase",
        "mongodb",
        "postgres",
        "nodejs",
        "django",
      ]),
      github: "",
      image: "./images/project-placeholder.png",
      demo: "",
    },
    {
      title: "Attendance System",
      description: ``,
      techStack: [],
      github: "",
      image: "./images/project-placeholder.png",
      demo: "",
    },
    {
      title: "Food Application",
      description: ``,
      techStack: [],
      github: "",
      image: "./images/project-placeholder.png",
      demo: "",
    },
  ];
  