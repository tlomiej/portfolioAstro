// DEMO CONFIG FILE FOR PORTFOLIO TEMPLATE
// REPLACE THE CONTENT WITH YOUR OWN INFORMATION

export const SEOconfig = {
  title:
    "Portfolio of Alex Johnson | Full-Stack Developer | React, Node.js, TypeScript, Python - DEMO",
  decryption:
    "Explore the portfolio of Alex Johnson, a passionate full-stack developer proficient in React, Node.js, TypeScript, and Python. This is a demo portfolio template showcasing various web development projects and skills. Discover innovative solutions and modern web technologies in action.",
};

export const googleAnalyticsId = ""; // Add your Google Analytics ID here

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
      { title: "GeoSearch", path: "/homeprojects/geosearch" },
      { title: "VSCodeGisExtension", path: "/homeprojects/vscodegisextension" },
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
    url: "https://www.linkedin.com/in/demo-user",
    name: "Linkedin",
    icon: "uil:linkedin",
  },
  { url: "https://github.com/demo-user", name: "Github", icon: "uil:github" },
];

export const footerText = "Copyright 2025. Demo Portfolio Template";

export const seasonalEffects = {
  enabled: true,
  displayPeriods: [
    { startMonth: 12, startDay: 24, endMonth: 12, endDay: 26 },
    { startMonth: 1, startDay: 1, endMonth: 1, endDay: 6 }  ]
};

export const aboutMe = {
  title: "Developer",
  description:
    " Developer skilled in frontend and backend development, specializing in Geographic Information Systems. Creates user-friendly interfaces and robust backend systems to analyze and visualize spatial data efficiently.",
};

export const contactMe = {
  mail: "demo@example.com",
  place: "San Francisco, CA (37°46′30″N 122°24′56″W)",
  MAIL_API_KEY: "", // Add your Web3Forms API key here: https://web3forms.com
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
    description:
      "Brawl Stars is a popular mobile game with millions of users around the world. The application is built upon the public Brawl Stars API, which provides convenient access to browse data and retrieve it in JSON format. With this API, users can effortlessly explore various game-related information and retrieve it in a structured JSON format for further processing or integration with other systems.",
    href: "/homeprojects/brawlstarapi",
    link: "https://learn-nodejs-r8oc.onrender.com",
    repoLink: undefined,
    images: [],
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
        url: "https://ejs.co",
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
    href: "/homeprojects/streamlit",
    link: "https://choropleth-gus-maps.streamlit.app/",
    repoLink: undefined,
    images: [],
    description:
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
    href: "/homeprojects/geosearch",
    link: "https://geoapp-8zbw.onrender.com",
    repoLink: undefined,
    images: [],
    description:
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
    name: "OSM Search",
    href: "homeprojects/esrimap",
    link: "https://esri-app.onrender.com",
    repoLink: undefined,
    images: [],
    description: "Map created with ESRI JS API 4.30",
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
  vscodegisextension: {
    name: "VSCode GIS Extension",
    href: "homeprojects/vscodegisextension",
    link: "https://marketplace.visualstudio.com/items?itemName=BartlomiejStaron.gisextension#review-details",
    repoLink: undefined,
    images: [],
    description: `VSCode GIS Extension is a powerful tool designed to enhance the capabilities of Visual Studio Code for Geographic Information System (GIS) professionals and enthusiasts. This extension seamlessly integrates GIS functionalities into the VSCode environment, allowing users to efficiently manage, analyze, and visualize geospatial data without leaving their code editor.`,
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
    ],
  },
  portfolio: {
    name: "Portfolio",
    href: "homeprojects/portfolio",
    link: "https://github.com/tlomiej/portfolioAstro",
    repoLink: "https://github.com/tlomiej/portfolioAstro",
    images: [],
    description:
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
    images: [],
    description:
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
