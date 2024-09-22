import Link from 'next/link';
import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="text-gray-600">
          Welcome to Meshwar! These Terms and Conditions Terms govern your use of our ride-hailing platform. By using Meshwars services, you agree to abide by these Terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Service Overview</h2>
        <p className="text-gray-600">
          Meshwar provides a ride-hailing service connecting passengers with independent drivers. Meshwar does not directly provide transportation but acts as a facilitator between users and drivers.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
        <ul className="list-disc ml-6 text-gray-600">
          <li>You must be at least 18 years old to use the service.</li>
          <li>Provide accurate booking and payment information.</li>
          <li>Maintain appropriate behavior during rides.</li>
        </ul>
      </section>

      {/* Add remaining sections as in the original content */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <p className="text-gray-600">
          Email: <a href="mailto:info@meshwareg.com" className="text-blue-600">info@meshwareg.com</a><br />
          Address: 4 Hafez Ramadan St, Nasr City, Cairo, Egypt<br />
          Website: <Link href="/" className="text-blue-600">https://meshwareg.com</Link>
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
