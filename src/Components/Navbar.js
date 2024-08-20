import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light justify-content-between navbar-dark bg-transparent">
    <a className="navbar-brand"href="/">{props.title}</a>
    </nav>
  )
}