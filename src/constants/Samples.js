import ToDoApp from '../assets/images/ToDoApp-1.png';
import ContactManager from '../assets/images/ContactManager-2.png';
import Shop from '../assets/images/Shop-1.png';
import techs from "./Techs";

const { html, css, js, react, tailwindcss } = techs;

const sampleWorks = [
  {
    title: "ToDoApp Manager",
    about: "Sign up and manage your tasks with this MiniApp, created by React and TailwindCss. It has light and dark theme. First sign up and use it",
    link: "https://github.com/AHMMRK",
    image: ToDoApp,
    tech: [ html, css, js, react, tailwindcss ]
  },{
    title: "Contact Manager",
    about: "I have developed a React-based Contact Management System that features full CRUD (Create, Read, Update, Delete) functionality. The application is integrated with a JSON Server backend to manage data persistence and provides a responsive, professional interface for efficient contact organization.",
    link: "https://github.com/AHMMRK",
    image: ContactManager,
    tech: [ html, css, js, react ]
  },{
    title: "Clothing store",
    about: "I have designed and developed a comprehensive e-commerce platform specialized in the fashion and apparel industry. Although the project is currently focused on the frontend implementation, it features a complete online store architecture, including dynamic product listings, advanced filtering, a functional shopping cart, and a seamless checkout flow. Built with React.js, it delivers a high-performance and fully responsive user experience, encompassing all the essential functionalities of a professional website.",
    link: "https://github.com/AHMMRK",
    image: Shop,
    tech: [ html, css, js, react ]
  },
]

export default sampleWorks;