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
    <div>
      <img className="h-[30rem]" src={images[currentIndex]} />
    </div>
  );
};

export default Slider;
