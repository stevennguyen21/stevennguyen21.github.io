import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Mainpage = () => {
    const [showMenu, setMenu] = useState(false);

    const toggleMenu = () => {
        console.log('clicked')
        setMenu(!showMenu);
    }

    if (!showMenu) {
        return (
            <header>
                <div className="menu-btn" onClick={toggleMenu}>
                    <div className="btn-line"></div>
                    <div className="btn-line"></div>
                    <div className="btn-line"></div>
                </div>
                <nav className="menu">
                    <div className="menu-branding">
                        <div className="portrait"></div>
                    </div>
                    <ul className="menu-nav">
                        <li className="nav-item">
                            <a href="/" className="nav-link">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/about" className="nav-link">
                                About Me
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/projects" className="nav-link">
                                Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/contact" className="nav-link">
                                Contact Me
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        )

    } else {
        return (
            <header>
                <div className="menu-btn close" onClick={toggleMenu}>
                    <div className="btn-line"></div>
                    <div className="btn-line"></div>
                    <div className="btn-line"></div>
                </div>
                <nav className="menu">
                    <div className="menu-branding show">
                        <div className="portrait"></div>
                    </div>
                    <ul className="menu-nav show">
                        <li className="nav-item show current">
                            <a href="/" className="nav-link">
                                Home
                            </a>
                        </li>
                        <Link to="/about">
                            <li className="nav-item show">
                                <a className="nav-link">
                                    About Me
                                </a>
                            </li>

                        </Link>
                        <li className="nav-item show">
                            <a href="/projects" className="nav-link">
                                Projects
                            </a>
                        </li>
                        <li className="nav-item show">
                            <a href="/contact" className="nav-link">
                                Contact Me
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        )        
    }
}

export default Mainpage;