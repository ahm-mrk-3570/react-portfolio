import About from "../components/Home/About";
import Comments from "../components/Home/Comments";
import DevelopmentDetail from "../components/Home/DevelopmentDetail";
import GetInTouch from "../components/Home/GetInTouch";
import Introduction from "../components/Home/Introduction";
import Samples from "../components/Home/Samples";
import Skills from "../components/Home/Skills";

const HomePage = () => {
  return (
    <>
      <title>AHM</title>
      <Introduction />
      <About />
      <Skills />
      <Samples />
      <Comments />
      <GetInTouch />
      <DevelopmentDetail />
    </>
  );
};

export default HomePage;
