import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  peergroup,
  bangkit,
  keelola,
  osi,
  js,
  simrs,
  smartfarm,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Peer Group ID",
    icon: peergroup,
    iconBg: "#383E56",
    date: "May 2022 - Jul 2022",
    points: [
      // i develop this website with codeigniter 4, jquery, and bootstrap 4, give me point for this project
      "Developed and maintained web applications using the CodeIgniter 4 framework, showcasing proficiency in PHP and MVC architecture, ensuring efficient and scalable code.",
      "Utilized jQuery and Bootstrap to create responsive and visually appealing user interfaces, enhancing user experience and interactivity on web applications",
      "Demonstrated strong problem-solving skills, resolving complex technical issues and optimizing website performance, leading to improved functionality and user satisfaction",
    ],
  },
  {
    title: "Mobile Path Student",
    company_name: "Bangkit Academy",
    icon: bangkit,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Jul 2023",
    points: [
      "Gained strong programming skills in Kotlin, a modern and versatile language for Android app development, demonstrating the ability to write clean and efficient code",
      "Acquired hands-on experience in building Android applications using Android Studio, including activities, fragments, and user interfaces, laying the foundation for creating robust mobile apps.",
      " Developed a deep understanding of Jetpack Compose, Google's modern UI toolkit for building native Android user interfaces, and applied it to create visually appealing and interactive app interfaces.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Keelola",
    icon: keelola,
    iconBg: "#383E56",
    date: "Jul 2022 - Present",
    points: [
      "Developed and maintain Hospital Information System using Next.js and Strapi CMS",
      "Developed and maintain Cloth Factory ERP using Next.js and Strapi CMS",
      "Developed and maintain pharmaceutical wholesaler ERP using Next.js and Strapi CMS",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Web Developer",
    company_name: "Oemah Solution Indonesia",
    icon: osi,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Present",
    points: [
      "Leveraged Next.js to build high-performance and SEO-friendly web applications, demonstrating proficiency in server-side rendering and client-side routing for an enhanced user experience.",
      "Successfully integrated GraphQL into web applications, allowing for efficient data retrieval and minimizing over-fetching, which improved overall application performance.",
      "Worked collaboratively with cross-functional teams, including backend developers and designers, to ensure seamless integration of frontend components and deliver visually appealing and user-friendly web applications.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ERP Apotek",
    description:
      "Aplikasi ERP Apotek yang memudahkan pengguna untuk mengelola data obat, transaksi, dan laporan keuangan.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: js,
    source_code_link: "https://github.com/ryanindrjaya/js-staging",
  },
  {
    name: "SIMRS",
    description:
      "Aplikasi SIMRS yang memudahkan pengguna untuk mengelola data pasien, dokter, dan laporan data pasien.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "strapi",
        color: "text-violet-500",
      },
      {
        name: "antd",
        color: "blue-text-gradient",
      },
    ],
    image: simrs,
    source_code_link: "https://github.com/ryanindrjaya/simrs-demo/tree/main",
  },
  {
    name: "OS Smartfarm",
    description:
      "Aplikasi dashboard monitoring dan controling untuk petani yang memudahkan pengguna untuk mengelola data tanaman, sensor, dan laporan data tanaman.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "graphql",
        color: "text-violet-500",
      },
      {
        name: "chakra-ui",
        color: "text-cyan-500",
      },
    ],
    image: smartfarm,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
