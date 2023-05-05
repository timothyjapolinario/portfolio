import { useEffect, useState } from "react";
import "./WordCarousel.css";
interface WordCarouselProps {
  words: string[];
}
const WordCarousel = (props: WordCarouselProps) => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (wordIndex === props.words.length - 1) {
        setWordIndex(0);
      } else {
        setWordIndex(wordIndex + 1);
      }
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [wordIndex]);
  return (
    <span key={wordIndex} className="animate-fade w-[100px]">
      {props.words[wordIndex]}
    </span>
  );
};

export default WordCarousel;
