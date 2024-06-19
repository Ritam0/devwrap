// RegistrationForm.js
import React, { useState } from 'react';
import Navbar from './Navbar';
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    teamName: '',
    stream: '',
    screenshot: null,
  });

  const handleInputChange = (field, value) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleFileUpload = (file) => {
    setFormData(prevData => ({
      ...prevData,
      screenshot: file,
    }));
  };

  const handleSubmit = () => {
    console.log(formData);
    // Implement form submission logic (e.g., sending data to a server)
  };

  return (
    <>
   <Navbar/>
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Registration Form</h1>

      {/* Team Name Section */}
      <div className="mb-8">
        <label className="block text-lg font-semibold mb-2">Team Name</label>
        <input
          type="text"
          className="w-full p-2 border rounded-md"
          value={formData.teamName}
          onChange={(e) => handleInputChange('teamName', e.target.value)}
        />
      </div>

      {/* Stream Dropdown Section */}
      <div className="mb-8">
        <label className="block text-lg font-semibold mb-2">Stream</label>
        <select
          className="w-full p-2 border rounded-md"
          value={formData.stream}
          onChange={(e) => handleInputChange('stream', e.target.value)}
        >
          <option value="">Select Stream</option>
          <option value="IT">Information Technology</option>
          <option value="CS">Computer Science</option>
          {/* Add more options as needed */}
        </select>
      </div>

      {/* Screenshot Upload Section */}
      <div className="mb-8">
        <label className="block text-lg font-semibold mb-2">Screenshot Upload</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileUpload(e.target.files[0])}
        />
      </div>

      {/* Submit Button */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-700"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
    </>
  );
};

export default RegistrationForm;
