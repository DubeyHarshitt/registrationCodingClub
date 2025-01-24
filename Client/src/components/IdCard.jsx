import React, { useEffect, useState } from "react";

export const IdCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    fetch("http://localhost:3000/api/id-card")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <ul>
        {data.map((user) => (
          <div key={user._id} className="flex flex-wrap justify-center gap-6 p-4">
          <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
              <h1 className="text-2xl font-bold text-gray-800 text-center m-1">
                CodeCrafters - ID Card
              </h1>
              {/* Header Section */}
              <div className="bg-gray-800 text-white p-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold">
                    {user.firstName} {user.lastName}
                  </h2>
                  <h2 className="text-xl font-semibold">{user.email}</h2>
                </div>
                <p className="text-sm text-gray-300">@{user.username}</p>
              </div>
              {/* Details Section */}
              <div className="p-6">
                <p className="text-gray-700 mb-3">
                  <strong className="font-medium">Team:</strong> {user.teamName}
                </p>
                <p className="text-gray-700 mb-3">
                  <strong className="font-medium">Domain:</strong> {user.domain}
                </p>
                <p className="text-gray-700 mb-3">
                  <strong className="font-medium">Team ID:</strong>{" "}
                  {user.teamName.slice(0, 2).toUpperCase() +
                    user._id.slice(0, 4) +
                    user.domain.toUpperCase()}
                </p>
                <p className="text-gray-700 mb-3">
                  <strong className="font-medium">College:</strong>{" "}
                  {user.college || "Saraswati College of Engineering"}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        ))}
      </ul>
    </div>
  );
};

export default IdCard;


