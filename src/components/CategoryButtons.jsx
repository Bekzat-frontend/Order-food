import React from "react";

function CategoryButtons({ setCategory }) {
  return (
    <div>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="cheapFoods">Арзан тамак</option>
        <option value="expensiveFoods"> Кымбат тамак</option>
      </select>
    </div>
  );
}

export default CategoryButtons;
