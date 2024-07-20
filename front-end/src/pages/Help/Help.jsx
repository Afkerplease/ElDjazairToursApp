import React, { useState } from "react";
import "./help.scss";
const faqs = [
  {
    question: "How do I reset my password?",
    answer:
      'To reset your password, go to the login page and click on "Forgot password". Follow the instructions to reset your password.',
  },
  {
    question: "Where can I find my order history?",
    answer:
      'You can find your order history in your account dashboard under "Order History".',
  },
  {
    question: "How do I contact customer support?",
    answer:
      'You can contact customer support through the "Contact Us" page or by emailing ElDjazairTours.com',
  },
  {
    question: "What is your return policy?",
    answer:
      'Our return policy allows you to return items within 30 days of purchase. Please visit our "Return Policy" page for more details.',
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
