import {Link, useNavigate} from 'react-router-dom'
import '../App.css'
import Header from '../components/header';
import { useState } from 'react';
import Axios from 'axios'

export default function Register() {
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const Navigate = useNavigate()

  const registerUser = async (e) => {
    e.preventDefault();

    const register = Axios.create({
      baseURL: 'http://localhost:8000',
      headers: {'Content-Type':'application/json'},
      method: 'POST',
    })

    try{
      const res = await register.post('/api/auth/register',{
        username,email,password
      })

      if(res.status === 200){
        Navigate('/login')
      }
    }
    catch(err){
      console.log(err)
    }

  }

  return (
    <div className="min-h-screen flex justify-center items-center px-2">
        <Header/>
      <form className='' onSubmit={registerUser}>
        <div className="shadow-lg grid grid-cols-2 rounded-md max-w-[600px] mx-auto bg-white overflow-hidden">
          <div>
            <img src="../src/assets/coffee4.jpg" alt="" className="object-cover"/>
          </div>
          <div className="flex flex-col gap-3 p-4">
            <h1 className="font-bold text-lg text-stone-700 text-center">
              Register now!
            </h1>
            <label className="font-semibold text-stone-500">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="border-2 border-stone-400 rounded-md px-3"
            />
            <label className="font-semibold text-stone-500">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="border-2 border-stone-400 rounded-md px-3"
            />
            <label className="font-semibold text-stone-500">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="border-2 border-stone-400 rounded-md px-3"
            />
            <button
              type="submit"
              className="bg-stone-800 w-full text-white rounded-md px-3 py-1"
            >
              Register
            </button>
            <Link to='/login' className='underline text-end'>Already have an account?</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
