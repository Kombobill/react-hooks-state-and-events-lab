import React from "react";

function Item({ name, category }) {
  const [change , setChange] = useState(false)
  function handleAddItem(){
    setChange(!change)

  }
  const changeLi = change ? "in-cart" : ""
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
