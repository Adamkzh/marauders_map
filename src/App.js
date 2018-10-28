import React, { Component } from 'react';
import './App.css';
import func from './data'
import footImage from './img/foot.svg'

var img = new Image();
img.src = footImage;
img.width = img.width *0.015;
img.height = img.height *0.015;
let flag = true;

class App extends Component {
  constructor() {
    super();
    this.state = {
      steps: []
    }
  }

  componentDidMount() {
    setInterval(this.loadData, 1500);
  }

  loadData= () => {
    var data = func.getData();
    var coordinate = {
      x : data.coordinate.x,
      y : data.coordinate.y,
    }
    var tempStemps = this.state.steps;
    if(tempStemps.length > 11){
      tempStemps.shift();
    }
    tempStemps.push(coordinate);
    this.setState({
      steps: tempStemps
    });
  }

  draw = () =>{
    let temp = this.state.steps;
    let imageArr =[];

    for(let i = 0; i < temp.length; i++){
      imageArr.push({
        src:footImage,
        key: i,
        x: temp[i].x,
        y: temp[i].y
      });
    }

    var res = [];
    for(let i = 0; i < imageArr.length; i++){
      let item = imageArr[i];
      let footstyle = {
        left: item.x +'%',
        top: (item.y + 1.6) +'%',
        position: 'absolute',
        transform: '',
        opacity: 1,
      }

      if(flag && imageArr.length === 12){
        if(i % 2 !== 0){
          footstyle.transform = 'rotateY(180deg)';
          footstyle.top = item.y +'%';
        }else{
          footstyle.transform= 'rotate(180deg)';
        }
      }else{
        if(i % 2 === 0){
          footstyle.transform = 'rotateY(180deg)';
          footstyle.top = item.y +'%';
        }else{
          footstyle.transform= 'rotate(180deg)';
        }
      }
      footstyle.opacity = i * 0.1;
      res.push(<img src={item.src} style={footstyle} className='stepImage' alt= {item.key} key ={item.key}/>)
    }
    flag = !flag;
    return res;
  }

  render() {
    return (
      <div className="App">
      <div>{
        this.draw()
      }</div>
      </div>
    );
  }
}

export default App;
