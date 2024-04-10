import React, { useState } from 'react'
import { auth } from './Firebase'
import { createUserWithEmailAndPassword} from 'firebase/auth'
import Login from './Login'
import Signup from './Signup'

const Auth = () => {
  const [isSignedUp, setIsSignedUp] = useState(true)

  return (
    <>
    {
        isSignedUp ? <Signup/> : <Login/>
    }
    </>
  )
}

export default Auth
