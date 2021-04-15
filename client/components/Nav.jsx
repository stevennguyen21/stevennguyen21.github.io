import React, { useState, useEffect } from 'react';

const Nav = () => {
    const [sticky, setSticky] = useState(false);
    const [isActive, setActive] = useState(false);

    const listenScrollEvent = (e) => {
        if (window.scrollY > 700) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    }

    const handleToggle = () => {
        setActive(!isActive);
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
    })


    if (sticky) {
        return (
            <div className="nav-container">
                <header>
                    <nav className="navbar">
                        <div className="max-width">
                            <div className="logo">Steven Nguyen</div>
                            <ul className={`menu ${isActive ? 'active' : ''}`}>
                                <li><a href="#">About Me</a></li>
                                <li><a href="#">My Work</a></li>
                                <li><a href="#">Contact Me</a></li>
                            </ul>
                            <div className="menu-btn" onClick={handleToggle}>
                                <i className="fas fa-bars"></i>
                            </div>
                        </div>
                    </nav>
                </header>
    
                <div className="social-header scrolling">
                    <ul>
                        <li>
                            <a href="#">
                                <i className="fas fa-file" alt="resume"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/stevennguyen44">
                                <i className="fab fa-linkedin" alt="linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.github.com/stevennguyen21">
                                <i className="fab fa-github" alt="github"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )

    } else {
        return (
            <div className="nav-container">
                <header>
                    <nav className="navbar">
                        <div className="max-width">
                            <div className="logo">Steven Nguyen</div>
                            <ul className={`menu ${isActive ? 'active' : ''}`}>
                                <li><a href="#">About Me</a></li>
                                <li><a href="#">My Work</a></li>
                                <li><a href="#">Contact Me</a></li>
                            </ul>
                            <div className="menu-btn" onClick={handleToggle}>
                                <i className="fas fa-bars"></i>
                            </div>
                        </div>
                    </nav>
                </header>
    
                <div className="social-header">
                    <ul>
                        <li>
                            <a href="https://stevennguyenresume.s3-us-west-2.amazonaws.com/Steven+Nguyen_Resume.pdf">
                                <i className="fas fa-file" alt="resume"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/stevennguyen44">
                                <i className="fab fa-linkedin" alt="linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.github.com/stevennguyen21">
                                <i className="fab fa-github" alt="github"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Nav;