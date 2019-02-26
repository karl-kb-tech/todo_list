import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Nav extends React.Component {

  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <div className="navbar-menu">
              <div className="navbar-end">
                <Link to='/' className="navbar-item">Home</Link>
                <Link className="navbar-item" to='/newtodo'>Create New Todo</Link>
                <Link className="navbar-item" to='/priority/:priority'>Sort Todo By Priority</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default connect()(Nav)