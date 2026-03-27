import { FaRegLightbulb, FaPeopleGroup, FaRegHandshake } from "react-icons/fa6";
import { IoCheckmarkOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { LuSettings } from "react-icons/lu";

export const homeData = {
  aboutUs: {
    title: "About Us",
    desc:
      "ICE is the exclusive agent of Samjung Tech for HVAC products special Absorption Chillers, also is professional calibers in all electromechanical disciplines for both contracting sectors, services, maintenance. Every person in the company has a luminous history of working in the biggest contracting firms in Egypt. Despite the company young age but we have our own vision which qualifies us to carry out our works skillfully and in a professional manner.",
  },
  ourWork: {
    title: "OUR WORK",
    desc:
      "Our professionals will perform diagnostic tests, fluid flush and fills, engine replacement, oil changes, and total vehicle overhauls.",
  },
  ourServices: {
    title: "Our Services",
    desc:
      "As a contracting company we provide the service of supplying, installing, commissioning and startup of all electromechanical systems through high skilled engineers including but not limited to the following.",
  },
  mainCarousel: [
    {
      id: 1,
      src: "https://images.pexels.com/photos/2383650/pexels-photo-2383650.jpeg",
      alt: "Slide 1",
      title: "Slide 1 Title",
      description: "This is a description for Slide 1.",
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg",
      alt: "Slide 2",
      title: "Slide 2 Title",
      description: "This is a description for Slide 2.",
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/4956920/pexels-photo-4956920.jpeg",
      alt: "Slide 3",
      title: "Slide 3 Title",
      description: "This is a description for Slide 3.",
    }
  ],
  workCarousel: [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/2383650/pexels-photo-2383650.jpeg',
      content: 'Lotus club (Wadi Degla)–Sport Caféز'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/2383650/pexels-photo-2383650.jpeg',
      content: 'Lotus club (Wadi Degla)–Sport Caféز'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/2383650/pexels-photo-2383650.jpeg',
      content: 'Lotus club (Wadi Degla)–Sport Caféز'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/2383650/pexels-photo-2383650.jpeg',
      content: 'Lotus club (Wadi Degla)–Sport Caféasd'
    }
  ],
  servicesCard: [
    {
      id: 1,
      title: "Service 1",
      description: "Samsung’s reliable technology and people",
      imageUrl: "https://images.pexels.com/photos/2383650/pexels-photo-2383650.jpeg",
      link: "/service1"
    },
    {
      id: 2,
      title: "Service 2",
      description: "we provide Electromechanical contracting services",
      imageUrl: "https://images.pexels.com/photos/2383650/pexels-photo-2383650.jpeg",
      link: "/service2"
    },
    {
      id: 3,
      title: "About Us",
      description: "we provide operation and maintenance services",
      imageUrl: "https://images.pexels.com/photos/2383650/pexels-photo-2383650.jpeg",
      link: "/about-us"
    }
  ]
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

export const aboutUsData = {
  section1: {
    title: "About us",
    desc:
      "ICE is the exclusive agent of Samjung Tech for HVAC products special Absorption Chillers, also is professional calibers in all electromechanical disciplines for both contracting sectors, services, maintenance. Every person in the company has a luminous history of working in the biggest contracting firms in Egypt. Despite the company young age but we have our own vision which qualifies us to carry out our works skillfully and in a professional manner.",
  },
  section2: {
    title: "Ice Mission",
    desc:
      "Our major goals in ICE for Contracting & Engineering is to be one of the best MEP companies in EGYPT through focusing on this activity and the specialization and innovation, and follow up all technical and scientific evolution in this section of MEP work to satisfy all customers of the following consultants, main contractors, owners, clients. So we aim to achieve the following:",
    cards: [
      { icon: <AiOutlineLike />, title: "Customer Satisfaction" },
      { icon: <FaStar />, title: "High Quality Equipment and Execution" },
      { icon: <IoCheckmarkOutline />, title: "Success & Cooperation" },
      { icon: <FaRegLightbulb />, title: "Sustainability through Innovation" },
    ],
  },
  section3: {
    title: "Our Team",
    members: [
      {
        name: "Ahmed Helal",
        title: "Managing Director MD",
        mob: "0122 79 00 421",
        email: "ahmed.helal@ICE-infintiy.com",
        experience:
          "16 years in MEP in project execution and Projects management. He has been involved in various Projects in all electromechanical sectors for building types admin, hotels, industrial, healthcare, etc.",
        avatar: "avatar.jpg",
      },
      {
        name: "Ahmed Helal",
        title: "Managing Director MD",
        mob: "0122 79 00 421",
        email: "ahmed.helal@ICE-infintiy.com",
        experience:
          "16 years in MEP in project execution and Projects management. He has been involved in various Projects in all electromechanical sectors for building types admin, hotels, industrial, healthcare, etc.",
        avatar: "avatar.jpg",
      },
      {
        name: "Ahmed Helal",
        title: "Managing Director MD",
        mob: "0122 79 00 421",
        email: "ahmed.helal@ICE-infintiy.com",
        experience:
          "16 years in MEP in project execution and Projects management. He has been involved in various Projects in all electromechanical sectors for building types admin, hotels, industrial, healthcare, etc.",
        avatar: "avatar.jpg",
      },
    ],
  },
};

// src/data.js

export const service1Data = {
  pageHeader: "Samjung Tech",
  section1: {
    title: "A company with Samsung’s reliable technology and people",
    description: `A company with Samsung’s reliable technology and people.
    
    Samjung Tech has been growing and developing into a leading company
    since it separated from Samsung group in January 2000. On the basis of
    its abundant experience and high technologies, Samjung Tech has
    expanded its businesses into the various fields such as refrigeration
    & air conditioning system, parking system, platform screen doors
    system, construction, and all kinds of facility construction works.
    Samjung Tech comprises headquarters in Seoul, five nationwide branches
    located in metropolitans, and factories and research institutes
    established in Gimpo and Changwon, Korea. Through close collaboration
    of each part, Samjung Tech is willing to satisfy customers. Also
    Samjung Tech provides its top-notch products for foreign customers
    through overseas agents network worldwide.`,
  },
  section2: {
    title: "Samjung Tech's competitiveness",
    cards: [
      {
        index: "1",
        title: "Building up reliability with customers",
        desc:
          "Succeeding to manpower and the technology from Samsung Heavy Industries, we have maintained the good reputation as a reliable company.",
        icon: <FaRegHandshake />,
      },
      {
        index: "2",
        title: "Innovative technology",
        desc:
          "We acquired lots of intellectual properties by developing innovative technology and preoccupied the market prior to other competitors.",
        icon: <FaRegLightbulb />,
      },
      {
        index: "3",
        title: "Synergy from combining manufacturing and construction",
        desc:
          "It has been a leading company shortening the time limit for delivery, improving quality of products, and saving the cost from combining equipment manufacturing and construction.",
        icon: <LuSettings />,
      },
      {
        index: "4",
        title: "Outstanding human resources and organization",
        desc:
          "Most of the employees have job experience for a long time. We take absolutely advantageous position over accumulated technology, know-how, skillfulness, and organization.",
        icon: <FaPeopleGroup />,
      },
    ],
  },
};

export const service2Data = {
  pageHeader: "Electromechanical",
  section: {
    title: "Electromechanical",
    items: [
      {
        image: "hvac.jpg", // Path to the image
        alt: "Profile",
        title: "HVAC",
        description: `Based on the regulations of ASHRAE, SMACNA, ARI, ASME, ASTM
        …Etc. Standards we have the capability of implementing heating,
        ventilation and air conditioning systems for both chilled water
        and DX systems including VAV, CAV, VRF, CCD, FCU, RTU,
        PackageUnits, Etc. for various building types admin, hotels,
        industrial, healthcare, etc.`,
      },
      {
        image: "lightworks.jpg", // Path to the image
        alt: "Profile",
        title: "Electric works",
        description: `Electric power works, lighting, earthling, etc. Are all covered in our electrical department based on local and international codes like IEC, NEC, NEMA…etc. In this regard we give special consideration to safety for both human and equipment by using high quality materials for cables, MCC panels, lighting fixtures …etc. To the extent that we always give an option to the client to make thermal imaging to all high load MCC panel feeding critical equipment to assure proper installation and operation.`,
      },
      {
        image: "light-current.jpg", // Path to the image
        alt: "Profile",
        title: "Light Current",
        description: `Our light current team is specialized in Fire Alarm, Public Address, CCTV, IPTV, MATV and BMS Systems in addition to Access Control & Time Attendance System, Security Gate Systems and Active Switching Equipment. If required, we can go further than that by converting the building to a smart interactive building by adding many features of automatic and remote controls and applying smart features.`,
      },
      {
        image: "chillers.jpg", // Path to the image
        alt: "Profile",
        title: "Absorption Chiller",
        description: `ICE is the exclusive agent of Samjung Tech for HVAC products special Absorption Chillers, Originally Samjung Tech is company with Samsung’s reliable technology but it separated from Samsung group in January2000. Now Samjung Tech has been growing and developing into a leading company, On the basis of its abundant experience and high technologies, Samjung Tech has expanded its businesses into the various fields such as refrigeration &air-conditioningsystem, parking system, platform screen doors system, construction, and all kinds of facility construction works`,
      },
    ],
  },
};

// Data.js

export const projectData = {
  intro: {
    title: "Our Projects",
    desc: "We take pride in delivering high-quality construction projects that meet our clients’ expectations. Explore some of our completed and ongoing works.",
  },

  projectsSection: {
    title: "Featured Projects",
    desc: "A showcase of residential, commercial, and industrial construction projects executed with precision and care.",
  },

  projects: [
    {
      title: "Skyline Towers",
      description: "A modern residential high-rise featuring luxury apartments and sustainable building practices.",
      image: "https://images.pexels.com/photos/3199933/pexels-photo-3199933.jpeg", // Place the image in src/Assets/
      link: "#",
    },
    {
      title: "Greenfield Mall",
      description: "A commercial mall with state-of-the-art architecture, eco-friendly design, and ample parking space.",
      image: "https://images.pexels.com/photos/3199933/pexels-photo-3199933.jpeg",
      link: "#",
    },
    {
      title: "Sunset Villas",
      description: "A premium residential villa project with private gardens, pools, and contemporary interiors.",
      image: "https://images.pexels.com/photos/3199933/pexels-photo-3199933.jpeg",
      link: "#",
    },
    {
      title: "Riverside Offices",
      description: "A commercial office building with panoramic river views, modern amenities, and sustainable construction.",
      image: "https://images.pexels.com/photos/3199933/pexels-photo-3199933.jpeg",
      link: "#",
    },
    {
      title: "Mountain Retreat Resort",
      description: "A luxury resort built on mountainous terrain, blending nature with modern construction techniques.",
      image: "https://images.pexels.com/photos/3199933/pexels-photo-3199933.jpeg",
      link: "#",
    },
    {
      title: "City Center Renovation",
      description: "A large-scale urban renovation project improving public spaces and infrastructure for the city center.",
      image: "https://images.pexels.com/photos/3199933/pexels-photo-3199933.jpeg",
      link: "#",
    },
  ],
};

export const mediaData = {
  intro: {
    title: "Media Center",
    desc: "Explore our gallery and videos highlighting our construction projects and milestones.",
  },
  photos: [
    { title: "Skyline Towers Progress", image: "https://images.pexels.com/photos/36339294/pexels-photo-36339294.jpeg" },
    { title: "Greenfield Mall Completion", image: "https://images.pexels.com/photos/4993502/pexels-photo-4993502.jpeg" },
    { title: "Sunset Villas Exterior", image: "https://images.pexels.com/photos/36335242/pexels-photo-36335242.jpeg" },
    { title: "Riverside Offices Interior", image: "https://images.pexels.com/photos/410730/pexels-photo-410730.jpeg" },
    { title: "Mountain Retreat Resort", image: "https://images.pexels.com/photos/990093/pexels-photo-990093.jpeg" },
    { title: "Mountain Retreat Resort", image: "https://images.pexels.com/photos/7430018/pexels-photo-7430018.jpeg" },
  ],
  videos: [
    { title: "Skyline Towers Timelapse", src: "avatar.jpg" },
    { title: "Greenfield Mall Construction", src: "avatar.jpg" },
  ],
};

export const contactData = {
  heading: "Contact Us",
  companyInfoTitle: "Company's info",
  contactDetails: {
    address: "Building No.6, intersection of 306St. with 307 St, New Maadi, Cairo–Egypt",
    poBox: "11931",
    phone: {
      tel: "(+202) 25176338",
      telLink: "tel:+20225176338",
    },
    email: {
      emailAddress: "info@ice-infinity.com",
      emailLink: "mailto:info@ice-infinity.com",
    },
  },
};
