import React from "react"
import "../styles.css"

class GifGetter extends React.Component {
  constructor() {
    super()
    this.state = {
      SWCharacter: [],
      randomCharacter: "" 
    }
  }

  componentDidMount() {
    fetch("https://swapi.dev/api/people/")
      .then(response => response.json())
      .then(data => console.log(data))
  }

  handClick() {
    const randomNum = Math.floor(Math.random() * this.state.SWCharacter.length)
    console.log("This Got Clicked", randomNum)
  }

  render() {
    return(
      <main>
        <h1>{this.state.randomCharacter.name}</h1>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1024px-Star_Wars_Logo.svg.png"/>
        <button onClick={this.handClick}>Get New Character</button>
      </main>
    )
  }
}

export default GifGetter