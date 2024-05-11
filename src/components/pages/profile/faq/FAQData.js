import React, { useState } from "react";
import Navigationbar from "../../../Navigationbar";
import FAQ from "./FAQ";

function FAQData() {
  const [faqs, setfaqs] = useState([
    {
      question: "Can i change the dimensions of the product",
      answer: "Yes according to your requiremens",
      open: false,
    },
    {
      question: "What are diiferent series of prodcuts  you have available",
      answer:
        "We have the the Reactangle Series, Round Series, the vertical series, the Bowl series,and other products too",
      open: false,
    },
    {
      question:
        "What are yor rates for shipping and how much time it will take for shipping",
      answer:
        "The shipping charges are differnet for differnet prodcuts and it may take upto 3 days for shipping",
      open: false,
    },
    {
      question: "Will i get shipping information?",
      answer: "As soon as the order is shipped.",
      open: false,
    },
    {
      question: "Do you ship outside Maharashtra?",
      answer: "Yes.",
      open: false,
    },
    {
      question: "My order didnt received what am i supppsed to do ",
      answer: "you can contact us or mail us ",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="outer-faq">
      <Navigationbar />
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default FAQData;
