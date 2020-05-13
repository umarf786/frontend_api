import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <a className='navbar-brand' href='#'>
          Frontend API
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/'>
                Users <span className='sr-only'>(current)</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/add'>
                Add User
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/update'>
                Update User
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/delete'>
                Delete User
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
