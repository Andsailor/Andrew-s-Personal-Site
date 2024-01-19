import { Routes, Route } from "react-router-dom";

import { Header } from "./components/components";

import { MainPage, ResumePage } from "./pages/pages";

import "./App.scss";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </div>
  );
}

export default App;
