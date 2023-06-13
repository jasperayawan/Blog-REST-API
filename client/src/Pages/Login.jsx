import {Link, useNavigate} from 'react-router-dom'
import '../App.css'
import Header from '../components/header';
import { useContext, useRef, useState } from 'react';
import Axios from 'axios';
import { Context } from '../context/Context';
import '../App.css'

export default function Login() {
  const emailRef = useRef();
  const passRef = useRef();
  const Navigate = useNavigate();

  const { user,dispatch, isFetching } = useContext(Context); 

    const loginUser = async (e) => {
      e.preventDefault();

      dispatch({type:"LOGIN_START"});
      try{
        const response = await Axios.post('http://localhost:8000/api/auth/login',{
          email: emailRef.current.value,
          password: passRef.current.value
        })
        dispatch({type:"LOGIN_SUCCESS", payload:response.data});
        if(response.status === 200){
          Navigate('/home')
        }
      }
      catch(err){
        dispatch({type:"LOGIN_FAILURE"});
      }

    };

    return (
      <div className="">
  
        <form onSubmit={loginUser}>
          <div className="flex bg-white overflow-hidden">
            <div className='left-img w-1/2 h-screen hidden md:block'>
              <h1 className='text-white'>.</h1>
            </div>
            <div className="flex justify-center items-center h-screen md:w-1/2 w-full">
                <div className="flex flex-col gap-3 p-4">
                <h1 className="font-bold text-lg text-stone-700 text-center">
                    Login now!
                </h1>
                <label className="font-semibold text-stone-500">Email</label>
                <input
                    type="email"
                    ref={emailRef}
                    placeholder="Email"
                    className="border-2 border-stone-400 rounded-md px-3 py-1"
                />
                <label className="font-semibold text-stone-500">Password</label>
                <input
                    type="password"
                    ref={passRef}
                    placeholder="Password"
                    className="border-2 border-stone-400 rounded-md px-3 py-1"
                />
                <button
                    type="submit"
                    className="loginButton bg-stone-800 w-full text-white rounded-md px-3 py-1"
                    disabled={isFetching}
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
  