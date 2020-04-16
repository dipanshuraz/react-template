import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./NavBarPublic.module.css";


function NavPublic() {
  // { location: { pathname } }
  // if (location.startsWith('/dash')) return null
  return (
    <div className={styles.navLinks}>
      <Link to='/'>Home</Link>
      <Link to='/extra'>Extra</Link>
      <Link to='/about'>About Us</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/login'>Login</Link>
      <Link to='/register'>Register</Link>
    </div>
  )
}

export default NavPublic
