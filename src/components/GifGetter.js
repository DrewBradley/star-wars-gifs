import React from "react"
import "../styles.css"

class GifGetter extends React.Component {
  constructor() {
    super()
    this.state = {
      SWCharacter: [],
      randomCharacter: "",
      weirdness: 5,
      randomGif: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1024px-Star_Wars_Logo.svg.png"
    }
    this.handClick = this.handClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
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
    console.log(this.state)
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }
  
  fetchGif(name) {
    const apiKey = "oa7cE1C08BLKdDxPCJpJgtc0uNLhijEc"
    const cleanName = (name.name).replace(/ /g, "-")
    fetch("https://api.giphy.com/v1/gifs/translate?api_key=" + apiKey + "&s=" + cleanName + "&weirdness=" + this.state.weirdness)
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
        <section className="slider-container">
          <button onClick={this.handClick}>Get a New Gif</button>
          <p className="weird-meter">Weirdness: {this.state.weirdness}</p>
          <input  
            name="weirdness"
            type="range" 
            min="1" max="10" 
            value={this.state.weirdness}
            className="slider" 
            onChange={this.handleChange}
            step="1"/>
        </section>
      </main>
    )
  }
}

export default GifGetter