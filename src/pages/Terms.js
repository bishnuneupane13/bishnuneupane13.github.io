import "./rules.css";
import React from "react";

export default function Terms() {
  return (
    <main className="policy-page">
      <h1>Terms of Use</h1>
      <p className="updated">Effective: November 2025</p>

      <ul className="policy-list">
        <li>Acceptance: By using this portfolio website you agree to these Terms.</li>
        <li>Permitted Use: This site is for personal, informational, and portfolio purposes only.</li>
        <li>Content Ownership: All original content belongs to the site owner unless otherwise stated.</li>
        <li>User Content: If you submit content (e.g., messages), you retain ownership but grant the site permission to store and display it as needed to respond.</li>
        <li>Third-Party Services: The site may link to or use third-party services (hosting, analytics, form providers). Those services have their own terms and privacy policies.</li>
        <li>Prohibited Conduct: Do not use the site to upload illegal, abusive, or harmful content, or to interfere with the site operation.</li>
        <li>Disclaimers: The site is provided "as is" without warranties; the owner is not liable for incidental damages or third-party actions.</li>
        <li>Limitation of Liability: To the maximum extent permitted by law, liability is limited as described in applicable law.</li>
        <li>Termination: The owner may remove content or block access for policy violations.</li>
        <li>Governing Law: These Terms are governed by the laws applicable in Nepal.</li>
        <li>Changes: We may revise these Terms; the updated version will appear here with a new effective date.</li>
        <li>Contact: For questions or requests (e.g., deletions), email <a href="mailto:gwbishnu10@gmail.com">gwbishnu10@gmail.com</a>.</li>
      </ul>

      <footer className="footer-note">© {new Date().getFullYear()} All Rights Reserved.</footer>
    </main>
  );
}
