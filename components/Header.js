import React from "react"

class Header extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return(
      <header className="header">
        <img src="https://starwarsblog.starwars.com/wp-content/uploads/sites/6/2015/11/rebel-symbol.jpg"/>
        <h1>Star Wars Gifs</h1>
        <img src="https://starwarsblog.starwars.com/wp-content/uploads/2016/02/imperialseal.jpg"/>
      </header>
    )
  }
}

export default Header