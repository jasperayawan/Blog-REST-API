import HeroSection from "../components/HeroSection";
import Post from "../components/Post";
import Header from "../components/header";
import dataPost from "../components/PostData";
import { useEffect, useState } from "react";
import Axios from "axios";

export default function Layout() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const displayPost = async () => {
      const datap = await Axios.get("http://localhost:8000/api/posts");
      setPost(datap.data);
    };
    displayPost();
  }, []);
  return (
    <>
      <Header />
      <HeroSection />
      <div className="flex relative px-4 justify-center items-start">
        <div className="min-h-screen mt-5 -z-10">
            <div className="pr-4 max-w-4xl grid grid-cols-3 gap-2">
            {post.map((dataItem, index) => (
                <Post
                key={index}
                id={index}
                imageSrc="../src/assets/coffee4.jpg"
                title={dataItem.title}
                date={dataItem.createdAt}
                desc={dataItem.desc}
                />
            ))}
            </div>
        </div>

        <div className="sticky top-0  w-[300px] -z-10 pt-10">
            <div className="flex flex-col gap-2">
                <h1 className="text-center font-semibold">About me</h1>
                <div className="w-full h-[200px] relative flex flex-col gap-4">
                    <img src="../src/assets/coffee3.jpg" alt="" className="w-full h-full object-cover"/>
                    <div className="h-[50px] flex gap-3 justify-start items-center">
                        <img src="../src/assets/coffee3.jpg" alt="" className="rounded-full w-[40px] h-[40px] object-cover"/>
                        <span className="font-semibold">Ejayawan22@gmail.com</span>
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
