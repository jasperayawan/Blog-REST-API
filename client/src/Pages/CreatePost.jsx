import Header from "../components/header";
import Banner from "../assets/coffee5.jpg";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useContext, useState } from "react";
import Axios from "axios";
import { Context } from "../context/Context";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;

      try {
        await Axios.post("http://localhost:8000/api/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await Axios.post("http://localhost:8000/api/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto pb-5 px-4">
        <div className="max-w-5xl mx-auto pt-20 mb-5">
          {file && (
            <>
              <div className="overflow-hidden relative">
                <img
                  src={URL.createObjectURL(file)}
                  alt=""
                  className="rounded-md h-[400px] w-full object-cover"
                />
              </div>
            </>
          )}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="max-w-5xl mx-auto flex flex-col gap-2">
            <div className="flex gap-2">
            <label htmlFor="fileInput" className="cursor-pointer">
                <BsFillPlusCircleFill />
              </label>
              <input type="file" id="fileInput" style={{ display: "none" }} onChange={e => setFile(e.target.files[0])}/>
            </div>
            <input
              type="text"
              placeholder="Title"
              className="p-2"
              autoFocus={true}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div>
              <textarea
                type="text"
                className="w-full p-2 bg-zinc-100 rounded-md"
                placeholder="Tell your story..."
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-slate-800 text-zinc-400 px-2 py-1 rounded-md"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
