import { pender } from "redux-pender";
import { handleActions } from "redux-actions";

export const FETCH_ARTICLE = "article/FETCH_ARTICLE";

const initialState = {
  articles: [],
};

export default handleActions(
  {
    ...pender({
      type: FETCH_ARTICLE,
      onSuccess: (
        state,
        {
          payload: {
            response: { docs },
          },
        }
      ) => {
        return {
          articles: state.articles.concat(docs),
        };
      },
    }),
  },
  initialState
);
