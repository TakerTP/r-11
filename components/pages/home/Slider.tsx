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
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768); // Adjust the breakpoint as needed
    };

    // Initial check
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className={`flex bg-[#fff] ${isDesktop ? 'sm:h-[23rem] sm:w-[23rem]' : 'h-[20rem] w-[20rem]'} rounded-[3.5rem] justify-center items-center`}>
      <div className="flex h-[14rem] w-[14rem] border border-white justify-center items-center">
        <img className="h-[14rem]" src={images[currentIndex]} />
      </div>
    </div>
  );
};

export default Slider;
