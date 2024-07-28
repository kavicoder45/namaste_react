/**
 * * Header
 *  - Logo
 *  - Nav items
 * * Body
 *  -Search
 *  -restro container
 *    --restro card
 * * Fooder
 * -copy right:
 */
import React from "react";
import ReactDOM from "react-dom/client";

// here you can give Header.js -> but implicitly react understand it is React component:
import Header from "./components/Header";
import FoodContainer from "./components/FoodContainer";

/**
 * @return Header, Body, Footer
 */
const AppLayout = () => {
  return (
    <>
      <Header />
      <FoodContainer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
