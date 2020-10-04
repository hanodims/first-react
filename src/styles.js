import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body: { backgroundColor: "#FBFEFC" }, 
`;

const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

const ItemWrapper = styled.div`
  margin: 20px;
  img {
    width: 200px;
    height: 200px;
  }
  p {
    text-align: center;
    &.cookie-price {
      color: #ff85a2
    }
  }
`;

const styles = {

    shopImage: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "50%",
    },
  };
  
  export default {
    styles,
    GlobalStyle,
    ListWrapper,
    ItemWrapper
  };