import React, {useState} from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from './Firebase'
import {useNavigate} from 'react-router-dom'

const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSignIn = async (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password).then(()=>{
            alert("Account sucessfully created!!")
            navigate('/')
        }).catch((err) => {
            console.log(err)
        })
        
    }

  return (
    <div className= 'p-3 container border border-danger w-25' style={{marginTop: '10%'}}>
        <form onSubmit={handleSignIn}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label text-danger">Email address</label>
                <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label text-danger">Password</label>
                <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-danger">Sign Up</button>
            </form>
            <div className='mt-5'>
                <p className='text-danger'>Already have an account</p>
                <button type="submit" className="btn btn-danger" onClick={() => navigate('/Login')}>Log In</button>
            </div>
        </div>
  )
}

export default Signup
