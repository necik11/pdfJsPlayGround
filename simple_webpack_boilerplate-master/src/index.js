import React from "react";
import ReactDOM from "react-dom";
import './pdfJs/prod';

const Index = () => {
  return <div>
    <canvas id="the-canvas"></canvas>
    <div>
      Hello React!
    </div>
  </div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));
