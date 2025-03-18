// FAQComponent.tsx
import React, { useState } from 'react';
import './FAQ.scss';
import { ChevronDown } from 'lucide-react';


// Define the structure of a FAQ item
interface FAQItem {
  question: string;
  answer: string;
}

// Sample FAQ data
const faqData: FAQItem[] = [
  {
    question: "What is a hackathon?",
    answer: "A hackathon is an event where programmers, designers, and others collaborate intensively on software projects over a short period, typically 24-48 hours. Participants work in teams to create innovative solutions to challenges."
  },
  {
    question: "Who can participate?",
    answer: "HackDartmouth is open to all college students, regardless of major or experience level. Whether you're a beginner or an experienced developer, you're welcome to join!"
  },
  {
    question: "How do teams work?",
    answer: "Teams typically consist of 2-4 members. You can form your own team in advance or find teammates during the team formation activities at the beginning of the event."
  },
  {
    question: "What should I bring?",
    answer: "You should bring your laptop, charger, any personal items you need, and your student ID. Consider bringing a change of clothes and toiletries if you plan to stay overnight."
  },
  {
    question: "When is the deadline to register?",
    answer: "Registration typically closes one week before the event. Check the official website for the exact deadline date."
  },
  {
    question: "Will there be activities or workshops?",
    answer: "Yes! Throughout the hackathon, we'll host various workshops, tech talks, and networking events. These provide opportunities to learn new skills and connect with sponsors and other participants."
  },
  {
    question: "How do I travel to HackDartmouth?",
    answer: "HackDartmouth is held on Dartmouth College campus in Hanover, NH. We offer travel reimbursements for participants coming from far away. Check our website for details on transportation options and reimbursement policies."
  },
  {
    question: "What are the prizes?",
    answer: "Prizes include cash awards, tech gadgets, opportunities for internships, and more. Specific prize categories and amounts will be announced closer to the event date."
  },
  {
    question: "How can I receive accommodations?",
    answer: "We provide sleeping areas within the venue. If you require special accommodations, please email us in advance and we'll do our best to assist you."
  }
];

// Accordion Item Component
const AccordionItem: React.FC<{
  item: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}> = ({ item, isOpen, onClick }) => {
  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <div className="accordion-header" onClick={onClick}>
        <span>{item.question}</span>
        <div className={`accordion-icon ${isOpen ? 'rotated' : ''}`}>
          <ChevronDown size={24} />
        </div>
      </div>
      <div className="accordion-content">
        <p>{item.answer}</p>
      </div>
    </div>
  );
};


const FAQ: React.FC = () => {
  const [openItemIndices, setOpenItemIndices] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenItemIndices(prev => {
      // If index is already in the array, remove it (close accordion)
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } 
      // Otherwise add it to the array (open accordion)
      else {
        return [...prev, index];
      }
    });
  };

  // Split FAQ items into two columns
  const leftColumnItems = faqData.slice(0, Math.ceil(faqData.length / 2));
  const rightColumnItems = faqData.slice(Math.ceil(faqData.length / 2));

  return (
    <section className="faq" id="faq">
      <div className="faq-container">
        <h1>FAQ</h1>
        <div className="faq-columns">
          <div className="faq-column">
            {leftColumnItems.map((item, index) => (
              <AccordionItem
                key={index}
                item={item}
                isOpen={openItemIndices.includes(index)}
                onClick={() => toggleAccordion(index)}
              />
            ))}
          </div>
          <div className="faq-column">
            {rightColumnItems.map((item, index) => (
              <AccordionItem
                key={index + leftColumnItems.length}
                item={item}
                isOpen={openItemIndices.includes(index + leftColumnItems.length)} 
                onClick={() => toggleAccordion(index + leftColumnItems.length)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;