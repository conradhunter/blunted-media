import React from "react";
import { useParams } from "react-router-dom";

const Post = ({ postLists }) => {

    const { id } = useParams();
    const currentPost = postLists.filter((post) => post.id === id);

    console.log(currentPost);

  return (
    <>
      <main className="row py-16">
        <div className="post w-3/5 mx-auto border-2 border-black p-10 rounded-xl shadow-2xl mb-12">
          <h1 className="text-3xl mb-4 text-blue-500 font-medium">{currentPost[0].data.title}</h1>
          <p className="text-base mb-4">{currentPost[0].data.text}</p>
        </div>
      </main>
    </>
  );
};

export default Post;
