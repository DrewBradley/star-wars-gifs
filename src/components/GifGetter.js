import React from "react"
import "../styles.css"

class GifGetter extends React.Component {
  constructor() {
    super()
    this.state = {
      SWCharacter: [],
      randomCharacter: "",
      randomGif: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1024px-Star_Wars_Logo.svg.png"
    }
    this.handClick = this.handClick.bind(this)
  }

  componentDidMount() {
    fetch("https://swapi.dev/api/people/")
      .then(response => response.json())
      .then(data => {
        const people = data.results
        this.setState({ SWCharacter: people }) 
      })
  }

  handClick() {
    const randomNum = Math.floor(Math.random() * this.state.SWCharacter.length)
    this.setState({ randomCharacter: this.state.SWCharacter[randomNum]})
    this.fetchGif(this.state.SWCharacter[randomNum])
  }
  
  fetchGif(name) {
    const apiKey = "oa7cE1C08BLKdDxPCJpJgtc0uNLhijEc"
    const cleanName = (name.name).replace(/ /g, "-")
    fetch("https://api.giphy.com/v1/gifs/translate?api_key=" + apiKey + "&s=" + cleanName)
      .then(response => response.json())
      .then(data => {
        const gif = data.data.images.downsized.url
        this.setState({ randomGif: gif }) 
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <main className="gif-getter">
        <h1>{this.state.randomCharacter.name}</h1>
        <section className="gif-container">
          <img className="image" src={this.state.randomGif}/>
        </section>
        <button onClick={this.handClick}>Get New Character</button>
      </main>
    )
  }
}

export default GifGetter