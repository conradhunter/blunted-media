import React from "react";
import { useParams } from "react-router-dom";

const Post = ({ postLists }) => {
  const { id } = useParams();

  return (
    <>
      <main className="row py-16">
        {postLists.map((post) => {
          return (
            <div
              key={post.id}
              className="post w-3/5 mx-auto border-2 border-black p-10 rounded-xl shadow-2xl mb-12"
            >
              <h1 className="text-3xl mb-4 text-blue-500 font-medium">
                {post.data.title}
              </h1>
              <p className="text-base mb-4">{post.data.text}</p>
            </div>
          );
        })}
      </main>
    </>
  );
};

export default Post;
