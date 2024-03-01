import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Menu extends Component {
  render() {
    return (
        <div className=''>
            <NavLink
            className={'link'}
            to="/"
            style={({ isActive, isPending, isTransitioning }) => {
                return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "black",
                viewTransitionName: isTransitioning ? "slide" : ""
                };
            }}
            >
            Home
            </NavLink>
            <NavLink
            className={'link'}
            to="/productlist"
            style={({ isActive, isPending, isTransitioning }) => {
                return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "black",
                viewTransitionName: isTransitioning ? "slide" : ""
                };
            }}
            >
            Productlist
            </NavLink>
            <NavLink
            className={'link'}
            to="/sum"
            style={({ isActive, isPending, isTransitioning }) => {
                return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "black",
                viewTransitionName: isTransitioning ? "slide" : ""
                };
            }}
            >
            Sum
            </NavLink>
      </div>
    )
  }
}
