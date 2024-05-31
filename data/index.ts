export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Full-Stack Development & Collaboration",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Connecting with Others",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to develop",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Digital Product Passport",
    description: "What's New",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Eslando Digital Product Passport",
    des: "Addressing the challenges associated with recycling processes and contribute to a more sustainable future by providing an efficient and transparent platform for managing product information.",
    img: "/eslandoproj.png",
    iconLists: ["/re.svg", "/next.svg"],
    link: "https://github.com/INFINITYX00/eslando",
  },
  {
    id: 2,
    title: "Sprout- Parenthood App",
    des: "Sprout, your comprehensive mobile companion for navigating the joys and challenges of parenthood. Designed with the vision of fostering growth and camaraderie among parents.",
    img: "/sprout.png",
    iconLists: ["/next.svg", "/tail.svg", "/re.svg"],
    link: "https://github.com/INFINITYX00/Sprout",
  },
  {
    id: 3,
    title: "NexID Digital Product Passport",
    des: "Provide advanced tracking and management systems to enhance transparency and sustainability in the hardware and tools industry.",
    img: "/NexID.png",
    iconLists: ["/next.svg", "/tail.svg", "/re.svg"],
    link: "https://github.com/INFINITYX00/NexID",
  },
  {
    id: 4,
    title: "Airbnb Mobile Site Clone",
    des: "Recreated the Airbnb mobile website using only HTML and CSS",
    img: "/airbnb.png",
    iconLists: [],
    link: "https://github.com/INFINITYX00/AirBnB-mobile",
  },
];

export const testimonials = [
  {
    quote:
      "Stephen your dedication and can-do attitude really shone through, and it was super cool to see how we all came together to make something amazing happen. I'm so grateful to have had you on our team.",
    name: "David Adam Silva",
    title: "Full-Stack Developer",
  },
  {
    quote:
      "You’ve absolutely nailed everything you’ve done during our project Stephen, it’s been such a pleasure to work with you! 🙌",
    name: "Holly Massey",
    title: "Creative Problem Solver Building Web Solutions",
  },
];

export const companies = [
  {
    id: 1,
    name: "School of Code",
    img: "/socimg.png",
    nameImg: "soc2.png",
  },
  {
    id: 2,
    name: "Eslando",
    img: "/eslando_logo.jpeg",
    nameImg: "Eslando-white.png",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Development - School of Code",
    desc: "Undertook a full-time intensive 16-week course focused on full-stack development. During this immersive experience, I learned technologies such as React, Next.js, Node.js, Express, AWS, and Docker.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Front End Development Project - Eslando",
    desc: "Designed and developed mobile Digital Product Passport for use in the fashion industry, made using Next.js.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Full Stack Development Project - NexID",
    desc: "Designing and developing a Digital Product Passport for use in the tools and hardware industry, made using Next.js.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
