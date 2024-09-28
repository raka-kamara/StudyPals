import React from "react";
import img from "../assets/Error.jpg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      className="w-[100vw] h-[100vh] bg-cover  opacity-90 flex justify-evenly items-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div>
        <div className="card bg-blue-950 opacity-95 w-96 shadow-xl">
          <div className="card-body text-white">
            <h1 className="text-2xl font-bold text-center text-red-600 uppercase">404 error!</h1>
            <h2 className="card-title text-5xl">OH NO!<span className="text-xl text-red-600">But that's okay!</span></h2>
            <p>Even cool people lose their way online at some point! Don't worry, You'll find your way back</p>
            <div className="card-actions justify-center">
              <Link to="/"><button className="p-4 hover:bg-transparent hover:scale-105 rounded-2xl bg-red-600 border border-red-600 text-white">Back to Home</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
