import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background-color: white;
  width: 300px;
  height: 300px;
  border: solid 1px black;
  margin: 10px 10px 10px 10px;
  &:hover {
    background-color: bisque;
  }
`;

const ArticieTitle = styled.h4`
  font-weight: bold;
`;

export const ArticleCard = ({ item }) => (
  <CardContainer>
    <ArticieTitle>{item.headline.main}</ArticieTitle>
  </CardContainer>
);
