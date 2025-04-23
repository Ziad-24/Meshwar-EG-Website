import Link from "next/link";
import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-6  pt-32 pb-8">
      <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>
      <p className="text-gray-500 italic mb-10">
        Last Updated: February 19, 2025
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p className="text-gray-600">
          By downloading, installing, or using the Meshwar EG application (App),
          you agree to be bound by these Terms and Conditions. If you do not
          agree to these terms, please do not use our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
        <p className="text-gray-600">
          Meshwar EG provides a transportation service platform connecting
          passengers with drivers. The App facilitates ride booking and payment
          processing.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
        <ul className="list-disc ml-6 text-gray-600">
          <li>Be at least 18 years old</li>
          <li>Provide accurate and complete registration information</li>
          <li>Maintain the security of your account credentials</li>
          <li>Promptly update any changes to your account information</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          4. User Responsibilities
        </h2>
        <ul className="list-disc ml-6 text-gray-600">
          <li>Use the service in accordance with local laws and regulations</li>
          <li>Provide accurate pickup and destination information</li>
          <li>Treat drivers with respect</li>
          <li>Not engage in any harmful or disruptive behavior</li>
          <li>Pay for services rendered</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Service Rules</h2>
        <ul className="list-disc ml-6 text-gray-600">
          <li>Use the service for lawful purposes only</li>
          <li>Do not interfere with the operation of the App</li>
          <li>Do not share accounts with others</li>
          <li>Do not submit false information</li>
          <li>Refrain from harassing or harming users or drivers</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Cancellation Policy</h2>
        <p className="text-gray-600">
          Users may cancel rides subject to our cancellation policy. Repeated
          cancellations may result in service restrictions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Payment Terms</h2>
        <ul className="list-disc ml-6 text-gray-600">
          <li>Pay the specified fare for each ride</li>
          <li>Use valid and authorized payment methods</li>
          <li>Accept any applicable cancellation fees</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Service Availability</h2>
        <p className="text-gray-600">
          We strive to provide continuous service but do not guarantee
          uninterrupted availability. Factors such as technical issues, weather
          conditions, or driver availability may affect service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. Liability</h2>
        <ul className="list-disc ml-6 text-gray-600">
          <li>We aim to provide safe and reliable service</li>
          <li>We are not liable for indirect or consequential damages</li>
          <li>We maintain appropriate insurance coverage</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          10. Modifications to Service
        </h2>
        <ul className="list-disc ml-6 text-gray-600">
          <li>We may modify or discontinue services</li>
          <li>We may update these terms</li>
          <li>We may change pricing with appropriate notice</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">11. Account Termination</h2>
        <ul className="list-disc ml-6 text-gray-600">
          <li>We may suspend or terminate accounts that violate these terms</li>
          <li>We may act in cases of fraudulent or abusive behavior</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
        <p className="text-gray-600">
          For any questions about these terms, contact us at:
        </p>
        <p className="text-gray-600 mt-2">
          Email:{" "}
          <a href="mailto:info@meshwareg.com" className="text-blue-600">
            info@meshwareg.com
          </a>
          <br />
          Website:{" "}
          <Link href="/" className="text-blue-600">
            https://meshwareg.com
          </Link>
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
