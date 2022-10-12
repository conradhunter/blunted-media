import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Post = ({ postLists }) => {

    const { id } = useParams();
    const currentPost = postLists.filter((post) => post.id === id);

    console.log(currentPost)

    useEffect(() => {
      window.scrollTo(0, 0);
    })

  return (
    <>
      <main className="row py-16">
        <div className="post w-3/5 mx-auto border-2 border-black p-10 rounded-xl shadow-2xl">
          <h1 className="text-3xl mb-4 text-blue-500 font-medium">{currentPost[0].data.title}</h1>
          <p className="text-lg mb-4 text-blue-500 font-medium">Category: {currentPost[0].data.category}</p>
          <p className="text-base mb-4">{currentPost[0].data.text}</p>
          <p className="text-base mb-4">{currentPost[0].data.author}</p>
          <p className="text-base mb-4">{currentPost[0].data.date}</p>
        </div>
      </main>
    </>
  );
};

export default Post;
