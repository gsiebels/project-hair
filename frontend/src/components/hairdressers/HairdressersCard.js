/* eslint-disable camelcase */
import React from 'react'
import { Link } from 'react-router-dom'

const OpenedCard = ({ onClick, services }) => (
  <div className="card open-card with-shadow" onClick={onClick}> 
    <h2 className="name card-header">Services</h2>
    <ul className="card-list">
      {services.map(ser => (
        <li className="card-ser columns" 
          key={ser.id}>
          <span className="card-ser column is-half">{ser.name}:</span>
          <span className="card-price coloum is-half">£{ser.price}</span></li>
      ))}
    </ul>
  </div>
)
const ClosedCard = ({ onClick, name, profile_pic }) => (
  <div className="center card card-theme with-shadow" onClick={onClick}> 
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
      <Link className="card-button button card with-shadow" to={`/stylists/${id}`}>Find Out More!</Link>
    )}
  </div>
  </>
)

export default HairdressersCard