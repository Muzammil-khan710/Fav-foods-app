import { useState } from "react";
import "./styles.css";

var foodILove = {
  Indian : [
    {name : "Kadai Paneer", spicy : "🌶🌶", description : "Spicy paneer made with onion and indian sauces"},
    {name : "Dal Makhani", spicy : "🌶", description : "Dal made with tadka and butter"},
    {name : "Punjabi Chhole", spicy :"🌶",  description : "Chatpate chhole made with a Punjabi taste"}
  ],

  Chinese : [
    {name : "Chilly Garlic Noodles", spicy : "🌶🌶🌶", description : "Spicy Noodles made with veggies"},
    {name: "Hot and Sour Soup", spicy: "🌶🌶" , description : "Hot and tasty soup "},
    {name : "Veg Manchurian Gravy", spicy : "🌶" , description : "Mouth watery manchurian"}
  ],

  Italian : [
    {name : "Red Sauce Pasta", spicy : "🌶🌶🌶", description : "Spicy and delicious pasta"},
    {name : "Pizza", spicy : "🌶", description : "Pizza filled with cheese."},
    { name: "Lasagna", spicy: "🌶"  , description: "veg lasagna loaded with veggies"}
  ]
};

export default function App() {
  const [selectFood, setFood] = useState("Indian");
  function foodClickHandler(food) {
    setFood(food);
  }
  return (  
    <div className="App">
      <h1>FavFoods🍱</h1>
      <p className="description">Checkout my favorite foods. Select a category to get started</p>

<div>
{Object.keys(foodILove).map((food) => (
  <button className="button"
    onClick={() => foodClickHandler(food)}
    style={{
      cursor: "pointer",
      background: "#EDAB76",
      borderRadius: "0.5rem",
      padding: "0.5rem  1rem",
      border: "1px solid black",
      margin: "1rem 0.3rem",
    }}>
    {food}
  </button>
))}
</div>
<hr/>
<div style={{ textAlign: "left"}}>
<ul style={{ paddingInlineStart: "0"}}>
  {foodILove[selectFood].map((food) => (
    <li 
      key={food.name}
      style={{ 
      listStyle: "none",
      padding: "1rem",
      border: "1px solid #D1D5DB",
      width: "70%",
      background: "#F1BD94",
      margin: "1rem 0rem",
      borderRadius: "0.5rem"   
      }}>
      {" "}
      <div className="food-name"> {food.name} </div>
      <div className="food-spice"> {food.spicy} </div>
    </li>
  ))}
</ul>
</div>
</div>
);
}
