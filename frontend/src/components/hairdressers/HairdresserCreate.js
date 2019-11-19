import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

import HairdresserForm from './HairdresserForm'


class HairdresserCreate extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        profile_pic: '',
        about: '',
        emergency: false,
        services: [],
        gallery: []
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/stylists', this.state.data, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        this.props.history.push(`/stylists/${res.data.id}`)
      })
      .catch(err => console.log(err))
  }


  render() {
    return (
      <section className="section blank">
        <div className="constainer">
          <h1 className="center title">Create Your Profile</h1>
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

export default HairdresserCreate
