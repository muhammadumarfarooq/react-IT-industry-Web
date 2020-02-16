import React from "react";

import Navbar from "./common/Navbar/Navbar";
import Footer from "./common/Footer";
import Header from "./Header";
import Title from "./common/Title";
import CountDown from "./common/CountDown/CountDown";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Title />
      <CountDown />
      <div style={{ height: "100vh" }}></div>
      <Footer />
    </div>
  );
};

export default App;
