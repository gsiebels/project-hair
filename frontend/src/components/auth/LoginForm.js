import React from 'react'

const LoginForm = ({ data, handleChange, handleSubmit }) => (
  
  <section className="section">
    <div className="columns is-mobile">
      <div className="formTheme column is-6-tablet is-offset-3-tablet is-8-mobile is-offset-2-mobile card">
        <form onSubmit={handleSubmit}>

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

          <br/>
          <button className="button is-success">Submit</button>
        </form>
      </div>
    </div>
  </section> 
)

export default LoginForm