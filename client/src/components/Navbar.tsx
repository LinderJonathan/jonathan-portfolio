import { NavLink } from 'react-router-dom'
import '../App.css'

function Navbar() {
// TODO: use NavLink to put "isActive" class on the current tab

  return (
    <>
    <nav className="navbar">
        <ul>
            <li><NavLink to="/" end className={({isActive}) => (isActive ? "active" : "")}>Home</NavLink></li>
            <li><NavLink to="/contact" end className= {({isActive}) => (isActive ? "active" : "")}>Contact</NavLink></li>
            <li><NavLink to="/portfolio" end className= {({isActive}) => (isActive ? "active" : "")}>Portfolio</NavLink></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar