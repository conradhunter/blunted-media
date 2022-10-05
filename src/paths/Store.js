import React from "react";
import skis from '../assets/skis.jpeg';

const Store = () => {
  return (
    <>
      <main className="row py-16">
        <h1 className="text-center text-4xl font-semibold text-blue-500 mb-10">
          Browse our products.
        </h1>
        <div id="feed-header" className="flex justify-end">
          <h6 className="mr-1">Sort By:</h6>
          <select
            name="sort"
            id="sort"
            className="bg-gray-200 border-2 border-black outline-none mb-10"
          >
            <option value="selected">Sort</option>
            <option value="text">Featured</option>
            <option value="text">Low to High</option>
            <option value="text">High to Low</option>
            <option value="text">High to Low</option>
            <option value="text">New in</option>
          </select>
        </div>
        <div className="flex flex-wrap justify-center">
          <figure
            id="product-figure"
            className="text-white flex border-2 border-gray-600"
          >
            <img src={skis} alt="" />
          </figure>
          <figure
            id="product-figure"
            className="text-white flex border-2 border-gray-600"
          >
            <img src={skis} alt="" />
          </figure>
          <figure
            id="product-figure"
            className="text-white flex border-2 border-gray-600"
          >
            <img src={skis} alt="" />
          </figure>
          <figure
            id="product-figure"
            className="text-white flex border-2 border-gray-600"
          >
            <img src={skis} alt="" />
          </figure>
        </div>
      </main>
    </>
  );
};

export default Store;
