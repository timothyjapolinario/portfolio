import timothyImage from "../assets/timothy.png";
import ContactList from "./ContactList";
const PhoneComponent = () => {
  return (
    <div className="h-screen md:h-full flex flex-1 flex-col rounded-[40px] justify-evenly items-center text-white border-solid border-gray-600 border-4 p-4">
      <div className="flex space-x-5">
        <h1 className="md:text-[3.2vh] font-bold">Timothy</h1>
        <p className="md:text-[2vh]">Fullstack Developer</p>
      </div>
      <img src={timothyImage} className="h-[40vh] rounded-md" />
      <p className="md:text-[3vh]">timothyjapolinario@gmail.com</p>
      <p className="text-xl md:text-[2.7vh]">Base in Nueva Ecija Philippines</p>
      <p className="text-sm md:text-[2vh] text-gray-500">
        © 2022 Timothy. All rights Reserved
      </p>
      <ContactList />
      <button className="bg-[#00a767] md:text-[2vh] w-full py-1 rounded-[1rem] text-black font-bold">
        Hire Me!
      </button>
    </div>
  );
};

export default PhoneComponent;
