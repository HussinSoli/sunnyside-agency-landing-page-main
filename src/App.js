import Header from "./components/Header";
import Main from "./components/Main";
import Testimonials from "./components/Testimonails";
import Gallery from "./components/Gallery";
import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [hidden, setHidden] = useState(true);
  // console.log(hidden);
  return (
    <>
      <Header
        hidden={hidden}
        onDropNav={() => {
          setHidden(!hidden);
        }}
        onCloseDrop={() => {
          setHidden(true);
        }}
      />
      <Main />
      <Testimonials />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
