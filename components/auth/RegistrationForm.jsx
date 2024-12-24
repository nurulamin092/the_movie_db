import { registerUser } from "@/app/actions";

export default function RegisterForm() {
  return (
    <form action={registerUser} className="space-y-4">
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Create Password"
        className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
        required
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
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
