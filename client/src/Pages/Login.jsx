import {Link, useNavigate} from 'react-router-dom'
import '../App.css'
import Header from '../components/header';
import { useState } from 'react';
import Axios from 'axios';

export default function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const Navigate = useNavigate();

    const loginUser = async (e) => {
      e.preventDefault();

      const loginFetch = Axios.create({
        baseURL: 'http://localhost:8000',
        method: 'POST',
        headers: {'Content-Type':'application/json'}
      })

      try{
        const response = await loginFetch.post('/api/auth/login',{
          email,password
        })

        if(response.status === 200){
          Navigate('/')
        }
      }
      catch(err){
        console.log(err)
      }

    }

    return (
      <div className="login_register min-h-screen flex justify-center items-center px-2">
        <Header/>
        <form onSubmit={loginUser}>
          <div className="grid grid-cols-2 rounded-md max-w-[600px] mx-auto bg-white overflow-hidden">
            <div>
              <img src="../src/assets/coffee4.jpg" alt="" className="object-cover"/>
            </div>
            <div className="flex justify-center items-center w-full h-full">
                <div className="flex flex-col gap-3 p-4">
                <h1 className="font-bold text-lg text-stone-700 text-center">
                    Login now!
                </h1>
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
                    Login
                </button>
                <span className="text-end">don't have an account?<Link to='/register' className="underline font-semibold">Register</Link></span>
                </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
  