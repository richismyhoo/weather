import React from 'react'
import './Header.css'

function Header() {

        return (
                <><nav className="app-navigation">
                <ul>
                    <div className="icon-container-parent">
                        <div className="icon-container">
                        </div>
                    </div>
                    <li><a>Weather</a></li>
                    <li><a>Settings</a></li>
                    <li><a>Map</a></li>
                    <li><a>Links</a></li>
                </ul>
            </nav>
            

            </>
        )
}

export default Header