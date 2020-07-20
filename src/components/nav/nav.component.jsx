import React from 'react';

import './nav.styles.scss';
import ScrollspyNav from 'react-scrollspy-nav';

const Nav = () => (
    <nav className="navbar">
        
            <ScrollspyNav  
                scrollTargetIds={["projects", "blogs"]} 
                activeNavClass="is-current"
                scrollDuration="800"
                
            >
                <ul className="links">
                    <li className="link-item">
                        <a href="#projects">
                            <span className="number">01</span>
                            <span className="line-spacer"></span>
                            <span className="text">Projects</span>
                        </a>
                    </li>
                    <li className="link-item">
                        <a href="#blogs">
                            <span className="number">02</span>
                            <span className="line-spacer"></span>
                            <span className="text">Blogs</span>
                        </a>
                    </li>

                </ul>
            </ScrollspyNav>
        
    </nav>
)

export default Nav;