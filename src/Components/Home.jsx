import React from 'react'
import Navbar from './Navbar'
import './Home.css'
import {useNavigate} from 'react-router-dom'
import { auth } from './Auth/Firebase'

const Home = () => {
  const navigate = useNavigate()

  const handleForward = () => {
    if(auth?.currentUser)
       navigate('/Main')

    else{
      alert("Please Login to continue!!")
    }

  }

  return (
    <div >
        <Navbar/>
        <h1 className='text-center text-light' style={{marginTop: '20vh'}}>Welcome to CodeWars</h1>
        <button className='btn btn-danger mt-3' style={{display:'block', margin:'auto'}} onClick={handleForward}>Continue to the App</button>
    </div>
  )
}

export default Home
