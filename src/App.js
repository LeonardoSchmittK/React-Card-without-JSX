import React, { Component } from "react"
import './style/style.css'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      color: '#30be73'
    }
     this.changeColor = this.changeColor.bind(this);
  }

  changeColor(){
    const colors = ['#30be73','#dd4408','#4abad6','#dbf301','#032c5c','#2f2a1a','pink']
    const randomColor = Math.floor ( Math.random () * colors.length)
    this.setState(()=>({
      color: colors[randomColor],
    }))
  }

  render(){
    return (
      <div>
        <Card 
        title='Games' 
        subtitle='A good way to have fun.' 
        description='Lorem ipsum, dolor sit   amet consectetur adipisicing elit. Neque voluptates ducimus ipsum voluptatum pariatur aperiam animLorem ipsum, dolor sit amet consectetur adipisicing elit. Neque voluptates ducimusimilique quisquam sit aeque voluptates ducimus ipsum voluptatum pariatur aperiam animi similique quisquam sit a' 
        color={this.state.color} />

          <div 
          onClick={this.changeColor} 
          style={{textAlign:'center'}} 
          className='actualColorText'> 
          {this.state.color} 
        </div>
      </div>
    )
  }
}
  
function Card(props) {
  return (
      React.createElement("div", {className:'card'} , "" ,
        React.createElement("h1",{className:'card__title',style:{borderBottom:`5px solid        ${props.color}`}},props.title),
          React.createElement("h2",{className:'card__subtitle'},props.subtitle),
            React.createElement("div",{className:'card__description'},props.description),
              React.createElement('button',{className:'card__button card__button--active',style:{background:props.color}},'Redirect',)         
    )
  )
}

 export default App