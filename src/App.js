import React, { Component } from 'react';
import './App.css';
import func from './data'

var CANVAS_WIDTH = window.innerWidth;
var CANVAS_HEIGHT = window.innerHeight;

var canvas;
var ctx;

var img = new Image();
img.src = "http://www.clipartbest.com/cliparts/nTB/pK7/nTBpK7GTA.svg";
img.width = img.width *0.015;
img.height = img.height *0.015;


class App extends Component {
  constructor() {
    super();
    this.state = {
      steps: []
    }
  }

  componentDidMount() {
    canvas = document.getElementById('canvas');
    if (canvas && canvas.getContext) {
      ctx = canvas.getContext('2d');
      canvas.width = CANVAS_WIDTH;
      canvas.height = CANVAS_HEIGHT;
      this.step();
    }

    setInterval(this.loadData, 1000);
  }

  loadData= () => {
    var data = func.getData();
    var coordinate = {
      x : data.coordinate.x,
      y : data.coordinate.y,
    }
    var tempStemps = this.state.steps;
    if(tempStemps.length > 4){
      tempStemps.shift();
    }
    tempStemps.push(coordinate);
    this.setState({
      steps: tempStemps
    });
    this.step();
  }

  step = () =>{
    var temp = this.state.steps;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i < temp.length; i++){
      let x = window.innerWidth* 0.03 * temp[i].x;
      let y = window.innerHeight * 0.03 * temp[i].y;
      console.log(x);
      console.log(y);
      ctx.drawImage(img,x,y,img.width, img.height);
    }
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
