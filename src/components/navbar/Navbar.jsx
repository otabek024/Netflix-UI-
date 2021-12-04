import { Search, Notifications, ArrowDropDown } from '@material-ui/icons'
import React, {useState} from 'react'
import "./navbar.scss"

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar "}>
      <div className="container">
        <div className="left">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" 
            alt=""
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon"/>
          <span>KID</span>
          <Notifications className="icon" />
          <img src="https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfXcIqTBOGm5dY0aAvM_ZyUR6SMwIEIJ2sreX_dyiNQQCMZavTrkTPXQ5B0FCRJerX8tKne3xh2Z8zNXmBMX5oGBArQ3.jpg?r=e8b" alt="" />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
