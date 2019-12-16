import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setRed } from "../actions";
import "./ColorSelector.css";

import ColorControls from "./ColorControls";

const ColorDisplay = props => {
  const { red, green, blue } = props;

  console.log({ props });

  return (
    <div
      className="ColorDisplay"
      style={{
        backgroundColor: `rgb(${red}, ${green}, ${blue})`
      }}
    />
  );
};

const ColorSelector = () => {
  //const dispatch = useDispatch();

  // const setRed = newValue => dispatch(changeRed(newValue));

  const setGreen = newValue => {
    // dispatch({
    //   type: "CHANGE_GREEN_VALUE",
    //   payload: newValue
    // });
  };

  const setBlue = () => {};

  // const [varaible, variableSetter] = useState(<defaultValue>);
  const colorValues = useSelector(state => {
    return state.colorValues;
  });

  const red = colorValues.red;
  const green = colorValues.green;
  const blue = colorValues.blue;

  return (
    <div className="ColorSelector">
      current color:
      <ColorDisplay red={red} green={green} blue={blue} someValue={0} />
      <div style={{ height: "100px" }} />
      <ColorControls
        setRed={setRed}
        red={red}
        setGreen={setGreen}
        green={green}
        setBlue={setBlue}
        blue={blue}
      />
    </div>
  );
};

export default ColorSelector;
