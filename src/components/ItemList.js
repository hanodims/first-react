import React from "react";
// Styling
import {ListWrapper} from "../styles.js";
//data
import items from "./item.js";

import ItemsItem from "./ItemsItem";

const itemList = items.map(item => (
<ItemsItem item = {item} key = {item.id} /> ));

const ItemList = () => {
  return <ListWrapper>{itemList}</ListWrapper>
};

export default ItemList;