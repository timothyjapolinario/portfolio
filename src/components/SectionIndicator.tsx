interface SectionIndicatorProps {
  sectionTitle: string;
  iconPath: string;
}
const SectionIndicator = (props: SectionIndicatorProps) => {
  return (
    <h1 className="flex text-[2vh] mb-[6vh] text-white border-gray-600 border-2 w-fit p-2 rounded-xl">
      <img src={props.iconPath} className="h-[3vh]" />
      {props.sectionTitle}
    </h1>
  );
};
export default SectionIndicator;
