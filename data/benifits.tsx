import {
  FiDollarSign,
  FiBarChart2,
  FiPieChart,
  FiShield,
  FiUser,
  FiBriefcase,
  FiLock,
  FiTrendingUp,
  FiTarget,
} from "react-icons/fi";

import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
  {
    title: "No Surge, No Surprises",
    description:
      "Say goodbye to unpredictable fares. With Meshwar, the price you see is the price you pay — always.",
    bullets: [
      {
        title: "Clear Pricing",
        description: "Flat-rate trips, even during peak hours.",
        icon: <FiDollarSign size={26} />,
      },
      {
        title: "Real-Time Estimates",
        description: "Get fare previews before you book.",
        icon: <FiBarChart2 size={26} />,
      },
      {
        title: "No Hidden Fees",
        description: "What you see is what you pay — no small print.",
        icon: <FiPieChart size={26} />,
      },
    ],
    imageSrc: "/images/home/pure-quality.jpeg", // Replace with your real image
  },
  {
    title: "Your Comfort, Always On",
    description:
      "Every Meshwar ride comes with air conditioning, guaranteed — because your ride should be cool in every sense.",
    bullets: [
      {
        title: "Guaranteed A/C Cars",
        description: "Every car, every ride, every time.",
        icon: <FiShield size={26} />,
      },
      {
        title: "Trained Drivers",
        description: "Our partners prioritize comfort and courtesy.",
        icon: <FiUser size={26} />,
      },
      {
        title: "Modern Fleet",
        description: "Regularly maintained, comfortable cars you can rely on.",
        icon: <FiBriefcase size={26} />,
      },
    ],
    imageSrc: "/images/home/safe-calm.jpeg", // Replace with your real image
  },
  {
    title: "Every Ride, Fully Recorded",
    description:
      "Your safety matters. All rides are audio and video recorded — and you can access them with a private link.",
    bullets: [
      {
        title: "In-Ride Recording",
        description: "Cameras inside every vehicle for full trip visibility.",
        icon: <FiLock size={26} />,
      },
      {
        title: "Private Viewing Links",
        description:
          "Review your ride, share with others, or just feel secure.",
        icon: <FiTrendingUp size={26} />,
      },
      {
        title: "Accountability First",
        description: "We hold ourselves and drivers to the highest standard.",
        icon: <FiTarget size={26} />,
      },
    ],
    imageSrc: "/images/home/meshwar-safety-first.jpeg", // Replace with your real image
  },
];
