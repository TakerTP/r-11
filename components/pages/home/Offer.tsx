import React from "react";
import { useEffect, useState } from "react";

import { Members } from "./info/teamInfo";
import { Offers } from "./info/offerInfo";

export const Offer = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768); // Adjust the breakpoint as needed
    };

    // Initial check
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="text-white body-font bg-gray-900">
      <div
        className={`container px-5 ${
          isDesktop ? "lg:pt-24 md:pt-24 sm:pt-[11.2rem]" : "pt-[11.2rem]"
        } mx-auto`}
      >
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            What We Offer
          </h1>
          <hr className="h-px my-8 w-1/5 self-center bg-gray-700 border-0 dark:bg-gray-200" />
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {
              "Our team is not just a group of developers; we are passionate problem-solvers, creative thinkers, and dedicated professionals committed to turning your vision into reality."
            }
          </p>
        </div>
        <section className="text-gray-400 body-font">
          <div className="container px-5 pb-14 mx-auto ">
            <div className="flex flex-wrap -m-4 justify-center">
              {Offers.map((offer, index) => (
                <div key={index} className="xl:w-1/3 md:w-1/2 p-4 self">
                  <div className="h-full border border-gray-700 border-opacity-75 p-6 rounded-lg">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-green-400 mb-4">
                      <img src={offer.image} />
                    </div>
                    <h2 className="text-lg text-white font-medium title-font mb-2">
                      {offer.title}
                    </h2>
                    <p className="leading-relaxed text-base">
                      {offer.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* <button className="flex mx-auto mt-16 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
              Button
            </button> */}
          </div>
        </section>
      </div>
    </section>
  );
};
