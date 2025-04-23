"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { BiMinus, BiPlus } from "react-icons/bi";

import SectionTitle from "../general/SectionTitle";
import { faqs } from "@/data/faq";

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-10 lg:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column */}
          <div className="lg:w-1/2">
            <p className="hidden lg:block text-foreground-accent">FAQ&apos;S</p>
            <SectionTitle>
              <h2 className="my-3 !leading-snug lg:max-w-sm text-center lg:text-left">
                Frequently Asked Questions
              </h2>
            </SectionTitle>
            <p className="lg:mt-10 text-foreground-accent text-center lg:text-left">
              Ask us anything!
            </p>
            <a
              href="mailto:info@meshwareg.com"
              className="mt-3 block text-xl lg:text-4xl text-primary font-semibold hover:underline text-center lg:text-left"
            >
              info@meshwareg.com
            </a>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2 border-b">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-7">
                <Disclosure defaultOpen={index === 0}>
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex items-center justify-between w-full px-4 pt-7 text-lg text-left border-t">
                        <span className="text-2xl font-semibold">
                          {faq.question}
                        </span>
                        {open ? (
                          <BiMinus className="w-5 h-5 text-primary" />
                        ) : (
                          <BiPlus className="w-5 h-5 text-primary" />
                        )}
                      </DisclosureButton>
                      <DisclosurePanel className="px-4 pt-4 pb-2 text-foreground-accent">
                        {faq.answer}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
