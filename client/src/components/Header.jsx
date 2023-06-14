import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useContext, useState } from "react";
import { Context } from "../context/Context";

export default function Header() {
  const { user, dispatch } = useContext(Context);
  const [isOpenMenu, setOpenMenu] = useState(false);
  const Navigate = useNavigate();

  const clickHandling = () => {
    setOpenMenu(!isOpenMenu);
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    Navigate("/login");
  };

  return (
    <>
    {user ? (   
    <header className="w-full bg-white shadow-md py-2 fixed top-0 left-0 z-50">
      <nav className="flex justify-between items-center px-4">
        
          <>
            <div className="logo">
              <Link to="/home" className="font-semibold">Blog App</Link>
            </div>
            <ul className="hidden md:flex gap-2">
              <li>
                <Link to="/home" className="font-semibold text-zinc-500">Home</Link>
              </li>
              <li>
                <Link className="font-semibold text-zinc-500">Blogs</Link>
              </li>
              <li>
                <Link className="font-semibold text-zinc-500">Post</Link>
              </li>
              <li>
                  <Link to='/createpost' className="font-semibold text-zinc-500">Create/Post</Link>
              </li>
            </ul>
            <div className="hidden md:flex gap-2">
              <div className="flex justify-center items-center gap-2">
                <Link onClick={handleLogout} to="/login" className="ring-1 ring-slate-900 px-3 rounded-md hover:bg-slate-900 hover:text-zinc-200 hover:duration-300">
                  Logout
                </Link>
                <img
                  src={user.profilePic}
                  alt=""
                  className="w-[40px] h-[40px] rounded-full object-cover cursor-pointer"
                />
                <span>{user.username}</span>
              </div>
            </div>

            <button onClick={clickHandling} className="sm:flex md:hidden">
              <GiHamburgerMenu></GiHamburgerMenu>
            </button>
            <div
              className={`transition-all duration-300 ${
                isOpenMenu ? "block" : "hidden"
              } md:hidden px-3 py-2  absolute right-4 top-full mt-2 bg-white rounded-md shadow-md z-10`}
            >
              <ul className="">
                <li>
                  <Link className="font-semibold text-zinc-500">Home</Link>
                </li>
                <li>
                  <Link className="font-semibold text-zinc-500">Blogs</Link>
                </li>
                <li>
                  <Link className="font-semibold text-zinc-500">Post</Link>
                </li>
                <li>
                  <Link to='/createpost' className="font-semibold text-zinc-500">Create/Post</Link>
                </li>
              </ul>

              <div className="flex flex-col gap-2">
                <div className="flex flex-col justify-center items-center gap-2">
                  <Link onClick={handleLogout} to="/login" className="">
                    Logout
                  </Link>
                  <img
                    src={user.profilePic}
                    alt=""
                    className="w-[40px] h-[40px] rounded-full object-cover"
                  />
                  <span>{user.username}</span>
                </div>
              </div>
            </div>
          </>
       
      </nav>
    </header>
    ) : null}
    </>
  );
}
