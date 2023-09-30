import { useState, useEffect } from "react";

const images = [
  "./icons/nextjs.svg",
  "./icons/reactjs.svg",
  "./icons/flutter.svg",
  "./icons/django.svg",
  "./icons/django-rest.svg",
  "./icons/postgres.svg",
  "./icons/nodejs.svg",
  "./icons/expressjs.svg",
  "./icons/firebase.svg",
  "./icons/mongodb.svg",
];

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex bg-[#fff] h-[25rem] w-[25rem] rounded-[3.5rem] justify-center items-center">
      <div className="flex h-[14rem] w-[14rem] border border-white justify-center items-center">
        <img className="h-[14rem]" src={images[currentIndex]} />
      </div>
    </div>
  );
};

export default Slider;
