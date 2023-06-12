

export default function Post(props){
    return(
        <section className="">
            <div key={props.id} className="flex flex-col gap-2">
                    <div className="w-full h-[200px] relative overflow-hidden">
                        <img src={props.imageSrc} alt="" className="w-full h-full object-cover"/>
                    </div>
                    <h1 className="font-semibold">{props.title}</h1>
                    <span className="text-zinc-400">{props.date}</span>
                    <p>{props.desc}</p>
            </div>
        </section>
    )
}