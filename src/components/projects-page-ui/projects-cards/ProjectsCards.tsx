import { ProjectIconShop } from "./projects-icons/ProjectIconShop.tsx";
import { ProjectIconBook } from "./projects-icons/ProjectIconBook.tsx";
import { ProjectIconWeather } from "./projects-icons/ProjectIconWeather.tsx";
import { ProjectIconTodo } from "./projects-icons/ProjectIconTodo.tsx";
import { ProjectIconLanding } from "./projects-icons/ProjectIconLanding.tsx";

import "./ProjectsCard.scss";

export function ProjectsCards() {
  const projects = [
    {
      title: "<Ezshop/>",
      image: <ProjectIconShop />,
      link: "https://react-fake-store-inky.vercel.app/",
    },
    {
      title: "<We<3Books/>",
      image: <ProjectIconBook />,
      link: "https://book-tracker-pearl.vercel.app/",
    },
    {
      title: "<WeatherApp/>",
      image: <ProjectIconWeather />,
      link: "https://react-weather-app-andsailor.vercel.app/",
    },
    {
      title: "<ToDo/>",
      image: <ProjectIconTodo />,
      link: "https://react-redux-todo-list-lovat.vercel.app/",
    },
    {
      title: "<NFTLanding/>",
      image: <ProjectIconLanding />,
      link: "https://github.com/Andsailor/NFT-responsive-project",
    },
    {
      title: "<GasLanding/>",
      image: <ProjectIconLanding />,
      link: "https://github.com/Andsailor/gas-project",
    },
  ];

  return (
    <div className="projects entrance-animation">
      {projects.map((project, i) => {
        return (
          <a
            target="_blank"
            href={project.link}
            key={i}
            className="projects-card card-view"
          >
            {project.image}
            <h2>{project.title}</h2>
          </a>
        );
      })}
    </div>
  );
}
