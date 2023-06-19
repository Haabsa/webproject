import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div>
            <header className ="header">
            <span className="text-muted">
                E-learning System</span>
            
            </header>
        </div>
                    // {/* <a href="#">E-learning<span>System</span></a> */}
                    
        );
    }
}

export default Header;
