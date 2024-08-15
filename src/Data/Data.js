export const homeData = {
  aboutUs: {
    title: "About Us",
    desc:
      "ICE is the exclusive agent of Samjung Tech for HVAC products special Absorption Chillers, also is professional calibers in all electromechanical disciplines for both contracting sectors, services, maintenance. Every person in the company has a luminous history of working in the biggest contracting firms in Egypt. Despite the company young age but we have our own vision which qualifies us to carry out our works skillfully and in a professional manner.",
  },
  ourServices: {
    title: "Our Services",
    desc:
      "As a contracting company we provide the service of supplying, installing, commissioning and startup of all electromechanical systems through high skilled engineers including but not limited to the following.",
  },
};

export const navData = [
  { name: "Home", url: "/" },
  { name: "About Us", url: "/about-us" },
  {
    name: "Our Services",
    dropdown: true,
    submenu: [
      { name: "Service 1", url: "/service1" },
      { name: "Service 2", url: "/service2" },
    ],
  },
  { name: "Projects", url: "/projects" },
  { name: "Media Center", url: "/media-center" },
  { name: "Contact Us", url: "/contact-us" },
];

export const aboutUsData = {};

export const contactUs = {};
