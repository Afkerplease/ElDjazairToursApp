import React, { useState } from "react";
import "./help.scss";
const faqs = [
  {
    question: "why i can't book a tour ? ",
    answer: "To book a tour , you need to be connected with an account",
  },
  {
    question: "Where can I find my tour bookings ?",
    answer: 'You can find your tours booking  in your Profile  "my bookings".',
  },
  {
    question: "How do I contact customer support?",
    answer:
      'You can contact customer support through the "Contact Us" page or by emailing ElDjazairTours.com',
  },
  {
    question: "What is your privacy policy?",
    answer: 'you can find our privacy policy in the footer "Our Privacy policy',
  },
];

function Help() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="help-page">
      <h1>Help & FAQ</h1>
      <div className="faqs">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="faq-icon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Help;
