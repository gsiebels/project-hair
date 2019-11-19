import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import Auth from '../../lib/auth'

class HairdresserShow extends React.Component {
  constructor() {
    super()

    this.state = {
      stylist: null
    }
  }

  componentDidMount() {
    const stylistId = this.props.match.params.id
    axios.get(`/api/stylists/${stylistId}`)
      .then(res => this.setState({ stylist: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    if (!this.state.stylist) return null
    const { stylist } = this.state
    console.log(this.state.stylist.gallery)

    return (
      <section className="section blank">
        <div>
          <h1 className="title">{stylist.name}</h1>
          <hr/>
          <div className="columns">

            <div className="column is-half">
              <figure className="show-images">
                <img className="" src={stylist.profile_pic} alt={stylist.name} />
              </figure>
              <h1>Emergency:{stylist.emergency}</h1>
            </div>

            <div className="column is-half">
              <h4 className="title is-4">About:</h4>
              <p>{stylist.about}</p>
              <hr />
              <h4 className="title is-4">Services:</h4>
              <ul>
                {stylist.services.map(ser => (
                  <li className="card" key={ser.id}>{ser.name}: £{ser.price}</li>
                ))}
                
              </ul>
              <hr />
              <button className="button">Book</button>
              <Link className="button is-dark" to={`/stylist/${stylist.id}/edit`}>Edit Profile</Link>
            </div>
                
            <div className="">
              {stylist.gallery.map((pic, id) => (
                <img key={id} src={pic.image} alt={pic.name} />
              ))}
            </div>
          </div>
        </div>


      </section>
    )
  }
}

export default HairdresserShow