"use client";
import React, { useState } from "react";
import useCartStore from "../../components/store/cartStore";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const { cartItems } = useCartStore();
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
  const router = useRouter();
  const { addOrder } = useCartStore();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.firstName) newErrors.firstName = "First name is required";
    if (!form.lastName) newErrors.lastName = "Last name is required";
    if (!form.email) newErrors.email = "Email is required";

    if (!form.password) {
      newErrors.password = "Password is required";
    } else {
      const password = form.password;
      const errors = [];

      if (password.length < 8) errors.push("Minimum 8 characters");
      if (!/[A-Z]/.test(password)) errors.push("At least one uppercase letter");
      if (!/[a-z]/.test(password)) errors.push("At least one lowercase letter");
      if (!/[0-9]/.test(password)) errors.push("At least one number");
      if (!/[!@#$%^&*()_+\-=[\]{};':\"\\|,.<>/?]/.test(password))
        errors.push("At least one special character");

      if (errors.length > 0) {
        newErrors.password = errors.join(", ");
      }
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    localStorage.setItem("userEmail", form.email);
    localStorage.setItem("userPassword", form.password);

    const order = {
      id: Date.now(),
      customer: `${form.firstName} ${form.lastName}`,
      email: form.email,
      items: cartItems,
      total: totalPrice,
      date: new Date().toLocaleString(),
    };

    addOrder(order);
    setShowSuccess(true);
  };

  return (
    <>
      <div className="text-black max-w-5xl mx-auto mt-10 bg-white shadow-xl rounded-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        {/* Form */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-green-800">
            Checkout Details
          </h2>
          <form onSubmit={handleSubmit}>
            {["firstName", "lastName", "email"].map((field, idx) => (
              <div className="mb-4" key={idx}>
                <label className="block mb-1 font-medium capitalize">
                  {field.replace(/([A-Z])/g, " $1")}
                </label>
                <input
                  type="text"
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-300"
                />
                {errors[field] && (
                  <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
                )}
              </div>
            ))}

            {/* Password */}
            <div className="mb-4 relative">
              <label className="block mb-1 font-medium">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-300"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-sm text-gray-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="mb-4 relative">
              <label className="block mb-1 font-medium">Confirm Password</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-300"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-9 text-sm text-gray-600"
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 font-semibold"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Cart Summary */}
        <div className="bg-gray-100 p-6">
          <h3 className="text-xl font-bold mb-4 text-green-900">
            Order Summary
          </h3>
          <ul className="mb-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="py-4 flex items-center justify-between gap-4 border-b"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded object-cover"
                  />
                  <div>
                    <p className="font-medium text-green-900">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <p className="text-lg font-bold text-green-800">
            Total: ${totalPrice.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Order Placed Successfully!
            </h2>
            <p className="text-gray-600 mb-4">Thank you for your purchase.</p>
            <button
              onClick={() => {
                setShowSuccess(false);
                router.push("/login");
              }}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 font-semibold"
            >
              Login and Check Your Order History
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
