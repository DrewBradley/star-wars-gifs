import React from "react"
import "../styles.css"
import Header from "./Header"
import GifGetter from "./GifGetter"

class App extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return(
      <main>
        <Header />
        <GifGetter />
      </main>
    )
  }
}

export default App