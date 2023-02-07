import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";
import img from "./imges/FoodEaseLogo.png";

const Title = () => {
  return <img class="logo" src={img} alt="logo of foodease" />;
};

//Composing Component

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const restrauntList = [{
  name: "Burger King",
  image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rtjnmtcoldygsgxb2dub",
  cusines: ["Burger", "American"],
  rating: "4.2",
}]

const RestrauntCard = () => {
  return (
    <div className="card">
      <img src="" alt="burger king" />
      <h2>Burger King</h2>
      <h3>Burgers, American</h3>
      <h4>4.2 stars</h4>
    </div>
  )
}

const Body = () => {
  return (
    <div className="restaurant-list">
      <RestrauntCard />
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <h1>Footer</h1>
    </div>
  );
};

const AppLayout = () => {
  return (
  <>
    <Header />
    <Body />
    <Footer />
  </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
