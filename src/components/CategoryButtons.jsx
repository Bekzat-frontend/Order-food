import React from "react";

function CategoryButtons({ setCategory }) {
  return (
    <div>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option>Арзан тамак</option>
        <option>Кымбат тамак</option>
      </select>
    </div>
  );
}

export default CategoryButtons;
