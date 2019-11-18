import React from 'react'
import axios from 'axios'

import HairdresserCard from '../hairdressers/HairdressersCard'

class HaidresserIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      stylists: [],
      openStylist: null
    }
  }

  componentDidMount() {
    axios.get('/api/stylists')
      .then(res => this.setState({ stylists: res.data }))
  }

  render() {
    return (
      <section className="blank">
        <div className="container">
          <div className="columns is-mobile is-multiline">
            {this.state.stylists.map(stylist => (
              <HairdresserCard
                key={stylist.id}
                {...stylist}
                isOpen={this.state.openStylist && stylist.id === this.state.openStylist.id}
                onClick={() => this.setState(oldState => {
                  return oldState.openStylist && stylist.id === oldState.openStylist.id
                    ? ({ ...oldState, openStylist: null })
                    : ({ ...oldState, openStylist: stylist })
                })}
              />
            ))}

          </div>
        </div>

        {this.state.openStylist && (
          <button>profile</button>
        )}

        {/* {this.state.openStylist && (
          <div className="container">
            {this.state.openStylist.gallery.map((pic, _id) => (
              <img key={_id} src={pic.image} alt={pic.name} />
            ))}
          </div>
        )} */}
      </section>
    )
  }
}

export default HaidresserIndex



