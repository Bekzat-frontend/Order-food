import React, { useState } from "react";
import CategoryButtons from "./CategoryButtons";
import FoodList from "./FoodList";
function FoodMenu() {
  const [category, setCategory] = useState("sheap");
  return (
    <div>
      <CategoryButtons setCategory={setCategory} />
      <FoodList category={category} />
    </div>
  );
}

export default FoodMenu;
