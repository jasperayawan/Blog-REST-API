import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <header>
            <nav>
                <ul>
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
            </nav>
        </header>
    )
}