import React from "react";

import Navbar from "./common/Navbar/Navbar";
import Footer from "./common/Footer";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div style={{ height: "200vh" }}></div>
      <Footer />
    </div>
  );
};

export default App;
