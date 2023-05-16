import React, { useState, useRef, useEffect } from 'react'

const Heading = () => {
  return (
    <>
      <div>
        <header>
          <div className="logo-container">
            <img className="logo" src="logo.svg" alt="logo" />
          </div>
        </header>
        <div className="header">
          <h1 className="heading">My Visited Websites</h1>
          <h2 className="subheading">A daily report of my browsing history</h2>
        </div>
        <div className="container" id="container"></div>
        <div className="footer">
          <p>Made by Marko Mandic</p>
        </div>
      </div>
    </>
  )
}

export default Heading
