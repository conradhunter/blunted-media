import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <>
      <div className="post w-3/5 mx-auto border-2 border-black p-10 rounded-xl shadow-2xl mb-12">
        <h1 className="text-3xl mb-4 text-blue-500 font-medium">
          {post.data.title}
        </h1>
        <p className="text-base mb-4">
          {post.data.text.slice(0, 200) + " ..."}
        </p>
        <Link to={`post/${post.id}`}>
          <button className="bg-blue-300 py-1 hover:bg-blue-400 w-24 rounded-full transition-all duration-200 border-2 border-black">
            View Post
          </button>
        </Link>
      </div>
    </>
  );
};

export default Post;
