import React from "react"
import Header from "./components/Header"
import GifGetter from "./components/GifGetter"

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