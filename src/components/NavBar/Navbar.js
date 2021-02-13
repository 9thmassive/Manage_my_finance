//import { IconName } from 'react-icons/io';
//import { IconName } from 'react-icons/fa';
import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as GrIcons from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import './Navbar.css'
import { IconContext } from 'react-icons'
import Logo from './../leadingPage_proto/dist/images/logo.png'

function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    const [isShown, setIsShown] = useState(false)

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar col-12">                     {/*"navbar" before*/}
                    <img className="log" src={Logo} />              {/*"new*/}
                    <button className="btn  butt">Log Out</button>  {/*"new*/}
                    {/*before
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>*/}
                </div>

                {/*"no mouse before*/}
                <nav
                    className={sidebar ? 'nav-menu active' : 'nav-menu'}
                    onMouseEnter={() => setIsShown(true)}           
                    onMouseLeave={() => setIsShown(false)}        
                >
                    <ul className="nav-menu-items ulCl" onClick={showSidebar}>
                        {/*before 
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        */}
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}

                                >
                                {/*after li key
                                    before
                                    onMouseEnter={() => setIsShown(true)}
                                onMouseLeave={() => setIsShown(false)}*/}

                                    <Link to={item.path}>
                                        {item.icon}
                                        {isShown && (
                                            <span className="nav-bar-item">
                                                {item.title}
                                            </span>
                                        )}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar