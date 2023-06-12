import {Link} from 'react-router-dom'
import '../App.css'
import Header from '../components/header';

export default function Register() {
  return (
    <div className="login_register min-h-screen flex justify-center items-center px-2">
        <Header/>
      <form className=''>
        <div className="grid grid-cols-2 rounded-md max-w-[600px] mx-auto bg-white overflow-hidden">
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
              placeholder="Username"
              className="border-2 border-stone-400 rounded-md px-3"
            />
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
              Register
            </button>
            <Link to='/login' className='underline text-end'>Already have an account?</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
