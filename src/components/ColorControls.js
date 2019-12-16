import React from "react";
import { useDispatch } from "react-redux";

import { changeRed } from "../actions";

const COLOR_INTERVAL = 15;

const ColorControls = ({ red, setGreen, green, setBlue, blue }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h6> Control for Red </h6>
      <button
        onClick={() => {
          dispatch(setRed(red + COLOR_INTERVAL));
        }}
      >
        {" "}
        Increase Red
      </button>
      <button
        onClick={() => {
          setRed(red - COLOR_INTERVAL);
        }}
      >
        {" "}
        Decrease Red
      </button>
      <br />

      <h6> Control for Green </h6>
      <button
        onClick={() => {
          setGreen(green + COLOR_INTERVAL);
        }}
      >
        {" "}
        Increase Green
      </button>
      <button
        onClick={() => {
          setGreen(green - COLOR_INTERVAL);
        }}
      >
        {" "}
        Decrease Green
      </button>

      <h6> Control for Blue </h6>
      <button
        onClick={() => {
          setBlue(blue + COLOR_INTERVAL);
        }}
      >
        {" "}
        Increase Blue
      </button>
      <button
        onClick={() => {
          setBlue(blue - COLOR_INTERVAL);
        }}
      >
        {" "}
        Decrease Blue
      </button>
    </div>
  );
};

export default ColorControls;
