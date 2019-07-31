import React, { useState, useEffect } from "react";

const PX50 = () => {
  const colorArray = [
    "#1a1c2c",
    "#5d275d",
    "#b13e53",
    "#ef7d57",
    "#ffcd75",
    "#a7f070",
    "#38b764",
    "#257179",
    "#29366f",
    "#3b5dc9",
    "#41a6f6",
    "#73eff7",
    "#94b0c2",
    "#566c86",
    "#333c57",
    "#f4f4f4"
  ];
  const generateString = () => {
    let s = "";
    for (var i = 32; i <= 126; i++) {
      s += String.fromCharCode(i);
    }
    return s;
  };
  const [allStringGenerated, setAllStringGenerated] = useState("");
  const [allColorGenerated, setAllColorGenerated] = useState([]);

  useEffect(() => {
    setAllStringGenerated(generateString);
    setAllColorGenerated(colorArray);
  }, [colorArray]);
  return (
    <div style={{ margin: '5px' }}>
      <h4>Generate String</h4>
      <br />
      <p style={{ wordWrap: 'break-word' }}>{allStringGenerated}</p>
      <br />
      <h4>Generate Color</h4>
      <br />
      {allColorGenerated.map(color => {
        return (
          <div style={{ backgroundColor: color, color: color === '#f4f4f4' ? '#1a1c2c' : '#f4f4f4' }} key={color}>
            {color}
          </div>
        );
      })}
      <div style={{ paddingTop: "24px" }}>
        <h1>Welcome to PX-50</h1>
        <h5>A fantasy console made in Javascript/Electron</h5>
      </div>
    </div>
  );
};

export { PX50 };
