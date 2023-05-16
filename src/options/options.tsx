import React from 'react'
import { createRoot } from 'react-dom/client'
import './options.css'
import App from './App'

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(<App />)
