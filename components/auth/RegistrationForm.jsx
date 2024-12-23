"use client";
import { useRouter } from "next/navigation";

import { useState } from "react";

export default function RegisterForm() {
  const router = useRouter();
  const initialForm = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Registration successful!");
        setFormData(initialForm);
        router.push("/auth/login");
      } else {
        alert(data.error || "Registration failed");
      }
    } catch (err) {
      console.error("Error during registration:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Create Password"
        className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      />
      <div className="text-left text-gray-400 text-sm">
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" required />I agree to the
          Terms of Service and Privacy Policy
        </label>
      </div>
      <button
        type="submit"
        className="w-full bg-red-600 text-white py-3 rounded hover:bg-red-700 transition duration-300"
      >
        Sign Up
      </button>
    </form>
  );
}
