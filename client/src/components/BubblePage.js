import React, { useState, useEffect } from "react";
import axiosWithAuth from '../axios';
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../axios";

const colorApi = 'https://localhost:5000//api/colors';
const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
    .get(colorApi)
    .then(response => {
      setColorList(response.data)
    })
    .catch(error => {
      alert(error.response.data.message);
    })

  }, [])
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
