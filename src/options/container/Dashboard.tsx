import React, { useState, useRef, useEffect } from 'react'

const addData = (d) => {
  chrome.storage.local.get(['data'], function (result) {
    d = result.data || []
    console.log(d)
    return d
  })
}
var data = addData(data)

console.log(data + 'OVOOOO JE DATAAA')

// const addData2 = () => {
//   for (let i = 0; i < data.length; i++) {
// const { domainName, favicon, timestamp, url, testingText } = data[i]
//   }
// }

const Dashboard = () => {
  return <>{}</>
}

export default Dashboard
