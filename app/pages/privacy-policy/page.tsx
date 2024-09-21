import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>


      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="text-gray-600">
          Meshwar EG is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, share, and protect your personal data when using our ride-hailing services on <a href="https://meshwareg.com" className="text-blue-600">https://meshwareg.com</a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Data We Collect</h2>
        <ul className="list-disc ml-6 text-gray-600">
          <li>Personal Data: Name, contact details, payment information.</li>
          <li>Usage Data: Trip history, routes, location data, communication with drivers.</li>
          <li>Device Information: IP address, browser, operating system, device model.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Data</h2>
        <p className="text-gray-600">
          We collect and process personal data to facilitate ride bookings, payments, and cancellations, improve our services, and comply with legal obligations.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Data Sharing</h2>
        <p className="text-gray-600">
          We may share your data with third-party service providers, legal authorities when required, and in the event of mergers or acquisitions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Your Data Rights</h2>
        <ul className="list-disc ml-6 text-gray-600">
          <li>Access and correction of your data.</li>
          <li>Request deletion of your data, unless restricted by law.</li>
          <li>Opt-out from marketing communications.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
        <p className="text-gray-600">
          We retain your data as long as necessary for its original purpose or as required by law.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Data Security</h2>
        <p className="text-gray-600">
          We implement industry-standard security measures to protect your data, though absolute security cannot be guaranteed.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Cookies and Tracking Technologies</h2>
        <p className="text-gray-600">
          We use cookies to enhance user experience and collect usage statistics. You can manage cookie preferences through your browser.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. International Data Transfers</h2>
        <p className="text-gray-600">
          Your data may be transferred to countries outside your home country, but we ensure compliance with data protection regulations.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
        <p className="text-gray-600">
          If you have any questions regarding this Privacy Policy, please contact us at:
        </p>
        <p className="text-gray-600">
          Email: <a href="mailto:info@meshwareg.com" className="text-blue-600">info@meshwareg.com</a><br />
          Address: 4 Hafez Ramadan St, Nasr City, Cairo, Egypt<br />
          Website: <a href="https://meshwareg.com" className="text-blue-600">https://meshwareg.com</a>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
