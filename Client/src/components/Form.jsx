import React, { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const Form = () => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [teamName, setTeamName] = useState("");
  const [domain, setDomain] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/register`, {
        username,
        firstName,
        lastName,
        teamName,
        college,
        domain,
        email,
      });
      const data = res.data;

      if (data.success) {
        // Clear form fields
        setUsername("");
        setFirstName("");
        setLastName("");
        setTeamName("");
        setDomain("");
        setEmail("");
        setCollege("");
        alert("Registration Successful");
      }
    } catch (error) {
      console.error(
        "Error message:",
        error.response?.data?.message || "An error occurred"
      );
      alert(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="mt-0 sm:mt-0 min-h-screen flex items-center justify-center w-full">
      <div className="bg-white shadow-md rounded-3xl px-5 py-6 w-full sm:w-[40vw]">
        <h1 className="text-3xl font-semibold text-center mb-4">
          Let's Connect!
        </h1>

        <form method="post" onSubmit={handleRegister}>
          {/* User Name */}
          <div className="mb-4">
            <label
              htmlFor="User-Name"
              className="mb-2 mx-2 block text-sm font-medium text-gray-700"
            >
              User Name
            </label>
            <input
              type="text"
              placeholder="harshit20"
              name="username"
              id="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow-md rounded-md w-full px-3 py-2 border-gray-300 focus:outline-none
            focus:ring-black focus:border-black"
            />
          </div>

          {/* Email Address */}
          <div className="mb-4">
            <label
              htmlFor="User-Name"
              className="mb-2 mx-2 block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="text"
              placeholder="harshit@gmail.com"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow-md rounded-md w-full px-3 py-2 border-gray-300 focus:outline-none
            focus:ring-black focus:border-black"
            />
          </div>

          {/* First Name */}
          <div className="mb-4">
            <label
              htmlFor="first-name"
              className="mb-2 mx-2 block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              placeholder="Harshit"
              name="firstName"
              id="firstName"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="shadow-md rounded-md w-full px-3 py-2 border-gray-300 focus:outline-none
            focus:ring-black focus:border-black"
            />
          </div>

          {/* Last Name  */}
          <div className="mb-4">
            <label
              htmlFor="Last Name"
              className="mb-2 mx-2 block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              placeholder="Dubey"
              name="lastName"
              id="lastName"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="shadow-md rounded-md w-full px-3 py-2 border-gray-300 focus:outline-none
            focus:ring-black focus:border-black"
            />
          </div>

          {/* Team Name  */}
          <div className="mb-4">
            <label
              htmlFor="Team-Name"
              className="mb-2 mx-2 block text-sm font-medium text-gray-700"
            >
              Team Name
            </label>
            <input
              type="text"
              placeholder="Phantom coders"
              name="teamName"
              id="teamName"
              required
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              className="shadow-md rounded-md w-full px-3 py-2 border-gray-300 focus:outline-none
            focus:ring-black focus:border-black"
            />
          </div>
          {/* College Name */}
          <div className="mb-4">
            <label
              htmlFor="college"
              className="mb-2 mx-2 block text-sm font-medium text-gray-700"
            >
              College Name
            </label>
            <input
              type="text"
              placeholder="Saraswati college of engineering"
              name="college"
              id="college"
              required
              value={college}
              onChange={(e) => setCollege(e.target.value)}
              className="shadow-md rounded-md w-full px-3 py-2 border-gray-300 focus:outline-none
            focus:ring-black focus:border-black"
            />
          </div>

          {/* Domain Name  */}
          <div className="mb-4">
            <label
              htmlFor="accountType"
              className="mb-2 mx-2 block text-sm font-medium text-gray-700"
            >
              Select your Domain
            </label>
            <select
              onChange={(e) => setDomain(e.target.value)}
              className="shadow-md rounded-md w-full px-3 py-2 border-gray-300 focus:outline-none
            focus:ring-black focus:border-black"
              required
            >
              <option value="">Select Domain Type</option>
              <option value="WD">Web Development</option>
              <option value="AI">AIML</option>
              <option value="CS">Cyber Security</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white px-3 py-2 shadow-lg text-sm font-medium hover:cursor-pointer rounded-lg my-2"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
