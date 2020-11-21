import React, { Component } from "react"
import Card from "../Card"

class Characters extends Component{
    state = {
        characters : []
    }
    componentDidMount(){
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
            console.log('res: ', data)
            this.setState({characters: data.results})
        })
    }
    render(){
        return(
            <div>
                <Card data={this.state.characters} />
            </div>
        )
    }
}

export default Characters;