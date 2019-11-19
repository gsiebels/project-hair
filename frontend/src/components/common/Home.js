import React from 'react'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  render(){
    return (
      <section className="home">
        <img className="home-logo" src="https://i.imgur.com/lQKKS66.png" />
      </section>
    )
  }
}

export default Home