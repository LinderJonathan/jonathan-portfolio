import { NavLink } from "react-router-dom"

import instagramLogo from "../assets/Instagram_Glyph_White.png"
import linkedInLogo from "../assets/InBug-White.png"
import githubLogo from "../assets/github-mark-white.png"

const githubPath = "https://github.com/LinderJonathan"
const linkedInPath = "https://www.linkedin.com/in/linderjonathan/"
const instagramPath = "https://www.instagram.com/jonathanlindr/"

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer-row">
                    <ul className="imageLinks">
                        <li><NavLink to={githubPath}><img src={githubLogo} alt="" /></NavLink></li>
                        <li><NavLink to={linkedInPath}><img src={linkedInLogo} alt=""/></NavLink></li>
                        <li><NavLink to={instagramPath}><img src={instagramLogo} alt=""/></NavLink></li>
                    </ul>
                </div>
                <div className="footer-row">
                    <ul>
                        <li><NavLink to="/" end className={({isActive}) => (isActive ? "active" : "")}>Home</NavLink></li>
                        <li><NavLink to="/contact" end className= {({isActive}) => (isActive ? "active" : "")}>Contact</NavLink></li>
                        <li><NavLink to="/portfolio" end className= {({isActive}) => (isActive ? "active" : "")}>Portfolio</NavLink></li>
                    </ul>
                </div>
                <div className="footer-row">
                    <ul className="imageLinks">
                        <li>linderjonathan3@gmail.com</li>
                        <li>+46 73 388 75 07</li>
                        <li>Gotheburg, Sweden</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer