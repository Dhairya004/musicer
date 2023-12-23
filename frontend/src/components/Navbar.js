import React from 'react';

function Navbar() {
  return (
    <>
      <ul className="nav justify-content-center" style={{fontSize: '18px', marginTop: '10px'}}>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </>
  )
}

export default Navbar;