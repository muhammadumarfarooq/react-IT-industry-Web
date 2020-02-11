import React from "react";

import Navbar from "./common/Navbar/Navbar";
import Footer from "./common/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{ height: "200vh" }}></div>
      <Footer />
    </div>
  );
};

export default App;
