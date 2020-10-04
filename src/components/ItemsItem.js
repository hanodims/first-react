import React from "react";
// Styling
import {ItemWrapper} from "../styles.js";

const ItemsItem = (props) => {
  const item = props.item;
    return (
    <ItemWrapper key={item.id}>
      <img
      alt={item.name}
      src={item.image}
      width="20%"
      />
    <p>{item.name}</p>
    <p className="item-price">{item.price} SR</p>
    </ItemWrapper>
  ); };

  export default ItemsItem;