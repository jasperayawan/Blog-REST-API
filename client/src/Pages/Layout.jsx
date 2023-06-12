import Post from "../components/Post";
import { useContext, useEffect, useState } from "react";
import Axios from "axios";
import { Context } from "../context/Context";
import dataPost from "../components/PostData";

export default function Layout() {
  const [post, setPost] = useState([]);
  const {user} = useContext(Context)

  useEffect(() => {
    const displayPost = async () => {
      const datap = await Axios.get("http://localhost:8000/api/posts");
      setPost(datap.data);
    };
    displayPost();
  }, []);


  return (
    <>
      
      <div className="flex relative px-4 justify-center items-start">
        <div className="min-h-screen mt-5">
            <div className="md:pr-4 max-w-4xl md:grid-cols-1 grid  gap-2">
            {post.map((dataItem, index) => (
                <Post
                key={index}
                id={index}
                imageSrc={dataItem.photo}
                title={dataItem.title}
                date={dataItem.createdAt}
                desc={dataItem.desc}
                
                />
            ))}
            </div>
        </div>

        <div className="hidden md:flex sticky top-0  w-[300px] -z-10 pt-10">
            <div className="flex flex-col gap-2">
                <h1 className="text-center font-semibold">About me</h1>
                <div className="w-full h-[200px] relative flex flex-col gap-4">
                    <img src="../src/assets/coffee3.jpg" alt="" className="w-full h-full object-cover"/>
                    <div className="h-[50px] flex gap-3 justify-start items-center">
                        <img src="../src/assets/coffee3.jpg" alt="" className="rounded-full w-[40px] h-[40px] object-cover"/>
                        <span className="font-semibold">{user.email}</span>
                    </div>
                    <p>I am a passionate software developer/game developer/web designer/ with a deep interest in software engineer</p>
                    <h2 className="font-semibold">Favorites</h2>
                    <div className="grid grid-cols-2">
                        <div>
                            <span>Music</span>
                        </div>
                        <div>
                            <span>Reading</span>
                        </div>
                        <div>
                            <span>Programming</span>
                        </div>
                        <div>
                            <span>Sleeping</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
