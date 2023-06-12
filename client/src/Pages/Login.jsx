import {Link} from 'react-router-dom'
import '../App.css'
import Header from '../components/header';

export default function Login() {
    return (
      <div className="login_register min-h-screen flex justify-center items-center px-2">
        <Header/>
        <form>
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
                    placeholder="Email"
                    className="border-2 border-stone-400 rounded-md px-3"
                />
                <label className="font-semibold text-stone-500">Password</label>
                <input
                    type="password"
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
  