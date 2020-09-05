import React, { useState, useEffect } from 'react';
import './App.scss';
import {
  Grid
} from "@material-ui/core";
import axios from "axios";
import PhotoItem from "./components/PhotoItem";
import pic01 from "./assets/images/Butterfly1.jpg";
import pic02 from "./assets/images/Butterfly2.jpg";
import pic03 from "./assets/images/Butterfly3.jpg";

export default function App() {
  const [quote, setQuote] = useState();
  const url=`https://quotes.rest/qod?language=en`;

  const array = [
      [pic01, "Danaus Plexippus"], 
      [pic02, "Morpho Pelides"], 
      [pic03, "Delias Eucharia"] 
  ];
  useEffect(() => {
    try {
      axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        setQuote(data.contents.quotes[0].quote);
      });
    } 
    catch (err) {
      console.log(err);
      alert("Error fetching quotes! :", err);
    }
  });

  return (
    <div className="App">
      <h1>Butterflies</h1>
      <p>{quote}</p>
      <Grid container spacing={2}>
          {array.map((item) => (
             <Grid item xs sm={4}>
              <PhotoItem imgSrc={item[0]} description={item[1]}/>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}
