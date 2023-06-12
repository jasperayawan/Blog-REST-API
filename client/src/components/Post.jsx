import { useState } from "react"
import {AiFillHeart,AiOutlineHeart} from 'react-icons/ai'

export default function Post(props){
    const [reactPost,setReactPost] = useState(false)

    const REACT = () => {
        setReactPost(!reactPost)
    }
    return(
        <section className="">
            <div key={props.id} className="flex flex-col gap-2">
                    <div className="w-full h-[400px] relative overflow-hidden">
                        <img src={props.imageSrc} alt="" className="w-full h-full object-cover rounded-md"/>
                    </div>
                    <h1 className="font-semibold">{props.title}</h1>
                    <span className="text-zinc-400">{props.date}</span>
                    <p>{props.desc}</p>
                    <div>
                    <button 
                        type='button'
                        onClick={REACT}
                        className='cursor-pointer'>{ reactPost ? <AiFillHeart className="text-2xl text-red-500"/> : <AiOutlineHeart className="text-2xl text-red-500"/>}</button>    
                    </div> 
            </div>
        </section>
    )
}