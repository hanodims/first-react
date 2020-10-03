import React from "react";
// Styling
import styles from "./styles";
//data
import items from "./item.js";

import ItemsItem from "./ItemsItem";

const itemList = items.map(item => (
<ItemsItem item = {item} key = {item.id} /> ));

const ItemList = () => {
  return <div style={styles.list}>{itemList}</div>
};

export default ItemList;