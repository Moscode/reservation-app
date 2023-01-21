import "./nav.css"

const Nav = () => {
  return (
    <div className='navbar'>
        <div className="navbar_container">
            <span className="navbar_container-logo">ReserveSpot</span>
            <div className="navbar_container-buttons">
              <button className="navbar-button">Login</button>
              <button className="navbar-button">Register</button>
            </div>
        </div>
    </div>
  )
}

export default Nav
