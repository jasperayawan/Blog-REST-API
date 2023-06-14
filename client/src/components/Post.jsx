import { useState } from "react"
import {AiFillHeart,AiOutlineHeart} from 'react-icons/ai'
import { formatISO9075 } from 'date-fns'
import Axios from 'axios'

export default function Post(props){
    const [reactPost,setReactPost] = useState(false)
    const [isUserReact, setIsUserReact] = useState([])
    const PublicFolder = "localhost:5173/images/"

    const REACT = async() => {
        
        try{
            const fetchData = await Axios.post('http://localhost:8000/api/reactuser')
            console.log(fetchData)
            setIsUserReact(fetchData.data)
            setReactPost(!reactPost)
        }
        catch(err){
            console.log(err)
        }
        
    }
    return(
        <section className="">
            <div key={props.id} className="flex flex-col gap-2">
                    <div className="w-full h-[400px] relative overflow-hidden">
                        <img src={props.imageSrc} alt="" className="w-full h-full object-cover object-center rounded-md"/>
                    </div>
                    <h1 className="font-semibold">{props.title}</h1>
                    <time className="text-zinc-400">{formatISO9075(new Date(props.date))}</time>
                    <p>{props.desc}</p>
                    <div>
                    <div className="flex gap-2">
                        <button 
                            type='button'
                            onClick={REACT}
                            value={reactPost}
                            className='cursor-pointer'>{ reactPost ? <AiFillHeart className="text-2xl text-red-500"/> : <AiOutlineHeart className="text-2xl text-red-500"/>}
                        </button> 
                    <span>{isUserReact.react}</span>  
                    </div>   
                    </div> 
            </div>
        </section>
    )
}