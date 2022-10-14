import React from "react";
import railJam from "../assets/railJam.jpeg";
const Events = () => {
  return (
    <>
      <main className="row py-16">
        <h1 className="text-center text-4xl font-semibold text-blue-500 mb-10">
          Upcoming Events
        </h1>
        <div id="event-container" className="flex">
          <div className="flex flex-col h-full">
            <h3 className="text-blue-500 text-2xl">Snowtunes Rail Jam</h3>
            <h6>Location: Jindabyne, Australia</h6>
            <p>A 2 day ski and snowboard railjam featuring Jindabyne local legends and some global stars!</p>
            <p>2-3/09/2022</p>
          </div>
          <img className="w-96" src={railJam} alt="" />
        </div>
      </main>
    </>
  );
};

export default Events;
