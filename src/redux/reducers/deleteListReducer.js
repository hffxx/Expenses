import { defaultDeleteListState } from "../defaultState/defaultState";

const deleteListReducer = (state = defaultDeleteListState, action) => {
  switch (action.type) {
    case "ADD_BY_ID":
      return [...state, action.id];
    case "REMOVE_BY_ID":
      return state.filter((id) => id !== action.id);
    case "ADD_ALL":
      return [...state, ...action.deleteList];
    case "REMOVE_VISIBLE":
      return state.filter((id) => !action.visibleDeleteList.includes(id));
    case "CLEAR_LIST":
      return [];
    default:
      return state;
  }
};
export default deleteListReducer;
