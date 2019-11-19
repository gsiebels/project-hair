import React from 'react'
import LoginForm from './LoginForm'
import axios from 'axios'
import Auth from '../../lib/auth'
import routes from '../../routes'

class LoginHairdresser extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        email: '',
        password: ''     
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
    axios.post('/api/login', this.state.data)
      .then(res => {
        Auth.setToken(res.data.token)
        this.props.history.push(routes.HOME)
      })
      .catch(err => console.log(err)) 
  }


  render() {
    return (
      <section className="blank">
        <h1 className="center title">Login</h1>
        <LoginForm
          data={this.state.data}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </section>
    )
  }
}

export default LoginHairdresser