import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

import HairdresserForm from './HairdresserForm'

class HairdresserEdit extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        name: '',
        profile_pic: '',
        about: '',
        emergency: false,
        services: [],
        gallery: []
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleChange.bind(this)
  }
  componentDidMount() {
    const stylistId = this.props.match.params.id
    axios.get(`/api/stylist${stylistId}`)
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err))
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    const stylistId = this.props.match.params.id
    axios.put(`/api/stylists/${stylistId}`, this.state.data, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        this.props.history.push(`/stylists/${res.data._id}`)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <section className="section blank">
        <div>
          <h2>Edit Profile</h2>
          <HairdresserForm 
            data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </section>
    )
  }
}

export default HairdresserEdit