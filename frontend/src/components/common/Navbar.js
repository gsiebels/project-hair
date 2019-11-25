import React from 'react'
import { Link } from 'react-router-dom' //IMPORT WITHROUTER 
import Auth from '../../lib/auth'
import routes from '../../routes'

class Navbar extends React.Component {
  constructor() {
    super()

    this.state = { navOpen: false }
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  toggleNavbar() {
    this.setState({ navOpen: !this.state.navOpen })
  }

  handleLogout() {
    Auth.logout()
    this.props.history.push(routes.HOME)
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.location.pathname !== prevProps.location.pathname) {
  //     this.setState({ navOpen: false })
  //   } 

  render() {
    return (
      <nav className="navbarTheme navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to={routes.HOME}>
              <img className="logo-nav" src="https://i.imgur.com/ODdHVV6.png" />
            </Link>
            <a 
              className={`navbar-burger ${this.state.navOpen ? 'is-active' : ''}`}
              onClick={this.toggleNavbar}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        </div>
        <div className={`navbar-menu ${this.state.navOpen ? 'is-active' : ''}`}>
          <div className="navbar-end"></div>
          <Link className="navbar-font navbar-item" to={routes.STYLISTS}>Stylists</Link>
          {/* <Link className="navbar-item" to="/stylists/:id">My Profile</Link> */}
          {/* <Link className="navbar-font navbar-item" to={routes.LOGIN}>Login</Link> */}
          {/* <Link className="navbar-font navbar-item" to={routes.REGISTER}>Register</Link> */}
          {/* <a onClick={this.handleLogout} className="navbar-font navbar-item">Logout</a> */}
        
        </div>
      </nav>
    )
  }
}

export default Navbar