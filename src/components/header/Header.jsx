import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import "./header.css"

const Header = () => {
  return (
    <div className='header'>
        <div className="header_container">
        <div className="header_list">
        <div className="header_list-item active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
        </div>
        <div className="header_list-item">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
        </div>
        <div className="header_list-item">
            <FontAwesomeIcon icon={faCar} />
            <span>Transportation</span>
        </div>
        <div className="header_list-item">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
        </div>
        <div className="header_list-item">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
        </div>
        </div>
        <h1 className="header-title">All you need for a good travel experience. It's perfect.</h1>
        <p className='header-description'>We give you a discount of 10% of all your total expenses - If you use all our services.</p>
        <button className="header-button">Sign in/Register</button>
        <div className="header_search">
            <div className="header_search-item">
                <FontAwesomeIcon icon={faBed} className="header_search-icon"/>
                <input type="text" placeholder='Where are you heading?' className='header_search-input'/>
            </div>
            <div className="header_search-item">
                <FontAwesomeIcon icon={faCalendarDays} className="header_search-icon"/>
                <span className="header_search-title">Date to Date</span>
            </div>
            <div className="header_search-item">
                <FontAwesomeIcon icon={faPerson} className="header_search-icon"/>
                <span className="header_search-title">2 Adults 2 Children 1 Room</span>
            </div>
            <div className="header_search-item">
                <button className="header_search-button">Search</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Header