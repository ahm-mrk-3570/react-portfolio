import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import MainLayout from "./Layouts/MainLayout";
import { Route, Routes } from "react-router-dom";
import SampleWorks from "./pages/SampleWorks";
import HomePage from "./pages/HomePage";
import { toast, ToastContainer } from "react-toastify";
import { getAllComments } from "./services/CommentService";
import CommentsPage from "./pages/CommentsPage";

function App() {
  const [mode, setMode] = useState(localStorage.getItem("theme")) || "light";
  const [comments, setComments] = useState([]);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await getAllComments();
        setComments(data);
        toast.success("Promise Resived.");
      } catch (e) {
        toast.error("Something went wrong!");
      }
    };

    fetch();
  }, []);

  return (
    <MainLayout
      contextData={{
        mode,
        setMode,
        comments,
        setComments,
        aboutRef,
        projectsRef,
        contactRef,
      }}
    >
      <Header handleScroll={handleScroll} />
      <Routes>
        <Route path="/comments" element={<CommentsPage />} />
        <Route path="/sample-works" element={<SampleWorks />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <ToastContainer />
    </MainLayout>
  );
}

export default App;