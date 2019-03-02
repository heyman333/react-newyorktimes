import React from "react";
import styled from "styled-components";

const CardContainer = styled.li`
  display: inline-block;
  list-style-type: none;
  width: 250px;
  height: 250px;
  line-height: 50px;
  margin: 15px 25px;
  box-sizing: border-box;
  text-align: center;
  border: 1px solid gray;
  background-color: lightgreen;
  &:hover {
    background-color: bisque;
  }
`;

// const ArticieTitle = styled.h2`
//   font-weight: bold;
//   font-size: 10px;
// `;

export const ArticleCard = ({ item }) => <CardContainer />;
