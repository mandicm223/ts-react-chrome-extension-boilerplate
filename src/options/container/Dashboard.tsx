import React, { useState, useRef, useEffect } from 'react'

// import { getData } from '../../background/background'

const Dashboard: React.FC<{}> = () => {
  useEffect(() => {
    chrome.runtime.sendMessage(
      {
        command: 'options',
      },
      (response) => {
        console.log(response)
      }
    )
  }, [])
  return (
    <div>
      <img src="icon.png" />
    </div>
  )
}

export default Dashboard
