import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";

class Header extends Component {
  render() {
    
    return (
      <div>
        <nav class="navbar navbar-light bg-danger" >
        <Link
          to={'/'}
          className={'navbar-brand'}>
          {'Book Library'}
        </Link>
</nav>
     <nav
        className={'navbar navbar-expand-lg navbar-light bg-light'}>

        <div
          className={'collapse navbar-collapse'}>
          <ul
            className={'navbar-nav mr-auto'}>
             <li
              className={'nav-item'}>
              <Link
                to={'/Book List'}
                className={'nav-link'}>
                {'Book List '}
              </Link>
              </li>
            <li
              className={'nav-item'}>
              <Link
                to={'/Add'}
                className={'nav-link'}>
                {'Add Book'}
              </Link>
              </li>
             
          </ul>
        </div>
      </nav>
      </div>
    );
  }
};

export default connect((state)=> {
  return {
   
  };
})(Header);