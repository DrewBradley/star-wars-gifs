import React from "react"
import "../styles.css"

class Footer extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <header className="footer">
        <h1>created using <a href="https://swapi.dev/">swapi</a> and <a href="https://giphy.com/">GIPHY</a></h1>
      </header>
    )
  }
}

export default Footer