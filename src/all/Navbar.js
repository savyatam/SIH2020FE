import React from 'react';

const Navbar = () => {
  return (
    <div className="pure-menu pure-menu-horizontal">
    <a href="/" className="pure-menu-heading pure-menu-link">Home</a>
    <ul className="pure-menu-list">
        <li className="pure-menu-item" ><a href="/api" className="pure-menu-link">Train Status</a></li>
        <li className="pure-menu-item" ><a href="/api2" className="pure-menu-link">Connecting Trains</a></li>
        <li className="pure-menu-item"><a href="/api3" className="pure-menu-link">Station Names</a></li>
    </ul>
</div>
  )
}

export default Navbar
