import React from "react";

import Navbar from "./common/Navbar/Navbar";
import Footer from "./common/Footer";
import Header from "./Header";
import CountDown from "./common/CountDown/CountDown";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />

      <CountDown />
      <div style={{ height: "100vh" }}></div>
      <Footer />
    </div>
  );
};

export default App;
