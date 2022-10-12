import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase/firebaseConfig";

const UploadBlog = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");

  const postCollection = collection(db, "posts");
  const navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postCollection, {
      title,
      category,
      text,
      date,
      author,
      image,
    });
    navigate("/blog");
  };

  return (
    <>
      <main className="row py-16">
        <h1 className="text-center text-4xl font-semibold text-blue-500 mb-10">
          Upload your blog post to be featured on Blunted!
        </h1>

        <form className="flex flex-row flex-wrap gap-x-10 justify-center">
          <div className="w-3/4 flex justify-between gap-x-8">
            <input
              onChange={(event) => {
                setTitle(event.target.value);
              }}
              placeholder="Title"
              type="text"
              className="bg-gray-200 mb-2 w-1/2 py-1 px-2 rounded outline-none border-2 border-gray-500"
            />
            <input
              onChange={(event) => {
                setCategory(event.target.value);
              }}
              type="text"
              placeholder="Category (i.e. Skiing, Snowboarding, Travel)"
              className="bg-gray-200 mb-2 w-1/2 py-1 px-2 rounded outline-none border-2 border-gray-500"
            />
          </div>
          <div className="w-3/4">
            <textarea
              onChange={(event) => {
                setText(event.target.value);
              }}
              placeholder="Your Blog Post"
              type="text"
              className="bg-gray-200 mb-2 w-full py-1 px-2 rounded outline-none border-2 border-gray-500 h-36"
            />
          </div>
          <div className="w-3/4 flex justify-between gap-x-8">
            <input
              onChange={(event) => {
                setDate(event.target.value);
              }}
              placeholder="Date"
              type="date"
              className="bg-gray-200 mb-2 w-1/2 py-1 px-2 rounded outline-none border-2 border-gray-500"
            />
            <input
              onChange={(event) => {
                setImage(event.target.value);
              }}
              placeholder="Image URL"
              type="text"
              className="bg-gray-200 mb-2 w-1/2 py-1 px-2 rounded outline-none border-2 border-gray-500"
            />
          </div>
          <div className="w-full flex justify-center">
            <input
              onChange={(event) => {
                setAuthor(event.target.value);
              }}
              placeholder="Author"
              type="text"
              className="bg-gray-200 mb-2 w-1/2 py-1 px-2 rounded outline-none border-2 border-gray-500"
            />
          </div>
          <button
            type="button"
            onClick={createPost}
            className="bg-blue-300 py-1 hover:bg-blue-400 w-24 rounded-full transition-all duration-200 border-2 border-black"
          >
            Post
          </button>
        </form>
      </main>
    </>
  );
};

export default UploadBlog;
