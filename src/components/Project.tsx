export type Language = {
  name: string;
  iconUrl: string;
};
export type ProjectType = {
  projectName: string;
  languages: Language[];
  screenshotLink: string;
  description: string;
};
type Props = {
  project: ProjectType;
};
const Project = ({ project }: Props) => {
  return (
    <div className="w-full h-full">
      <h1 className="text-4xl text-center w-full mb-4">
        {project.projectName}
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <img src={project.screenshotLink} />
        </div>
        <div>
          <div className="flex w-full justify-between border-y-2 border-[#00a767] py-1">
            {project.languages.map((lang) => (
              <img src={lang.iconUrl} className="h-10" />
            ))}
          </div>
          <div className="mt-4">
            <p>{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
