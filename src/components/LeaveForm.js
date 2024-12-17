import React, { useState } from "react";
import { FaUser, FaEnvelope, FaMobileAlt, FaCalendarAlt, FaMapMarkerAlt, FaClipboardList } from "react-icons/fa";

const LeaveForm = () => {
  const [formData, setFormData] = useState({
    empId: "",
    empName: "",
    mobileNumber: "",
    email: "",
    typeOfLeave: "",
    startDate: new Date().toISOString().slice(0, 16),
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
    <div className="max-w-3xl mx-auto mt-10 p-8 bg-gray-50 rounded-lg shadow-md transition-all hover:shadow-lg">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-600">
        Leave Application Form
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* EMP ID */}
        <div className="flex items-center">
          <FaClipboardList className="text-blue-500 mr-2" />
          <input
            type="number"
            name="empId"
            value={formData.empId}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300 transition-all hover:border-blue-500"
            placeholder="Employee ID"
            required
          />
        </div>

        {/* EMP Name */}
        <div className="flex items-center">
          <FaUser className="text-blue-500 mr-2" />
          <input
            type="text"
            name="empName"
            value={formData.empName}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300 transition-all hover:border-blue-500"
            placeholder="Employee Name"
            required
          />
        </div>

        {/* Mobile Number */}
        <div className="flex items-center">
          <FaMobileAlt className="text-blue-500 mr-2" />
          <input
            type="number"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300 transition-all hover:border-blue-500"
            placeholder="Mobile Number"
            required
          />
        </div>

        {/* E-Mail */}
        <div className="flex items-center">
          <FaEnvelope className="text-blue-500 mr-2" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300 transition-all hover:border-blue-500"
            placeholder="Email Address"
            required
          />
        </div>

        {/* Type of Leave */}
        <div className="flex items-center">
          <FaClipboardList className="text-blue-500 mr-2" />
          <input
            type="text"
            name="typeOfLeave"
            value={formData.typeOfLeave}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300 transition-all hover:border-blue-500"
            placeholder="Type of Leave"
            required
          />
        </div>

        {/* Start Date */}
        <div className="flex items-center">
          <FaCalendarAlt className="text-blue-500 mr-2" />
          <input
            type="datetime-local"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300 transition-all hover:border-blue-500"
            required
          />
        </div>

        {/* End Date */}
        <div className="flex items-center">
          <FaCalendarAlt className="text-blue-500 mr-2" />
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300 transition-all hover:border-blue-500"
            required
          />
        </div>

        {/* District */}
        <div className="flex items-center">
          <FaMapMarkerAlt className="text-blue-500 mr-2" />
          <select
            name="district"
            value={formData.district}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300 transition-all hover:border-blue-500"
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
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-all transform hover:scale-105"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LeaveForm;
