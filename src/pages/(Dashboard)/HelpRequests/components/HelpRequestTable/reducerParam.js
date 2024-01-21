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
    case "SET_URGENCY_LEVEL": {
      return {
        ...state,
        UrgencyLevel: action.payload.UrgencyLevel,
      };
    }
    case "SET_STATUS": {
      return {
        ...state,
        Status: action.payload.Status,
      };
    }
    default: {
      return state;
    }
  }
}

export const initialArg = {
  UrgencyLevel: "",
  Status: "",
  Text: "",
  SortOrder: "",
  page: 1,
  size: 10,
};
export const ACTIONS = {
  SET_AREA_SEARCH: "SET_AREA_SEARCH",
  SET_SORT_ORDER: "SET_SORT_ORDER",
  SET_URGENCY_LEVEL: "SET_URGENCY_LEVEL",
  SET_STATUS: "SET_STATUS",
};
