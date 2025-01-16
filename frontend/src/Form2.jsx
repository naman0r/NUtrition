import React from "react";
import { useState } from "react";
import TopNav from "./TopNav.jsx";
import "./App.css";
import MenuItem from "./MenuItem.jsx";
import TotalMacros from "./TotalMacros.jsx"; // idk why this is an error. will deal with it later.
import Footer from "./Footer.jsx";

export default function Form2() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "901afd1f-11f5-4f4b-8d90-afd312b56dc4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" required />
        <input type="email" name="email" required />
        <textarea name="message" required></textarea>

        <button type="submit">Submit Form</button>
      </form>
      <span>{result}</span>
    </div>
  );
}
