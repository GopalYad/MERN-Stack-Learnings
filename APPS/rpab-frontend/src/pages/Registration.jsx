import React, { useState } from "react";

const Registration = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "doctor", 
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const url = "http://localhost:8080/auth/register";
    try {
      const response = await fetch(url, {
        method: "POST",
      
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <section className="w-full max-h-max bg-blue-200">
      <form onSubmit={onSubmit}>
        <h1 className="text-2xl font-medium text-center py-7">
          Registration Form
        </h1>

        <div className="flex flex-col items-center gap-3.5">
      
          <input
            type="text"
            name="username"
            value={formData.username}
            placeholder="Enter username"
            onChange={onChange}
            className="border px-7"
            required
          />

        
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Enter password"
            onChange={onChange}
            className="border px-7"
            required
          />

         
          <div className="flex gap-2 py-5">
            <button
              type="button"
              onClick={() => setFormData({ ...formData, role: "doctor" })}
              className={`px-5 cursor-pointer ${
                formData.role === "doctor"
                  ? "bg-gray-300 text-black"
                  : "bg-white text-black"
              }`}
            >
              Doctor
            </button>

            <button
              type="button"
              onClick={() => setFormData({ ...formData, role: "patient" })}
              className={`px-5 cursor-pointer ${
                formData.role === "patient"
                  ? "bg-gray-300 text-black"
                  : "bg-white text-black"
              }`}
            >
              Patient
            </button>
          </div>

      
          <button
            type="submit"
            className="border bg-black text-white px-4 cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Registration;
