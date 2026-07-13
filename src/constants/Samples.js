import ToDoApp from '../assets/images/ToDoApp-1.png';
import Shop from '../assets/images/Shop-1.png';
import Weather from '../assets/images/weather-1.png';
import TextToSpeech from '../assets/images/TextToSpeech.png';


import techs from "./Techs";


const { html, css, js, react, tailwindcss, supabase_database } = techs;

const sampleWorks = [
  {
    title: "Store Website",
    about: "Store website with all features like authentication, signup-signin, cart, favorite, orders",
    link: "https://ahm-mrk-3570.github.io/react-ecommerce-project",
    image: Shop,
    tech: [react, css, js, supabase_database]
  },
  {
    title: "ToDoApp Manager",
    about: "Sign up and manage your tasks with this MiniApp, created by React and TailwindCss. It has light and dark theme. First sign up and use it",
    link: "https://ahm-mrk-3570.github.io/react-todo-mini-app",
    image: ToDoApp,
    tech: [ html, css, js, react, tailwindcss ]
  },{
    title: "Weather Status",
    about: "The weather status web application to show the weather situation in the hours of day or the days in a week using openWeatherMap API",
    link: "https://ahm-mrk-3570.github.io/js-weather",
    image: Weather,
    tech: [ html, css, js ]
  },{
    title: "Text To Speech",
    about: "Text to Speech is a web application that converts written text into natural speech using the Web Speech API. Users can enter text, choose from available voices, and listen to the generated audio instantly. The project focuses on creating a simple, responsive, and user-friendly interface while demonstrating JavaScript interaction with browser APIs.",
    link: "https://ahm-mrk-3570.github.io/js-text-to-speech",
    image: TextToSpeech,
    tech: [ html, css, js ]
  },
]

export default sampleWorks;