
import Slider from './Slider'
import React, { useState } from 'react';
import Whyus from '../../Faq';


export const Hero = () => {
  const faqData = [
    {
      question: "Our Mission",
      answer: "Our mission is simple yet ambitious: to harness the power of technology and innovation to solve complex challenges and transform ideas into reality. We strive to be at the forefront of technological advancements, delivering cutting-edge solutions that propel your business forward.",
    },
    {
      question: "What We Offer",
      answer: (
        <div className='text-left'>
          <p className='mb-5'>
            {
              "At TechInno Solution, we offer a wide range of IT services, including:"
            }
          </p>
          <p className='mb-2'>
            {
              "- Web Development: We create dynamic and visually stunning websites tailored to your unique brand and objectives. Our websites are not only aesthetically pleasing but also highly functional and user-friendly."
              
            }
          </p>
          <p className='mb-2'>
            {
              "- App Development: Our mobile app development team specializes in crafting intuitive and feature-rich applications for iOS and Android platforms. We turn your app ideas into engaging digital experiences."
            }
          </p>
          <p className='mb-2'>
            {
              "- IT Consulting: We provide expert guidance and strategic insights to help you make informed technology decisions. Our consultants work closely with you to align IT solutions with your business goals."
            }
          </p>
          <p className='mb-2'>
            {
              "- E-commerce Solutions: We design and develop robust e-commerce platforms that drive sales and enhance customer engagement. Our solutions are scalable and secure, ensuring your online success."
            }
          </p>
          <p className='mb-2'>
            {
              "- Custom Software Development: We build tailor-made software solutions that streamline your business processes, boost productivity, and adapt to your evolving needs."
            }
          </p>
        </div>
      )
    },
    {
      question: "Why Choose Us",
      answer: 
        <div>
          <p>
            {
              "Expertise"
            }
          </p>
          <p>
            {
              "Tailored Solutions"
            }
          </p>
          <p>
            {
              "Innovation"
            }
          </p>
          <p>
            {
              "Competitive Pricing"
            }
          </p>

        </div>
      
    }
    // Add more FAQ items here
  ];

  return (
    <section id="home" className="bg-gray-700 text-white body-font">
      <div className="container mx-auto flex lg:pt-24 md:pt-24 sm:pt-[11.2rem] md:flex-row flex-col items-center">
        <div className="lg:flex-grow flex flex-col mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            TechInno Solution
          </h1>
          <hr className="h-px mt-8 w-1/5 self-center bg-gray-200 border-0 dark:bg-white" />
          
          <div className="flex justify-center items-center bg-gray-700">
            <img className="h-[30rem]" src="" />
            <Slider />
          </div>
          <p className="sm:pr-12 sm:pl-12 pr-20 pl-20 mb-6 leading-relaxed">
            {
              "At TechInno Solution, we are your trusted partner for comprehensive IT solutions that drive innovation, elevate user experiences, and empower businesses to thrive in the digital age."
            }
          </p>
         
        </div>
        
      </div>
        

        
     <div className='px-5 text-center'>
   
      <Whyus faqData={faqData} />
      
    </div>
    </section>
    
  )
}
