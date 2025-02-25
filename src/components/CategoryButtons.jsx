import React from "react";

function CategoryButtons({ setCategory }) {
  return (
    <div>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="sheap">Арзан тамак</option>
        <option value="expensive"> Кымбат тамак</option>
      </select>
    </div>
  );
}

export default CategoryButtons;
