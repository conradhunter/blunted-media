import { collection, doc, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase/firebaseConfig";

const Blog = ({
  blogUploadButton,
  handleDisplayUserAuthFeatures,
  postLists,
  setPostList,
}) => {
  
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
          <button
            ref={blogUploadButton}
            className="bg-blue-300 py-2 hover:bg-blue-400 w-20 mb-10 rounded-full transition-all duration-200 border-2 border-black absolute right-48"
          >
            Upload
          </button>
        </header>

        {postLists.map((post, i) => {
          return (
            <div
              key={i}
              className="post w-3/5 mx-auto border-2 border-black p-10 rounded-xl shadow-2xl mb-12"
            >
              <h1 className="text-3xl mb-4 text-blue-500 font-medium">
                {post.data.title}
              </h1>
              <p className="text-base mb-4">
                {post.data.text.slice(0, 200) + " ..."}
              </p>
              <Link to={`/post/${post.id}`}>
                <button className="bg-blue-300 py-1 hover:bg-blue-400 w-24 rounded-full transition-all duration-200 border-2 border-black">
                  View Post
                </button>
              </Link>
            </div>
          );
        })}
        ;
      </main>
    </>
  );
};

export default Blog;
