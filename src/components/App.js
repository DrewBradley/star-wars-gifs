import React from "react"
import "../styles.css"
import Header from "./Header"
import GifGetter from "./GifGetter"
import Footer from "./Footer"

class App extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Header />
        <GifGetter />
        <Footer />
      </div>
    )
  }
}

export default App