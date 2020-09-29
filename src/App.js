import React from 'react';
import styles from "./components/styles";
import ItemList from "./components/ItemList";

function App() {

  return (
    <div>
      <header className="App-header"></header>
      <div style={styles.body}>
     <h1 style={styles.text} >CheeseCake Store</h1>
     <img style={styles.shopImage} src="https://www.homestratosphere.com/wp-content/uploads/2019/01/1-24-1-1.jpg" alt="cheeseCake"></img>
     </div>
     <ItemList />
     </div>
     )}
      

export default App;
