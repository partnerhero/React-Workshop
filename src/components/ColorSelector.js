import React, { useState } from "react";
import "./ColorSelector.css";

import ColorControls from "./ColorControls";

const ColorDisplay = props => {
  const { red, green, blue } = props;

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
  // const [varaible, variableSetter] = useState(<defaultValue>);
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <div className="ColorSelector">
      <button onClick={() => console.log("Clicked!")} name="myButton"></button>
      current color:
      <ColorDisplay red={red} green={green} blue={blue} />
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
