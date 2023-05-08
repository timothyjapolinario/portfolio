import SectionIndicator from "../components/SectionIndicator";
import projectLogo from "../assets/menu-icons/projects-inactive.png";
const Projects = () => {
  return (
    <div className="h-screen text-white">
      <SectionIndicator sectionTitle="PROJECTS" iconPath={projectLogo} />
    </div>
  );
};
export default Projects;
