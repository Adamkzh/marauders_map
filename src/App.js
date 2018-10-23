import React, { Component } from 'react';
import './App.css';


var CANVAS_WIDTH = window.innerWidth;
var CANVAS_HEIGHT = window.innerHeight;
    
var canvas;
var ctx;

var img = new Image();
img.src = "http://www.clipartbest.com/cliparts/nTB/pK7/nTBpK7GTA.svg";
img.width = img.width *0.02;
img.height = img.height *0.02;

class App extends Component {
  componentDidMount() {
    canvas = document.getElementById('canvas');
    if (canvas && canvas.getContext) {
      ctx = canvas.getContext('2d');
      canvas.width = CANVAS_WIDTH;
      canvas.height = CANVAS_HEIGHT;
      this.step();
    }
  }
  step = () =>{
    console.log( window.innerHeight);
    console.log(CANVAS_HEIGHT);
    ctx.drawImage(img,160,120,img.width, img.height);
    ctx.drawImage(img,150,100,img.width, img.height);
  }



  render() {
    return (
      <div className="App">
      <canvas id='canvas'></canvas>
      </div>
    );
  }
}

export default App;
