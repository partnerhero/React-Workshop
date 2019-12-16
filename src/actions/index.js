export const changeRed = newValue => {
  return dispatch => {
    dispatch({
      type: "CHANGE_RED_VALUE",
      payload: newValue
    });
  };
};
