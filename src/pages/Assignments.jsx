import React, { useEffect, useState } from "react";
import Background from "./Shared/Background";
import { Helmet } from "react-helmet";
import AssignmentCard from "../components/AssignmentCard";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [filteredAssignments, setFilteredAssignments] = useState([]);
  const [difficulty, setDifficulty] = useState("All");
  const [difficulties, setDifficulties] = useState([]); // State to store unique difficulties

  useEffect(() => {
    fetch("http://localhost:5000/Assignments")
      .then((res) => res.json())
      .then((data) => {
        setAssignments(data);
        setFilteredAssignments(data); // Initialize filtered assignments with all data
        extractDifficulties(data); // Extract difficulties from the data
      });
  }, []);

  // Extract unique difficulties from the assignments
  const extractDifficulties = (data) => {
    const uniqueDifficulties = [
      ...new Set(data.map((assignment) => assignment.assignmentDifficulty)),
    ];
    setDifficulties(uniqueDifficulties);
  };

  // Function to handle difficulty selection and filtering
  const handleDifficultyChange = (event) => {
    const selectedDifficulty = event.target.value;
    setDifficulty(selectedDifficulty);

    if (selectedDifficulty === "All") {
      setFilteredAssignments(assignments); // Show all assignments if "All" is selected
    } else {
      const filtered = assignments.filter(
        (assignment) => assignment.assignmentDifficulty === selectedDifficulty
      );
      setFilteredAssignments(filtered);
    }
  };

  return (
    <div>
      <Background />
      <Helmet>
        <title>StudyPals | Assignments</title>
      </Helmet>

      <h1 className="text-center text-red-400 text-3xl font-semibold my-10">
        All Assignments ({filteredAssignments.length})
      </h1>

      {/* Difficulty Filter */}
      <div className="text-center my-5">
        <label htmlFor="difficulty" className="mr-4 text-xl">
          Filter by Difficulty:
        </label>
        <select
          id="difficulty"
          value={difficulty}
          onChange={handleDifficultyChange}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="All">All</option>
          {difficulties.map((diff, index) => (
            <option key={index} value={diff}>
              {diff}
            </option>
          ))}
        </select>
      </div>

      <div className="my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAssignments.map((assignment) => (
            <AssignmentCard
              key={assignment._id}
              assignments={assignment}
            ></AssignmentCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Assignments;
