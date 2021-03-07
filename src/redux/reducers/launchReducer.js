import * as actions from "../actions/type";

const LaunchReducers = (state = [], action) => {
  switch (action.type) {
    case actions.ALL_LAUNCHES:
      return [...action.payload];
    case actions.PAST_LAUNCHES:
      return [...action.payload];
    case actions.UPCOMING_LAUNCHES:
      return [...action.payload];
    default:
      return state;
  }
};

export default LaunchReducers;
