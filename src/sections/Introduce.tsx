import Introduction from "../components/Introduction";
import PhoneComponent from "../components/PhoneComponent";
import homeLogo from "../assets/icons8-home.svg";
const Introduce = () => {
  return (
    <div className="flex flex-col md:flex-row gap-[6vw]">
      <div>
        <PhoneComponent />
      </div>
      <div className="flex flex-col">
        <h1 className="flex text-[2vh] mb-[6vh] text-white border-gray-600 border-2 w-fit p-2 rounded-xl">
          <img src={homeLogo} className="h-[3vh]" />
          INTRODUCE
        </h1>
        <Introduction />
      </div>
    </div>
  );
};

export default Introduce;
