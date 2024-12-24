import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import TopNav from "./TopNav.jsx";
import "./App.css";

function MenuItem({ name, description, macros }) {
  return (
    <div id="item-container">
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{macros}</p>
    </div>
  );
}

export default MenuItem;
