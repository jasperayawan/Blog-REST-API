import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react';

export default function Header(){
    
    const [isOpenMenu, setOpenMenu] = useState(false);

    const clickHandling = () => {
        setOpenMenu(!isOpenMenu)
    }

    return(
        <header className='w-full bg-white shadow-md py-2 fixed top-0 left-0'>
            <nav className='flex justify-between items-center px-4'>
                <div className="logo">Blog App</div>
                <ul className='hidden md:flex gap-2'>
                    <li>
                        <Link>Home</Link>
                    </li>
                    <li>
                        <Link>Blogs</Link>
                    </li>
                    <li>
                        <Link>Post</Link>
                    </li>
                </ul>

                <div className='hidden md:flex gap-2'>
                    <button className='border-2 border-zinc-800 px-3 rounded-md'>Login</button>
                    <button className='bg-zinc-800 text-white px-3 rounded-md'>Register</button>
                </div>

                <button onClick={clickHandling} className='sm:flex md:hidden'>
                    <GiHamburgerMenu></GiHamburgerMenu>
                    </button>
                    <div className={`transition-all duration-300 ${isOpenMenu ? 'block' : 'hidden'} md:hidden px-3 py-2  absolute right-4 top-full mt-2 bg-white rounded-md shadow-md z-10`}>
                            <ul className=''>
                                <li>
                                    <Link>Home</Link>
                                </li>
                                <li>
                                    <Link>Blogs</Link>
                                </li>
                                <li>
                                    <Link>Post</Link>
                                </li>
                            </ul>

                            <div className='flex flex-col gap-2'>
                                <button className='border-2 rounded-md border-stone-500 py-1 px-4'>Login</button>
                                <button className='bg-stone-500 rounded-md text-white py-1 px-4'>Register</button>
                            </div>
                        </div>
                
            </nav>
        </header>
    )
}