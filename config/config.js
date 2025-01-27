export const SEOconfig = {
  title:
    "Portfolio of Bartłomiej Staroń | Full-Stack Developer | Python, SQL, GIS, JavaScript, TypeScript, Streamlit",
  decryption:
    "Explore the portfolio of Bartłomiej Staroń, a versatile full-stack developer proficient in Python, SQL, JavaScript, TypeScript, and GIS. Discover innovative projects showcasing my expertise in web development, database management, and geographic information systems. Contact me to learn how I can bring your project to life with cutting-edge technologies and comprehensive solutions.",
};

export const mainInfo = {
  title: "Welcome to My Portfolio!",
  desc: "Explore my projects, skills, and experiences in the world of programming.",
};
export const mainInfos = [
  {
    title: "Welcome to My Portfolio!",
    desc: "Explore my projects, skills, and experiences in the world of programming.",
  },
  {
    title: "Discover My Journey",
    desc: "Dive into the story behind my passion for coding and continuous learning.",
  },
  {
    title: "Projects That Make a Difference",
    desc: "Check out the innovative projects I've built to solve real-world problems.",
  },
  {
    title: "My Skillset at a Glance",
    desc: "Explore the programming languages, tools, and technologies I specialize in.",
  },
  {
    title: "Collaborate With Me",
    desc: "Learn how we can work together to bring creative ideas to life.",
  },
  {
    title: "Contact Me Today",
    desc: "Get in touch to discuss opportunities or share your feedback!",
  },
];

export const menuItems = [
  {
    title: "Home project",
    path: "#",
    children: [
      { title: "BrawlStarAPI", path: "/homeprojects/brawlstarapi" },
      { title: "GeoSeach", path: "/homeprojects/geosearch" },
      { title: "Portfolio", path: "/homeprojects/portfolio" },
      { title: "Map with ESRI", path: "/homeprojects/esrimap" },
      { title: "OSMData", path: "/homeprojects/osmdata" },
      { title: "Collector", path: "/homeprojects/collector" },
      {
        title: "Data visualization - Streamlit",
        path: "/homeprojects/streamlit",
      },
    ],
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export const outerProfilLinks = [
  {
    url: "https://www.linkedin.com/in/bart%C5%82omiej-staro%C5%84",
    name: "Linkedin",
    icon: "uil:linkedin",
  },
  { url: "https://github.com/tlomiej", name: "Github", icon: "uil:github" },
];

export const footerText = "Copyright 2025. Staron";
export const aboutMe = {
  title: "Developer",
  descryption:
    " Developer skilled in frontend and backend development, specializing in Geographic Information Systems. Creates user-friendly interfaces and robust backend systems to analyze and visualize spatial data efficiently.",
};

export const contactMe = {
  mail: "bartekstaron@gmail.com",
  place: "Lublin (51°15′00″N' 22°34′00″E)",
  MAIL_API_KEY: "ce090992-67c7-4408-a249-f293bfd6deb5",
};

export const tools = [
  {
    url: "",
    name: "JavaScript",
    icon: "javascript",
  },
  {
    url: "",
    name: "TypeScript",
    icon: "typescript",
  },
  {
    url: "",
    name: "Python",
    icon: "python",
  },
  {
    url: "",
    name: "SQL",
    icon: "sql",
  },
  {
    url: "https://streamlit.io",
    name: "Streamlit",
    icon: "streamlit",
  },
  {
    url: "https://vuejs.org",
    name: "Vue",
    icon: "vue",
  },
  {
    url: "https://nodejs.org",
    name: "node.js",
    icon: "nodejs",
  },
  {
    url: "https://expressjs.com",
    name: "express.js",
    icon: "express",
  },
  {
    url: "https://ejs.co/",
    name: "EJS",
    icon: "ejs",
  },
  {
    url: "https://www.mongodb.com",
    name: "mongoDB",
    icon: "mongodb",
  },
  { url: "https://github.com/tlomiej", name: "Github", icon: "uil:github" },
];

export const projectsbyID = {
  brawlstarapi: {
    name: "BrawlStarAPI",
    descryption:
      "Brawl Stars is a popular mobile game with millions of users around the world. The application is built upon the public Brawl Stars API, which provides convenient access to browse data and retrieve it in JSON format. With this API, users can effortlessly explore various game-related information and retrieve it in a structured JSON format for further processing or integration with other systems.",
    href: "/homeprojects/brawlstarapi",
    link: "https://learn-nodejs-r8oc.onrender.com",
    repoLink: undefined,
    tools: [
      {
        url: "https://nodejs.org",
        name: "node.js",
        icon: "nodejs",
      },
      {
        url: "https://expressjs.com",
        name: "express.js",
        icon: "express",
      },
      {
        url: "https://ejs.co/",
        name: "EJS",
        icon: "ejs",
      },
      {
        url: "https://www.mongodb.com",
        name: "mongoDB",
        icon: "mongodb",
      },
      { url: "https://github.com/tlomiej", name: "Github", icon: "uil:github" },
    ],
  },
  streamlit: {
    name: "Data visualization - Streamlit",
    link: "https://choropleth-gus-maps.streamlit.app/",
    repoLink: undefined,
    href: "/homeprojects/streamlit",
    descryption:
      "Welcome to Voivodeship Data Visualizer, an intuitive web application built with Streamlit that brings you comprehensive insights into Poland's voivodeships through dynamic choropleth maps. Powered by data from the Central Statistical Office (GUS), this tool provides a visually engaging way to explore regional statistics. Key features include: Interactive Choropleth Maps: Seamlessly visualize key statistics for each voivodeship with interactive maps that highlight regional differences in various data categories. Up-to-date Data: Access the latest data from GUS, ensuring your insights are based on current and accurate information. User-friendly Interface: Enjoy a clean and responsive design that makes data exploration easy and engaging for users of all backgrounds.Detailed Data Insights: Drill down into specific voivodeships to view detailed statistical data, making it easier to understand regional trends and patterns. Customizable Views: Tailor your data visualization experience with customizable filters and options to focus on the information that matters most to you. Discover the power of data-driven insights with Voivodeship Data Visualizer, where data meets clarity and precision!",
    tools: [
      {
        url: "",
        name: "Python",
        icon: "python",
      },
      {
        url: "https://streamlit.io",
        name: "Streamlit",
        icon: "streamlit",
      },
      { url: "https://github.com/tlomiej", name: "Github", icon: "uil:github" },
    ],
  },
  geosearch: {
    name: "GeoSearch",
    link: "https://geoapp-8zbw.onrender.com",
    repoLink: undefined,
    href: "/homeprojects/geosearch",
    descryption:
      "This product facilitates searching for locations based on their name and space. Users can apply specific filters to refine their search results. It automatically logs the search history, allowing users to revisit previous searches.Its interface is designed to be intuitive, providing users with a seamless experience.",
    tools: [
      {
        url: "",
        name: "JavaScript",
        icon: "javascript",
      },
      {
        url: "",
        name: "TypeScript",
        icon: "typescript",
      },
      {
        url: "https://vuejs.org",
        name: "Vue",
        icon: "vue",
      },
      { url: "https://github.com/tlomiej", name: "Github", icon: "uil:github" },
    ],
  },
  esrimap: {
    name: "Map with ESRI",
    link: "https://esri-app.onrender.com",
    repoLink: undefined,
    href: "homeprojects/esrimap",
    descryption: "Map created wid ESRI JS API 4.30",
    tools: [
      {
        url: "https://react.dev",
        name: "React",
        icon: "react",
      },
      {
        url: "",
        name: "JavaScript",
        icon: "javascript",
      },
      {
        url: "",
        name: "TypeScript",
        icon: "typescript",
      },
    ],
  },
  osmdata: {
    name: "OSMData",
    link: "https://www.osmdata.online/",
    repoLink: undefined,
    href: "homeprojects/osmdata",
    descryption: "Get data from OpenStreetMap by Overpass API",
    tools: [
      {
        url: "https://react.dev",
        name: "React",
        icon: "react",
      },
      {
        url: "",
        name: "JavaScript",
        icon: "javascript",
      },
      {
        url: "",
        name: "TypeScript",
        icon: "typescript",
      },
    ],
  },
  portfolio: {
    name: "Portfolio",
    link: "https://github.com/tlomiej/portfolioAstro",
    repoLink: "https://github.com/tlomiej/portfolioAstro", 
    href: "homeprojects/portfolio",
    descryption:
      "Template portfolio with config and tailwind configuration. Simple configuration. In the config.js file, you configure the content of the page: information about yourself, project descriptions, technologies. In the tailwind.config.mjs file, you define your colors.",
    tools: [
      {
        url: "https://tlomiejastro.onrender.com/about",
        name: "Astro",
        icon: "astro",
      },
    ],
  },
  collector: {
    name: "Collector",
    link: "https://collect.pythonanywhere.com",
    repoLink: undefined,
    href: "/homeprojects/collector",
    descryption:
      "Collector Pro is an advanced application designed to simplify and enhance the process of creating custom forms, collecting data, and generating insightful reports. Ideal for businesses, educational institutions, non-profits, and any organization that relies on efficient data collection and analysis, Collector Pro offers a comprehensive suite of tools to meet and exceed your needs. Collector Pro makes data collection straightforward and efficient. Once your forms are created, you can distribute them through various channels",
    tools: [
      {
        url: "",
        name: "Python",
        icon: "python",
      },
      {
        url: "",
        name: "Flask",
        icon: "flask",
      },
    ],
  },
};
