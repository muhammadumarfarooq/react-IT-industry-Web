import React from "react";

import Navbar from "./common/Navbar/Navbar";
import Footer from "./common/Footer";
import Header from "./Header";
import Title from "./common/Title";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Title />
      <div style={{ height: "100vh" }}></div>
      <Footer />
    </div>
  );
};

export default App;
