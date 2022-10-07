import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import { db } from "../firebase/firebaseConfig";

const Blog = ({ blogUploadButton, handleDisplayUserAuthFeatures }) => {
  const [postLists, setPostList] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));

      setPostList(
        querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: {
              title: doc.data().title,
              category: doc.data().category,
              text: doc.data().text,
              author: doc.data().author,
              date: doc.data().date,
            },
          };
        })
      );
    };
    getPosts();
    handleDisplayUserAuthFeatures();
  }, []);


  return (
    <>
      <main className="row py-16">
        <header className="w-full flex justify-center">
          <h1 className="text-center text-4xl font-semibold text-blue-500 mb-10">
            Featured Blog Posts
          </h1>
          <button ref={blogUploadButton} className="bg-blue-300 py-2 hover:bg-blue-400 w-20 mb-10 rounded-full transition-all duration-200 border-2 border-black absolute right-48">
            Upload
          </button>
        </header>

        {postLists.map((post) => {
          return (
            <Post key={post} post={post} />
          );
        })}
      </main>
    </>
  );
};

export default Blog;
