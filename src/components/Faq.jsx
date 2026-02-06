import { useState } from "react";

const faqs = [
  {
    question: "How do I book a service?",
    answer:
      "Browse available services, select the one you need, choose a suitable date, and confirm your booking. You’ll receive a confirmation once it’s completed.",
  },
  {
    question: "Are the service providers verified?",
    answer:
      "Yes. All service providers are verified before being listed to ensure quality, reliability, and professionalism.",
  },
  {
    question: "Can I cancel or reschedule a booking?",
    answer:
      "Yes, you can cancel or reschedule your booking from your dashboard. Cancellation policies may vary depending on the service.",
  },
  {
    question: "How is the service price determined?",
    answer:
      "Prices are set by service providers based on service type, complexity, and duration. The final price is shown before confirmation.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We support multiple payment options, including cash on delivery and digital payments, depending on the service.",
  },
  {
    question: "What if I’m not satisfied with the service?",
    answer:
      "You can contact our support team, and we’ll work with the service provider to resolve the issue as quickly as possible.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto py-4">
      <h2 className="text-5xl font-bold pb-5 bg-linear-to-r from-blue-400 to-blue-900 
          bg-clip-text text-transparent">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-left font-medium"
            >
              <span>{faq.question}</span>
              <span className="text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
