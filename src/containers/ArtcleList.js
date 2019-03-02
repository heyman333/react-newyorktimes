import React from "react";
import styled from "styled-components";

import { ArticleCard } from "../components/cards";

const TableView = styled.ul`
  margin: 0 auto;
  width: 1200px;
  font-size: 0; /* remove inline-block extra space */
  padding-left: 0; /* remove list padding */
  border: 1px solid black;
  background-color: lightyellow;

  @media screen and (max-width: 630px) {
    width: 300px;
  }
  @media screen and (min-width: 631px) and (max-width: 930px) {
    width: 600px;
  }
  @media screen and (min-width: 931px) and (max-width: 1230px) {
    width: 900px;
  }
`;

export const ArticleList = ({ list }) => (
  <TableView>
    {list.map(item => (
      <ArticleCard item={item} />
    ))}
  </TableView>
);
