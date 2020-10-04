import React from 'react';
import {ShopImage,GlobalStyle,Title} from "./styles";
import ItemList from "./components/ItemList";
import { ThemeProvider } from "styled-components";

const theme = {
  mainColor: "#663399", // main font color
  backgroundColor: "#FFE4E1", // main background color
  blue: "#000080",
};

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <header className="App-header"></header>
     <Title>CheeseCake Store</Title>
     <ShopImage src="https://www.homestratosphere.com/wp-content/uploads/2019/01/1-24-1-1.jpg" alt="cheeseCake"></ShopImage>
     <ItemList /> 
     </ThemeProvider>
     )}
     

export default App;
