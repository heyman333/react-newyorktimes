import React, { Component } from "react";
import styled from "styled-components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as articleActions from "./modules/article/actions";
import { ArticleList } from "./containers";

const Header = styled.div`
  background-color: black;
  height: 100px;
`;

const HeaderText = styled.h2`
  color: whitesmoke;
  text-align: center;
`;

const Body = styled.div`
  background-color: beige;
`;

const Bottom = styled.div`
  height: 200px;
  background-color: black;
`;

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

class App extends Component {
  componentDidMount = () => {
    const { AuthActions } = this.props;
    AuthActions.fetchArticlesByPage(0);
  };

  render() {
    const { articles } = this.props;
    return (
      <MainContainer>
        <Header>
          <HeaderText>Articel List</HeaderText>
        </Header>
        <Body>
          <ArticleList list={articles} />
        </Body>
        <Bottom />
      </MainContainer>
    );
  }
}

export default connect(
  state => {
    return {
      articles: state.article.articles,
    };
  },
  dispatch => ({
    AuthActions: bindActionCreators(articleActions, dispatch),
  })
)(App);
