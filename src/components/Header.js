import img from "../images/FoodEaseLogo.png";

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

export default Header;
