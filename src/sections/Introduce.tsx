import Introduction from "../components/Introduction";
import PhoneComponent from "../components/PhoneComponent";
import homeLogo from "../assets/icons8-home.svg";
import SectionIndicator from "../components/SectionIndicator";
const Introduce = () => {
  return (
    <div className="flex min-h-screen flex-col md:flex-row gap-[6vw] p-6 ">
      <div>
        <PhoneComponent />
      </div>
      <div className="flex flex-col">
        <SectionIndicator sectionTitle="INTRODUCTION" iconPath={homeLogo} />
        <Introduction />
      </div>
    </div>
  );
};

export default Introduce;
