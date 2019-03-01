import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as articleActions from "./modules/article/actions";
import { ArticleList } from "./containers";

class App extends Component {
  componentDidMount = () => {
    const { AuthActions } = this.props;
    AuthActions.fetchArticlesByPage(0);
  };

  render() {
    const { articles } = this.props;
    return <ArticleList list={articles} />;
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
