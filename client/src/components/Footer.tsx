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
                <div className="logos">
                    <ul className="imageLinks">
                        <li>
                            <NavLink to={githubPath}>
                                <img
                                    src={githubLogo}
                                    alt=""
                                />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={linkedInPath}>
                                <img
                                    src={linkedInLogo}
                                    alt=""
                                />
                            </NavLink>
                        </li>
                        <li>

                            <NavLink to={instagramPath}>
                                <img
                                    src={instagramLogo}
                                    alt=""
                                />
                            </NavLink>
                        </li>
                    </ul>
                </div>
                
                // TODO: add section for extra contact info

            </div>
        </>
    )
}

export default Footer