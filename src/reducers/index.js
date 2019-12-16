import { combineReducers } from "redux";

const INITIAL_STATE = {
  colorValues: {
    red: 0,
    green: 200,
    blue: 0
  }
};

const colorReducer = (state = INITIAL_STATE, action) => {
  /*
        action {
            type: 'CHANGE_BLUE_VALUE',
            payload: 50
        }
    */

  switch (action.type) {
    case "CHANGE_BLUE_VALUE":
      return state;
    case "CHANGE_GREEN_VALUE":
      return {
        ...state,
        colorValues: {
          ...state.colorValues,
          green: action.payload
        }
      };
    case "CHANGE_RED_VALUE":
      return {
        ...state,
        colorValues: {
          ...state.colorValues,
          red: action.payload
        }
      };
    default:
      return state;
  }
};

export default colorReducer;
