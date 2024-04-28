import SectionIndicator from "../components/SectionIndicator";
import projectLogo from "../assets/menu-icons/projects-inactive.png";
import prjs from "../../Projects.json";
import lngs from "../../Languages.json";
import Project, { Language, ProjectType } from "../components/Project";
const getLanguage = (key: string): Language => {
  if (key === "react") {
    return lngs["react"];
  }
  if (key === "javascript") {
    return lngs["javascript"];
  }
  if (key === "typescript") {
    return lngs["typescript"];
  }
  if (key === "html") {
    return lngs["html"];
  }
  if (key === "css") {
    return lngs["css"];
  }
  if (key === "python") {
    return lngs["python"];
  }
  if (key === "csharp") {
    return lngs["csharp"];
  }
  if (key === "java") {
    return lngs["java"];
  }
  return {
    name: "Not valid language",
    iconUrl: "",
  };
};
const allProjects: ProjectType[] = prjs.map((prj) => {
  const project: ProjectType = {
    projectName: prj["projectName"],
    languages: prj["languages"].map((lng) => {
      return getLanguage(lng);
    }),
    screenshotLink: prj["screenshotLink"],
    description: prj["description"],
  };
  return project;
});
const Projects = () => {
  return (
    <div className="h-screen text-white">
      <SectionIndicator sectionTitle="PROJECTS" iconPath={projectLogo} />
      <div className="p-4 h-[60vh] rounded-md flex w-full items-center border-2 border-gray-500 border-solid">
        {allProjects.map((prj) => (
          <Project project={prj} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
