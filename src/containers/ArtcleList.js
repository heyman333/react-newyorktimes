import React from "react";
import { Collection } from "react-virtualized";
import "react-virtualized/styles.css";
import styled from "styled-components";

import { ArticleCard } from "../components/cards";

const Coll = styled(Collection)`
  background-color: black;
  height: 1000em;
  width: 1000em;
`;

const cellRenderer = item => <ArticleCard />;

const cellSizeAndPositionGetter = ({ index }) => {
  return {
    height: 300,
    width: 300,
    x: 300 * index,
    y: 300 * index,
  };
};

export const ArticleList = ({ list }) => (
  <Coll
    cellCount={list.length}
    cellRenderer={cellRenderer}
    cellSizeAndPositionGetter={cellSizeAndPositionGetter}
    height={300}
    width={300}
  />
);
