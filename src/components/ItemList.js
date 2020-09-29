import React from "react";
// Styling
import styles from "./styles";
//data
import items from "./item.js";

const itemList = items.map((item) => (
    <div style={styles.item} key={item.id}>
      <img
      style={styles.itemImage}
      alt={item.name}
      src={item.image}
      width="20%"
      />
    <p style={styles.text}>{item.name}</p>
    <p style={styles.text}>{item.price} SR</p>
    </div>
  ));
const ItemList = () => {
  return <div style={styles.list}>{itemList}</div>
};

export default ItemList;