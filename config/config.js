export const menuItems = [
  {
    title: "Home project",
    path: "#",
    children: [
      { title: "BrawlStarAPI", path: "/homeprojects/brawlstarapi" },
      { title: "GeoSeach", path: "/homeprojects/geosearch" },
      { title: "Portfolio", path: "/homeprojects/portfolio" },
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

export const projects = [
  {
    name: "BrawlStarAPI",

    tools: [
      {
        url: "https://www.linkedin.com/in/bart%C5%82omiej-staro%C5%84",
        name: "Linkedin",
        icon: "uil:linkedin",
      },
      { url: "https://github.com/tlomiej", name: "Github", icon: "uil:github" },
    ],
  },
];

export const projectsbyID = {
  brawlstarapi: {
    name: "BrawlStarAPI",
    descryption:
      "Brawl Stars is a popular mobile game with millions of users around the world. The application is built upon the public Brawl Stars API, which provides convenient access to browse data and retrieve it in JSON format. With this API, users can effortlessly explore various game-related information and retrieve it in a structured JSON format for further processing or integration with other systems.",
    href: "/homeprojects/brawlstarapi",
    link: "https://learn-nodejs-r8oc.onrender.com",
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
  geosearch: {
    name: "GeoSearch",
    link: "https://geoapp-8zbw.onrender.com",
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
};
