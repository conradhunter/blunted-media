import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import { storage } from "../firebase/firebaseConfig";

const Feed = ({ feedUploadButton, feedUploadInput }) => {
  const [fileUpload, setFileUpload] = useState(null);
  const [fileList, setFileList] = useState([]);

  const heights = [225, 275, 325, 375, 425, 475];
  let randomHeight = heights[Math.floor(Math.random() * heights.length)];

  // For each loop to append heights to figures

  

  const fileListRef = ref(storage, "feed/");

  const uploadFile = () => {
    if (fileUpload == null) return;
    const imageRef = ref(storage, `feed/${fileUpload.name + v4()}`);
    uploadBytes(imageRef, fileUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setFileList((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(fileListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setFileList((prev) => [...prev, url]);
        });
      });
    });
  }, []);


  return (
    <>
      <main className="row py-16">
        <div id="feed-header" className="flex flex-col items-end">
          <h6 className="mr-1">Sort By:</h6>
          <select
            name="sort"
            id="sort"
            className="bg-gray-200 border-2 border-black outline-none mb-4"
          >
            <option value="new-to-old">Newest to Oldest</option>
            <option value="old-to-new">Oldest to Newest</option>
            <option value="featured">Featured</option>
            <option value="skiing">Skiing</option>
            <option value="snowboarding">Snowboarding</option>
            <option value="backcountry">Backcountry</option>
            <option value="images">Images</option>
            <option value="videos">Videos</option>
          </select>

          <input
            ref={feedUploadInput}
            onChange={(event) => {
              setFileUpload(event.target.files[0]);
            }}
            type="file"
          />
          <button
            onClick={uploadFile}
            ref={feedUploadButton}
            className="bg-blue-300 py-2 hover:bg-blue-400 w-20 mb-10 rounded-full transition-all duration-200 border-2 border-black"
          >
            Upload
          </button>
        </div>
        <div className="flex justify-between flex-wrap">
          {fileList.map((url) => {
            return (
              <div
                key={url}
                id="feed-figure"
                className="mb-6 text-white overflow-hidden flex items-center justify-center relative rounded-lg bg-gray-200 images"
              >
                <img id="image" alt=""  src={url} />
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Feed;
