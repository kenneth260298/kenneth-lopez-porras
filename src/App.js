import { Route, Routes } from "react-router";
import { NavBar } from "./layout/NavBar";
import { ContactView } from "./views/ContactView";
import { HomeView } from "./views/HomeView";
import { ProjectsView } from "./views/ProjectsView";
import { ResumeView } from "./views/ResumeView";

export const App = () => {

  return (
    <div className="overflow-hidden">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/projects" element={<ProjectsView />} />
        <Route path="/resume" element={<ResumeView />} />
        <Route path="/contact" element={<ContactView />} />
      </Routes>
    </div>
  );
}
