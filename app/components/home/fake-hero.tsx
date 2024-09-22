import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@nextui-org/react";
import React from "react";

export default function FakeHomeHeroSection() {
  return (
    <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 items-center min-h-[80vh]">
      {/* Left Section */}
      <section className="flex flex-col items-start gap-6">
        <Button
          className="h-9 overflow-hidden border border-gray-300 bg-gray-50 px-6 py-2 text-sm font-normal text-gray-500"
          endContent={<Icon icon="solar:arrow-right-linear" width={20} />}
          radius="full"
          variant="bordered"
        >
          Seamless Technology Solutions
        </Button>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black">
          We simplify operations <br /> for businesses and individuals.
        </h1>

        <p className="text-lg text-gray-600 max-w-md">
          At Meshwar, we focus on innovative technology to streamline processes
          and enhance experiences, providing reliable, secure, and scalable solutions
          tailored to modern demands.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button className="h-10 w-40 bg-blue-600 text-white" radius="full">
            Get Started Today
          </Button>
          <Button
            className="h-10 w-40 border border-gray-300 text-gray-600"
            endContent={
              <span className="flex h-6 w-6 items-center justify-center bg-gray-300 rounded-full">
                <Icon icon="solar:arrow-right-linear" width={16} />
              </span>
            }
            radius="full"
            variant="bordered"
          >
            Learn More
          </Button>
        </div>
      </section>

      {/* Right Section (Mobile Image) */}
      <div className="flex justify-center">
        {/* Placeholder for Mobile Mockup Image */}
        <img
          src="/identity/logo/blue-logo.png"
          alt="Mobile App Mockup"
          className="max-w-full"
        />
      </div>
    </div>
  );
}
