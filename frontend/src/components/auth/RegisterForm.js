import React from 'react'

const RegisterForm = ({ data, handleChange, handleSubmit }) => (
  
  <section className="section">
    <div className="columns is-mobile">
      <div className="formTheme column is-6-tablet is-offset-3-tablet is-8-mobile is-offset-2-mobile card">
        <form onSubmit={handleSubmit}>

          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input 
                className="input"
                name="username"
                id="username"
                placeholder="Username"
                onChange={handleChange}
                value={data.username}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input 
                className="input"
                name="email"
                id="email"
                placeholder="Email"
                onChange={handleChange}
                value={data.email}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input 
                type="password"
                className="input"
                name="password"
                id="password"
                placeholder="Password"
                onChange={handleChange}
                value={data.password}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Password Confirmation</label>
            <div className="control">
              <input 
                type="password"
                className="input"
                id="password_confirmation"
                name="password_confirmation"
                placeholder="Password Confirmation"
                onChange={handleChange}
                value={data.passwordConfirmation}
              />
            </div>
          </div>

          <br/>
          <button className="button is-success">Submit</button>
        </form>
      </div>
    </div>
  </section> 
)

export default RegisterForm