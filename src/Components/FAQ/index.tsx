import React, { useState, useCallback, memo, useRef, useEffect } from "react";
import "./FAQ.scss";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    question: "What is a hackathon?",
    answer:
      "A Hackathon is a 24-hour tech oriented event where students can come together to create amazing software and/or hardware projects. Come with an awesome idea, a great team, a positive attitude, or all of the above!",
  },
  {
    question: "Who can participate?",
    answer:
      "Any current college student! No experience necessary: you'll have the chance to pick up new skills from our workshops during the hackathon.",
  },
  {
    question: "How do teams work?",
    answer:
      "You can work on a project on your own, or you can work with a team. While teams can be specified on the application, you won't officially create your team until the event. We hold a team formation social before the hacking begins so it is totally okay to show up even if you don’t know anybody!",
  },
  {
    question: "What should I bring?",
    answer:
      "It is recommended that you bring a computer, chargers, and a pair of headphones. Really anything that will help you feel comfortable ranging from hygiene products to blankets. Food will be provided.",
  },
  {
    question: "When is the deadline to register?",
    answer:
      "The application deadline for Dartmouth students is April 18th, and the deadline for anyone who is not a Dartmouth student is April 12th.",
  },
  {
    question: "Will there be activities or workshops?",
    answer:
      "Yes! Throughout the hackathon, we'll host various workshops, tech talks, and networking events. These provide opportunities to learn new skills and connect with sponsors and other participants.",
  },
  {
    question: "How do I travel to HackDartmouth?",
    answer: (
      <>
        <p>
          There are shuttles from Boston and New York to the Dartmouth Campus
          which can be purchased <a href="https://dartmouthcoach.com/"target="_blank"
            rel="noopener noreferrer"
            className="faq-link">here</a>.
          Unfortunately, due to budget constraints HackDartmouth is unable to
          offer reimbursements for individual travel at this point. However, we
          will update attendees if this changes.
        </p>
      </>
    ),
  },
  {
    question: "What can I win?",
    answer:
      "A panel of judges will decide on the winning hacks based on criteria of creativity, usefulness, technical difficulty, and form. The top prizes are TBA. Previous prizes have included drones, Apple watches, Nintendo switches, bluetooth speakers, and other awesome tech.",
  },
  {
    question: "How can I receive accommodations?",
    answer: (
      <>
        <p>
          Shoot us an email at{" "}
          <a href="mailto:dartmouthhackathon@gmail.com" className="faq-link">
            dartmouthhackathon@gmail.com
          </a>{" "}
          and we'll get back to you as soon as we can!
        </p>
      </>
    ),
  },
  {
    question: "MLH code of conduct?",
    answer: (
      <>
        <p>
          The MLH Code of Conduct can be found on their website,{" "}
          <a
            href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="faq-link"
          >
            here!
          </a>
        </p>
      </>
    ),
  },
  {
    question: "What if I am interested in sponsoring the event?",
    answer: (
      <>
        <p>
          Please reach out to{" "}
          <a href="mailto:dartmouthhackathon@gmail.com">
            dartmouthhackathon@gmail.com
          </a>
          .
        </p>
      </>
    ),
  },
];

const AccordionItem = memo<{
  item: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}>(({ item, isOpen, onClick }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        const contentHeight = contentRef.current.scrollHeight;
        contentRef.current.style.height = `${contentHeight}px`;
      } else {
        contentRef.current.style.height = '0px';
      }
    }
  }, [isOpen]);

  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <div 
        className="accordion-header" 
        onClick={onClick}
        role="button"
        aria-expanded={isOpen}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onClick();
            e.preventDefault();
          }
        }}
      >
        <span>{item.question}</span>
        <div className={`accordion-icon ${isOpen ? "rotated" : ""}`}>
          <ChevronDown size={24} />
        </div>
      </div>
      <div 
        ref={contentRef} 
        className="accordion-content"
        aria-hidden={!isOpen}
      >
        <div className="accordion-content-inner">
          {typeof item.answer === "string" ? <p>{item.answer}</p> : item.answer}
        </div>
      </div>
    </div>
  );
});

const FAQ: React.FC = () => {
  const [openItemIndices, setOpenItemIndices] = useState<number[]>([]);

  const toggleAccordion = useCallback((index: number) => {
    setOpenItemIndices((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        // Only allow one item to be open at a time for better performance
        return [index];
      }
    });
  }, []);

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
                isOpen={openItemIndices.includes(
                  index + leftColumnItems.length
                )}
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
