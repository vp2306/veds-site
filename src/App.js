import { useRef } from "react";

import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projs from "./components/Projs";
import SocialLinks from "./components/SocialLinks";
import Stack from "./components/Stack";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projs />
      <Stack />
      <ContactMe />
      <SocialLinks />
    </div>
  );
}

export default App;
