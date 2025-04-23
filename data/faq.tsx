import { IFAQ } from "@/types";

export const faqs: IFAQ[] = [
  {
    question: "When is the launch?",
    answer: "Sooner than you think. Stay tuned — we're almost ready to ride!",
  },
  {
    question: "How can I apply as a driver?",
    answer: (
      <>
        You can apply through this form:{" "}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSd_zeQZifS2GsqWQn55cX4S55ACkkwg-vYcUbpySyokDJh4CA/viewform"
          className="text-primary underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Driver Application Form
        </a>
      </>
    ),
  },
  {
    question: "How do you maintain vehicle quality?",
    answer:
      "We perform regular checkups every 3 months and ensure weekly car washes, so your rides are always safe and spotless.",
  },
  {
    question: "How do you ensure driver accountability?",
    answer:
      "We monitor every ride in real-time. All drivers undergo background checks every 6 months and drug tests every 3 months.",
  },
  {
    question: "Where will Meshwar operate first?",
    answer:
      "We’re starting with New Cairo (Tagamo3), then expanding to Nasr City and beyond as we grow.",
  },
  {
    question: "When can I book a ride?",
    answer: "Meshwar will be operating daily from 6:00 AM to 12:00 PM.",
  },
];
