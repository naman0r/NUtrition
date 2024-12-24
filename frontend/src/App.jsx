import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import TopNav from "./TopNav.jsx";
import "./App.css";
import MenuItem from "./MenuItem.jsx";
import TotalMacros from "./TotalMacros.jsx"; // idk why this is an error. will deal with it later.
import Footer from "./Footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <TopNav />
      </div>
      <div>
        <MenuItem
          name="Money Head"
          description="A Cantonese delicacy"
          macros="100p 30c 200f"
        />
      </div>

      <TotalMacros />
      <Footer />
    </>
  );
}

export default App;
