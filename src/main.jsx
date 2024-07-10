import React from 'react'
import ReactDOM from 'react-dom/client'


import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from './Layout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <Router>
          <Routes>
              <Route index path='/' element={<Layout/>}  />
              
          </Routes>
       </Router>
  </React.StrictMode>,
)
