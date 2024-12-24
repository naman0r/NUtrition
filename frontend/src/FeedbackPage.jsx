import { useState } from "react";
import "./App.css";
import TopNav from "./TopNav.jsx";
import Footer from "./Footer.jsx";

function FeedbackPage() {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, feedback });
    alert("Thank you for your feedback!");
    setEmail(email);
    setFeedback(feedback);
  };

  return (
    <div>
      <TopNav />
      <div id="feedback-container">
        <h1>Feedback Form</h1>
        <div>
          <h2>NUtrition</h2>
          <form onSubmit={handleSubmit} className="feedback-form">
            {/* Email Input */}
            <div className="input-group">
              <label htmlFor="email" className="input-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter a valid northeastern email or 'N/A'"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-field"
              />
            </div>

            {/* Feedback Input */}
            <div className="input-group">
              <label htmlFor="feedback" className="input-label">
                Feedback
              </label>
              <textarea
                id="feedback"
                name="feedback"
                placeholder="Enter your feedback here..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
                rows="5"
                className="textarea-field"
              ></textarea>
            </div>

            {/* Submit Button */}

            <button type="submit">
              <span class="icon">▶</span> Submit
            </button>
          </form>
          <p className="thank-you-text">Thank you for your feedback!</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FeedbackPage;
