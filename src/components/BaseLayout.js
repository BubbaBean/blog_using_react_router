import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class BaseLayout extends Component{
  render(){
    return(


      <div className="wrapper">
        <nav className="navigation">
        <NavLink activeClassName="selected"
        className="nav-link" exact to="/create"><div className="link_box">Create Post</div></NavLink>

          <NavLink activeClassName="selected" className="nav-link" exact to="/"><div className="link_box">Main</div></NavLink>

          <NavLink activeClassName="selected"
          className="nav-link" exact to="/show"><div className="link_box">Show Posts</div></NavLink>
        </nav>

        {this.props.children}

      </div>
    )
  }
}
