import React from "react";
import Header from "../mainpage/mainpagecomponents/header";
import Footer from "../mainpage/mainpagecomponents/footer";
import Dashcards from "./dashboardcomponents/dashcards";

const page = () => {
  return (
    <div>
      <Header />
      <Dashcards />

      <Footer />
    </div>
  );
};

export default page;
