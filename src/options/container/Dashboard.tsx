import React, { useState, useRef, useEffect } from 'react'

import { getData } from '../../utils/api'

var data = []
const Dashboard: React.FC<{}> = () => {
  console.log()
  useEffect(() => {
    getData(data)
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
  }, [])
  return (
    <div>
      <img src="icon.png" />
    </div>
  )
}

export default Dashboard
