import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-6 pt-32 pb-8">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-gray-500 italic mb-10">Last Updated: March 19, 2024</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="text-gray-600">
          Meshwar EG (we, our, or us) is committed to protecting your privacy
          and ensuring the security of your personal information. This Privacy
          Policy explains how we collect, use, and safeguard your data when you
          use our mobile application and services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          2. Information We Collect
        </h2>
        <ul className="list-disc ml-6 text-gray-600">
          <li>Name</li>
          <li>Phone number</li>
          <li>Email address</li>
          <li>Gender</li>
          <li>Real-time location data (only during active service use)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          3. How We Use Your Information
        </h2>
        <ul className="list-disc ml-6 text-gray-600">
          <li>To create and manage your user account</li>
          <li>To provide customer support</li>
          <li>To connect you with our drivers</li>
          <li>To process your ride requests</li>
          <li>To help drivers reach your location efficiently in real time</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
        <ul className="list-disc ml-6 text-gray-600">
          <li>Stored securely using industry-standard encryption protocols</li>
          <li>Protected through transparent encryption methods</li>
          <li>Accessible only to authorized personnel</li>
          <li>Never shared with or sold to third parties</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Location Data</h2>
        <p className="text-gray-600">
          We only access your location data during active ride requests to:
        </p>
        <ul className="list-disc ml-6 text-gray-600">
          <li>Show your real-time location to assigned drivers</li>
          <li>Facilitate efficient pick-up</li>
          <li>Improve service delivery</li>
        </ul>
        <p className="mt-2 text-gray-600 font-medium">
          Important: Your location data is not stored permanently and is only
          used in real-time during active services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Third-Party Services</h2>
        <p className="text-gray-600">
          We do not share or sell your personal information with any third-party
          services or companies.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
        <ul className="list-disc ml-6 text-gray-600">
          <li>Access your personal information</li>
          <li>Request correction of your personal information</li>
          <li>Request deletion of your account and associated data</li>
          <li>Opt-out of non-essential communications</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          8. Changes to Privacy Policy
        </h2>
        <p className="text-gray-600">
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page and
          updating the Last Updated date.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
        <p className="text-gray-600">
          If you have any questions about this Privacy Policy or our practices,
          please contact us at:
        </p>
        <p className="text-gray-600 mt-2">
          Email:{" "}
          <a href="mailto:info@meshwareg.com" className="text-blue-600">
            info@meshwareg.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
