/* eslint-disable camelcase */
import React from 'react'
import { Link } from 'react-router-dom'

const OpenedCard = ({ onClick, services }) => (
  <div className="card open-card " onClick={onClick}> 
    <h2 className="name card-header">Services</h2>
    <ul>
      {services.map(ser => (
        <li className="ser-list" key={ser.id}>{`- ${ser.name}: £${ser.price}`}</li>
      ))}
    </ul>
  </div>
)
const ClosedCard = ({ onClick, name, profile_pic }) => (
  <div className="center card card-theme" onClick={onClick}> 
    <h2 className="name card-header">{name}</h2>
    <img className="card-image" src={profile_pic} alt={name} />
  </div>
)


const HairdressersCard = ({ id, isOpen, ...props }) => (
  <>
  <div className="center column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
    {isOpen
      ? <OpenedCard {...props} />
      : <ClosedCard {...props} />
    }
    {isOpen && (
      <Link className="card-button button card" to={`/stylists/${id}`}>Find Out More!</Link>
    )}
  </div>
  </>
)

export default HairdressersCard