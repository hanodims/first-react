import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.theme.mainColor};
    background-color: ${props => props.theme.backgroundColor};
  }
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
    &.item-price {
      color: ${props => props.theme.blue};
    }
  }
`;

const Title = styled.h1`
  text-align: center;
`;

const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;
  
  export {
    ShopImage,
    GlobalStyle,
    ListWrapper,
    ItemWrapper,
    Title
  };