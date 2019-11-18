import React from 'react'
import { Link } from 'react-router-dom'
import routes from '../../routes'

const OpenedCard = ({ onClick, services }) => (
  <div className="card cards" onClick={onClick}> 
    <h2 className="name card-header">Services</h2>
    <ul>
      {services.map(ser => (
        <li className="" key={ser.id}>{ser.name}: £{ser.price}</li>
      ))}
    </ul>
  </div>
)

const ClosedCard = ({ onClick, name, profile_pic }) => (
  <div className="card cards" onClick={onClick}> 
    <h2 className="name card-header">{name}</h2>
    <img className="card-image" src={profile_pic} alt={name} />
  </div>
)

const HairdressersCard = ({ isOpen, ...props }) => (
  <>
  <div className=" column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
    {isOpen
      ? <OpenedCard {...props} />
      : <ClosedCard {...props} />
    }
    {isOpen && (
      <Link className="card-button button" to={routes.STYLISTS}>Profile</Link>
    )}
  </div>
  </>
)

export default HairdressersCard