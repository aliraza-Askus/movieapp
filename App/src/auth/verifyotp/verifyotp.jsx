/** @format */

import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const VerifyOTP = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRef = useRef([]);
  const navigate = useNavigate();

  const handleChange = (index, value) => {
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
    if (value !== "" && index < 5) {
      inputRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRef.current[index - 1]?.focus();
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="p-8 rounded-md w-full max-w-md flex flex-col gap-10 border border-gray-200">
        <div className="text-center">
          <h1 className="font-extrabold text-2xl">Verify your Number</h1>
          <p className="text-sm text-gray-600">
            Enter the 4 digit code sent to your phone Number
          </p>
        </div>
        <form onSubmit={submitHandler}>
          <div className="flex justify-between">
            {otp.map((letter, idx) => (
              <input
                key={idx}
                ref={(element) => (inputRef.current[idx] = element)}
                type="text"
                maxLength={1}
                value={letter}
                onChange={(e) => handleChange(idx, e.target.value)}
                onKeyDown={(e) => handleKeyDown(idx, e)}
                className="md:w-12 md:h-12 w-12 h-12 border text-center text-sm md:text-2xl font-normal md:font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifyOTP;
