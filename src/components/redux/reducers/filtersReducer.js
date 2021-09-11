import { defaultFilterState } from "../defaultState";

const filtersReducer = (state = defaultFilterState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default filtersReducer;
