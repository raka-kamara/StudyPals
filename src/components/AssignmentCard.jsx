import React from "react";
import { Link } from "react-router-dom";

const AssignmentCard = ({ assignments }) => {
  const {
    _id,
    title,
    description,
    marks,
    thumbnailImageUrl,
    assignmentDifficulty,
    dueDate,
  } = assignments;

  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        {/* Thumbnail Image */}
        <div
          className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
          style={{ backgroundImage: `url(${thumbnailImageUrl})` }}
        ></div>

        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
          {/* Title */}
          <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
            {title}
          </h3>

          {/* Description */}
          <p className="text-center text-sm text-gray-600 dark:text-gray-200 px-2">
            <span className="font-bold">Description:</span> {description}
          </p>

          {/* Difficulty */}
          <p className="text-center text-xs font-bold py-1 text-gray-800 dark:text-gray-200">
            Difficulty: {assignmentDifficulty}
          </p>

        

          {/* Due Date */}
          <p className="text-center text-xs font-bold py-1 text-gray-800 dark:text-gray-200">
            Due Date: {dueDate}
          </p>

          {/* Action Buttons */}
          <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
            <span className="font-bold text-gray-800 dark:text-gray-200">
              {marks} Marks
            </span>
            {/* See Details Button */}
            <Link to={`/assignmentDetails/${_id}`}>
              <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                See Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
