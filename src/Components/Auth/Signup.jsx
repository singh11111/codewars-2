import React, {useState} from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from './Firebase'

const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSignIn = () => {
        try {
            createUserWithEmailAndPassword(auth, email, password)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className= 'mt-5 p-3 container border w-25'>
        <form onSubmit={handleSignIn}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
  )
}

export default Signup
