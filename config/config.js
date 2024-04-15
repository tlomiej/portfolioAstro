export const menuItems = [
  {
    title: "Home project",
    path: "#",
    children: [
      { title: "BrawlStarAPI", path: "/homeprojects/brawlstarapi" },
      { title: "GeoSeach", path: "/homeprojects/geosearch" },
      { title: "Portfolio", path: "/homeprojects/portfolio" },
      { title: "404 Page", path: "/404" },
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
  /*   {url: 'https://github.com/tlomiej', name: "Github", icon:"mongodb"} */
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
    descryption: "BrawlStarAPI",
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
    descryption: "GeoSearch - looking for addres",
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
