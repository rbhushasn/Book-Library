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
<div className={'shadow-sm p-1 mb-1 bg-white rounded '} >
     <nav
        className={'navbar navbar navbar-light background-color: #e3f2fd'}>

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
      </div>
    );
  }
};

export default connect((state)=> {
  return {
   
  };
})(Header);