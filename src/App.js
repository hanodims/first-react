import React from 'react';
import {styles,GlobalStyle} from "./styles.js";
import ItemList from "./components/ItemList";
import { ThemeProvider } from "styled-components";

const theme = {
  mainColor: "#4B0082", // main font color
  backgroundColor: "#FFF0F5", // main background color
  blue: "#000080",
};

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <header className="App-header"></header>
      <div style={styles.body}>
     <h1 style={styles.text} >CheeseCake Store</h1>
     <img style={styles.shopImage} src="https://www.homestratosphere.com/wp-content/uploads/2019/01/1-24-1-1.jpg" alt="cheeseCake"></img>
     </div>
     <ItemList />
     </ThemeProvider>
     )}
     

export default App;
