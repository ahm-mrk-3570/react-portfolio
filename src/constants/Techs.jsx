import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const techs = {
    html : {
      name: "Html",
      icon: <FaHtml5 color="orange" size={25} />,
    },
    css: {
      name: "Css",
      icon: <FaCss3 color="#00bcff" size={25} />,
    },
    js: {
      name: "Javascript",
      icon: <FaJs size={25} color="yellow" />,
    },
    react: {
      name: "React",
      icon: <FaReact color="#00bcff" size={25} />,
    },
    tailwindcss: {
      name: "Tailwindcss",
      icon: <RiTailwindCssFill color="#00bcff" size={25} />,
    },
};

export default techs;