import React, { Component } from "react";
import './style/style.css';

class App extends React.Component{
  constructor(props){
    super(props)
   
  }
  render(){
    return(
      <Card title='Games' subtitle='A good way to have fun.'/>
    )
  }
}
  
function Card(props) {
  return(
      React.createElement("div", {className:'card'} , "" ,
        React.createElement("h1",{className:'card__title'},props.title),
          React.createElement("h2",{className:'card__subtitle'},props.subtitle),
            React.createElement("div",{className:'card__description'},'Lorem ipsum, dolor sit   amet consectetur adipisicing elit. Neque voluptates ducimus ipsum voluptatum pariatur aperiam animLorem ipsum, dolor sit amet consectetur adipisicing elit. Neque voluptates ducimusimilique quisquam sit aeque voluptates ducimus ipsum voluptatum pariatur aperiam animi similique quisquam sit a'),
              React.createElement('button',{className:'card__button card__button--active'},'Redirect' ),          
      )
  )
}

export default App;

