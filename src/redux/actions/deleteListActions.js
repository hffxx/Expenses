export const addToDeleteListById = (id = "") => ({
  type: "ADD_BY_ID",
  id,
});
export const removeFromDeleteListById = (id = "") => ({
  type: "REMOVE_BY_ID",
  id,
});
export const addAllToDeleteList = (deleteList = []) => ({
  type: "ADD_ALL",
  deleteList,
});
export const removeAllFromDeleteList = () => ({
  type: "REMOVE_ALL",
});
export const removeFromDeleteList = (visibleDeleteList = []) => ({
  type: "REMOVE_VISIBLE",
  visibleDeleteList,
});
