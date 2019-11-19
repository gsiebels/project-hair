/* eslint-disable camelcase */
import React from 'react'

const HairdresserForm = ({ handleChange, handleSubmit, name, profile_pic, about, services, emergency }) => (
  <section className="section">
    <div className=" columns is-mmobile">
      <div className="formTheme column is-6-tablet is-offset-3-tablet is-8-mobile is-offset-2-mobile card">
        <form onSubmit={handleSubmit}>
          <div>

            <div className="field">
              <label className="label">Name</label>
              <input
                className="input"
            
                name="name"
                id="name"
                placeholder="Name"
                onChange={handleChange}
                value={name}
              />
            </div>

            <div className="field">
              <label className="label">Profile Picture</label>
              <input
                className="input"
                name="profile_pic"
                id="profile_pic"
                placeholder="Image URL"
                onChange={handleChange}
                value={profile_pic}
              />
            </div>

            <div className="field">
              <label className="label">About</label>
              <input
                className="textarea"
                name="about"
                id="about"
                placeholder="About"
                onChange={handleChange}
                value={about}
              />
            </div>

            <div className="field">
              <label className="checkbox label">
                Emergency Haircuts: 
                <input
                  type="checkbox"
                  name="about"
                  placeholder="About"
                  onChange={handleChange}
                  value={emergency}
                />
              </label>
            </div>

            <div className="field">
              <label className="label">Services</label>
              <input
                className="input"
                name="name"
                id="services"
                placeholder="Service"
                onChange={handleChange}
                value={services}
              />
              <label className="label">
                £
                <input
                  className="input"
                  name="price"
                  placeholder="Price"
                  onChange={handleChange}
                  calue={services}
                />
              </label>
            </div>

          </div>
          <br/>
          <button className="button is-dark">Submint</button>
        </form>
      </div>
    </div>
  </section>
)

export default HairdresserForm