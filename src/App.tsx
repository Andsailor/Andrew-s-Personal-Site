import { Routes, Route } from "react-router-dom";

import { Footer, Header } from "./components/components";

import { AboutPage, MainPage, ProjectsPage, ResumePage } from "./pages/pages";

import "./App.scss";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="container-wrapper">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
