import { defaultDeleteListState } from "../defaultState/defaultState";

const deleteListReducer = (state = defaultDeleteListState, action) => {
  switch (action.type) {
    case "ADD_BY_ID":
      return [...state, action.id];
    case "REMOVE_BY_ID":
      return state.filter((id) => id !== action.id);
    case "ADD_ALL":
      return action.deleteList;
    case "REMOVE_ALL":
      return defaultDeleteListState;
    default:
      return state;
  }
};
export default deleteListReducer;
