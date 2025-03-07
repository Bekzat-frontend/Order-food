import React from "react";

function FoodList({ category }) {
  const cheapFoods = ["Бууз", "Лагман", "Самса"];
  const expensiveFoods = ["Стейк", "Лобстер", "Суши"];
  const foods = category === "cheap" ? expensiveFoods : cheapFoods;
  console.log(foods);

  return (
    <div>
      <ul>
        {foods.map((fodo, index) => (
          <li key={index}>{fodo}</li>
        ))}
      </ul>
    </div>
  );
}

export default FoodList;
