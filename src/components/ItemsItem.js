import React from "react";
// Styling
import styles from "./styles";

const ItemsItem = (props) => {
  const item = props.item;
    return (
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
  ); };

  export default ItemsItem;