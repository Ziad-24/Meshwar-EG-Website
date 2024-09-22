import Image from "next/image";
import React from "react";

export default function FakeAboutUsText() {
  return (
    <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 min-h-[65vh]">
      <div className="h-full flex flex-col justify-center">
        <h1 className="text-5xl font-bold mb-6">About Us</h1>
        <p className="text-lg mb-4 text-gray-700">
          Meshwar is a forward-thinking technology company dedicated to
          developing innovative solutions that enhance daily life and streamline
          operations. We specialize in creating user-friendly platforms and
          tools that leverage the latest advancements in technology to meet
          modern demands.
        </p>
        <p className="mb-4 text-gray-700">
          With a commitment to excellence, Meshwar focuses on building
          efficient, secure, and scalable systems that empower businesses and
          individuals alike. Our team brings together expertise in software
          development, data analytics, and user experience to deliver
          cutting-edge products tailored to our clients needs.
        </p>
      </div>
      <div className="flex justify-center items-center h-full">
        <Image
          src="/identity/logo/blue-logo.png"
          alt="Meshwar Logo"
          width={280}
          height={60}
        />
      </div>
    </div>
  );
}
