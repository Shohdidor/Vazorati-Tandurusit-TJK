import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Page/Home/Home'
import AboutTJK from './Page/AboutTJK/AboutTJK'
import Vazorat from './Page/Vazorat/Vazorat'
import Location from './Page/Location/Location'

function App() {
  const router = createBrowserRouter ( [{
    path : "/",
    element : <Layout/>,
    children : [ 
      {
        index : true ,
        element : <Home/>
      },
      {
        path : "aboutTJK",
        element : <AboutTJK/>
      },
      {
        path : "vazorat",
        element : <Vazorat />
      },
      {
        path : "Location",
        element : <Location />
      }
    ]
  }
  ])
  return (
    <>

    <div>
    <RouterProvider router={router} />
    </div>
    </>
  )
}

export default App
