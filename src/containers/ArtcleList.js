import React from "react";
import styled from "styled-components";

import { ArticleCard } from "../components/cards";

const TableView = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px auto;
  width: 80%;
`;

export const ArticleList = ({ list }) => (
  <TableView>
    {list.map(item => (
      <ArticleCard item={item} />
    ))}
  </TableView>
);
