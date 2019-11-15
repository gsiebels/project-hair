import React from 'react'
import RegisterForm from './RegisterForm'
import axios from 'axios'

class RegisterHairdresser extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        username: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
    console.log(data)
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/register', this.state.data)
      .then(() => this.props.history.push('/login'))
      .catch(err => console.log(err))
    
  }

  render() {
    return (
      <section>
        <h1 className="center title">Register</h1>
        <RegisterForm
          data={this.state.data}
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit}
        />
      </section>
    )
  }
}

export default RegisterHairdresser