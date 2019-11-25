import React from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'
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
      <section >
        <div className="section blank-show show-page"> 
          <div className="show-gap"></div>

          <div className="high-show section">
            <div className="center show-head">
              <img className="show-images" src={stylist.profile_pic} alt={stylist.name} />
              <h1 className="show-font center title is-1">{stylist.name}</h1>
            </div>
          </div>

          <div className="columns info-show">
            <div className="card-show column is-half with-shadow">
              <h4 className="title is-4">About:</h4>
              <hr/>
              <p>{stylist.about}</p>
            </div>

            <div className="card-show column is-half with-shadow">
              <h4 className=" title is-4">Services:</h4>
              <hr/>
              <ul>
                {stylist.services.map(ser => (
                  <li className="columns" 
                    key={ser.id}>
                    <span className="service column is-half">{ser.name}:</span>
                    <span className="price coloum is-half">£{ser.price}</span></li>
                ))}
              </ul>
            </div>
          </div>
          <hr />

          <div className="center">
            <h3 className="show-font">Email me to book an appointment.</h3>
            <a className="show-button button with-shadow" href={`mailto:${stylist.name}@email.com?Subject=Hello%20again`} target="_top">Send Mail</a>
            {/* <Link className="button is-dark" to={`/stylist/${stylist.id}/edit`}>Edit Profile</Link> */}
          </div>

          <hr />
          {stylist.gallery[0] &&
          <div className="gallery section">
            <h1 className="show-font title is-1 center">My Gallery</h1>
            <div className="pic-gallery">
              {stylist.gallery.map((pic, id) => (
                <img className="image-gallery with-shadow" key={id} src={pic.image} alt={pic.name} />
              ))}
            </div>
          </div>}
          <hr />
          


        </div>
      </section>
    )
  }
}

export default HairdresserShow