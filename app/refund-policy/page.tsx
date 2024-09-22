import Link from 'next/link';
import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">Refund Policy</h1>


      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="text-gray-600">
          At Meshwar, customer satisfaction is our top priority. This refund policy outlines the circumstances in which you may be eligible for a refund.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Eligibility for Refunds</h2>
        <ul className="list-disc ml-6 text-gray-600">
          <li>Service Failures: If a ride could not be completed due to technical issues or driver error.</li>
          <li>Incorrect Charges: In cases where the fare charged is higher than the fare estimate.</li>
        </ul>
      </section>

      {/* Add remaining sections as in the original content */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-600">
          Email: <a href="mailto:info@meshwareg.com" className="text-blue-600">info@meshwareg.com</a><br />
          Address: 4 Hafez Ramadan St, Nasr City, Cairo, Egypt<br />
          Website: <Link href="/" className="text-blue-600">https://meshwareg.com</Link>
        </p>
      </section>
    </div>
  );
};

export default RefundPolicy;
