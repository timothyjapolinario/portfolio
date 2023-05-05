import WordCarousel from "./WordCarousel";
const words = ["Hello", "こんにちは", "안녕하세요", "Kamusta"];
const Introduction = () => {
  return (
    <div className="text-white text-[5vh]">
      <div>
        Saying <WordCarousel words={words} />
      </div>
      <div>
        <span className="text-[#00a767] font-bold">Timothy</span>, Frontend and
        Backend Developer.
      </div>
      <p className="text-[3vh] text-gray-600">
        I code and program the design of a website mainly with React and Develop
        backend with Express.
      </p>
      <div className="mt-[20vh] pr-[10vw] w-full flex items-end justify-end">
        <div className="w-[16vh] h-[16vh] text-[10vh] border-gray-600 border-s-8 border-e-8 rounded-full text-center animate-bounce">
          ⇓
        </div>
      </div>
    </div>
  );
};

export default Introduction;
