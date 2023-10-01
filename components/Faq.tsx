import { useState } from 'react';

// Define an interface for the FAQ data
interface WhyusItem {
  question: string;
  answer: string;
}

function Whyus({ faqData }: { faqData: WhyusItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the answer if it's already open
    } else {
      setActiveIndex(index); // Open the answer
    }
  };

  return (
    <div>
      {/* <h2>Frequently Asked Questions</h2> */}
      <ul>
        {faqData.map((faq, index) => (
          <li key={index}>
            <button className="mb-5 title-font sm:text-2xl text-1xl font-medium text-white cursor-pointer" onClick={() => toggleAnswer(index)}>{faq.question}</button>
            {activeIndex === index && <p className='mb-5' >{faq.answer}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Whyus;
