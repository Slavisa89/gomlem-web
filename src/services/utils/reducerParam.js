export function reducerParam(state, action) {
  switch (action.type) {
    case "SET_AREA_SEARCH": {
      return {
        ...state,
        Text: action.payload.Text,
      };
    }
    case "SET_SORT_ORDER": {
      return {
        ...state,
        SortOrder: action.payload.SortOrder,
      };
    }
    default: {
      return state;
    }
  }
}

export const initialArg = {
  SortOrder: "",
  page: 1,
  size: 10,
};
export const ACTIONS = {
  SET_AREA_SEARCH: "SET_AREA_SEARCH",
  SET_SORT_ORDER: "SET_SORT_ORDER",
};
