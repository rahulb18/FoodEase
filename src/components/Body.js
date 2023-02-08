const restrauntList = [
  {
    name: "Burger King",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rtjnmtcoldygsgxb2dub",
    cusines: ["Burger", "American"],
    rating: "4.2",
  },
];

const RestrauntCard = () => {
  return (
    <div className="card">
      <img src="" alt="burger king" />
      <h2>Burger King</h2>
      <h3>Burgers, American</h3>
      <h4>4.2 stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant-list">
      <RestrauntCard />
    </div>
  );
};

export default Body;
