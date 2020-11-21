import React, { Component } from 'react'
import Menu from "../../components/Menu"
import hero from "../../assets/images/hero.png"

class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
          routes: {}
        }
      }
    componentDidMount(){
      fetch('https://rickandmortyapi.com/api/')
      .then(response => response.json())
      .then(data => this.setState({routes: data}))
    }

    render(){
        return(
        <div className="container">
          <img className="hero" src={hero}/>
          <Menu items={this.state.routes} />
          
        </div>
    )}
}

export default Home;
