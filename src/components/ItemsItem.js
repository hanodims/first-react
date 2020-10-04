import React from "react";
// Styling
import {styles} from "../styles.js";

const ItemsItem = (props) => {
  const item = props.item;
    return (
    <styles key={item.id}>
      <img
      alt={item.name}
      src={item.image}
      width="20%"
      />
    <p>{item.name}</p>
    <p>{item.price} SR</p>
    </styles>
  ); };

  export default ItemsItem;