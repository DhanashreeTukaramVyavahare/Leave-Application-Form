import React, { useState } from "react";

const LeaveForm = () => {
  const [formData, setFormData] = useState({
    empId: "",
    empName: "",
    mobileNumber: "",
    email: "",
    typeOfLeave: "",
    startDate: new Date().toISOString().slice(0, 16), // Default current date & time
    endDate: "",
    district: "",
  });

  const districts = [
    "Anantapur", "Chittoor", "East Godavari", "Guntur", "Kadapa", "Krishna",
    "Kurnool", "Nellore", "Prakasam", "Srikakulam", "Visakhapatnam", "Vizianagaram",
    "West Godavari", "YSR Kadapa", "Nandyal", "Parvathipuram Manyam", "Anakapalli",
    "Alluri Sitharama Raju", "Kakinada", "Konaseema", "Eluru", "Palnadu", "Bapatla",
    "NTR", "Sri Satya Sai", "Tirupati"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-8 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">
        Leave Application Form
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* EMP ID */}
        <div>
          <label className="block mb-2 text-gray-700">EMP ID</label>
          <input
            type="number"
            name="empId"
            value={formData.empId}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter Employee ID"
            required
          />
        </div>

        {/* EMP Name */}
        <div>
          <label className="block mb-2 text-gray-700">EMP Name</label>
          <input
            type="text"
            name="empName"
            value={formData.empName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter Employee Name"
            required
          />
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block mb-2 text-gray-700">Mobile Number</label>
          <input
            type="number"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter Mobile Number"
            required
          />
        </div>

        {/* E-Mail */}
        <div>
          <label className="block mb-2 text-gray-700">E-Mail</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter Email Address"
            required
          />
        </div>

        {/* Type of Leave */}
        <div>
          <label className="block mb-2 text-gray-700">Type of Leave</label>
          <input
            type="text"
            name="typeOfLeave"
            value={formData.typeOfLeave}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Type of Leave"
            required
          />
        </div>

        {/* Start Date */}
        <div>
          <label className="block mb-2 text-gray-700">Start Date & Time</label>
          <input
            type="datetime-local"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* End Date */}
        <div>
          <label className="block mb-2 text-gray-700">End Date</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* District */}
        <div>
          <label className="block mb-2 text-gray-700">Select District</label>
          <select
            name="district"
            value={formData.district}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            required
          >
            <option value="">-- Select District --</option>
            {districts.map((district, index) => (
              <option key={index} value={district}>
                {district}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LeaveForm;
