import React from "react"

class GifGetter extends React.Component {
  constructor() {
    super()
    this.state = {
      SWCharacter: []
    }
  }

  componentDidMount() {
    fetch("https://swapi.dev/api/people/")
      .then(response => response.json())
      .then(data => console.log(data))
  }

  render() {
    return(
      <main>
        <
      </main>
    )
  }
}

export default GifGetter