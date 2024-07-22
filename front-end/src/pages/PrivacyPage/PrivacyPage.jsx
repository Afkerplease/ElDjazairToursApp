import React from "react";
import "./privacyPage.scss";

const PrivacyPage = () => {
  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <p>Last updated: [Date]</p>

      <section>
        <h2>Introduction</h2>
        <p>
          Welcome to El Djazair Tours. We are committed to protecting your
          personal information and your right to privacy. If you have any
          questions or concerns about our policy, or our practices with regards
          to your personal information, please contact us at
          support@eldjazairtours.com.
        </p>
      </section>

      <section>
        <h2>Information We Collect</h2>
        <p>
          We collect personal information that you voluntarily provide to us
          when registering at the Services, expressing an interest in obtaining
          information about us or our products and services, when participating
          in activities on the Services, or otherwise contacting us.
        </p>
        <ul>
          <li>
            <strong>Personal Information Provided by You:</strong> We collect
            names; phone numbers; email addresses; and other similar
            information.
          </li>
          <li>
            <strong>Payment Data:</strong> We may collect data necessary to
            process your payment if you make purchases, such as your payment
            instrument number (e.g., a credit card number), and the security
            code associated with your payment instrument.
          </li>
        </ul>
      </section>

      <section>
        <h2>How We Use Your Information</h2>
        <p>
          We use personal information collected via our Services for a variety
          of business purposes described below. We process your personal
          information for these purposes in reliance on our legitimate business
          interests, in order to enter into or perform a contract with you, with
          your consent, and/or for compliance with our legal obligations.
        </p>
        <ul>
          <li>To facilitate account creation and logon process.</li>
          <li>To send administrative information to you.</li>
          <li>To fulfill and manage your orders.</li>
          <li>To post testimonials.</li>
          <li>To send you marketing and promotional communications.</li>
        </ul>
      </section>

      <section>
        <h2>Sharing Your Information</h2>
        <p>
          We only share information with your consent, to comply with laws, to
          provide you with services, to protect your rights, or to fulfill
          business obligations.
        </p>
        <ul>
          <li>
            We may process or share your data that we hold based on the
            following legal basis: Consent, Legitimate Interests, Performance of
            a Contract, Legal Obligations, Vital Interests.
          </li>
          <li>
            <strong>
              Vendors, Consultants, and Other Third-Party Service Providers:
            </strong>{" "}
            We may share your data with third party vendors, service providers,
            contractors, or agents who perform services for us or on our behalf
            and require access to such information to do that work.
          </li>
        </ul>
      </section>

      <section>
        <h2>Security of Your Information</h2>
        <p>
          We use administrative, technical, and physical security measures to
          help protect your personal information. While we have taken reasonable
          steps to secure the personal information you provide to us, please be
          aware that despite our efforts, no security measures are perfect or
          impenetrable, and no method of data transmission can be guaranteed
          against any interception or other type of misuse.
        </p>
      </section>

      <section>
        <h2>Your Privacy Rights</h2>
        <p>
          In some regions (like the European Economic Area), you have certain
          rights under applicable data protection laws. These may include the
          right to (i) request access and obtain a copy of your personal
          information, (ii) request rectification or erasure; (iii) restrict the
          processing of your personal information; and (iv) if applicable, to
          data portability. In certain circumstances, you may also have the
          right to object to the processing of your personal information.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          If you have questions or comments about this policy, you may email us
          at support@eldjazairtours.com.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPage;
