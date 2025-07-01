/** @format */

import { useState } from "react";
import { UserAuth } from "../../Api/authapiendpoint";
const SignIn = () => {
  const [input, Setinput] = useState({
    phone: "",
  });
  const { signin } = UserAuth();
  const HandleSigninInput = (e) => {
    const { name, value } = e.target;
    Setinput({ ...input, [name]: value });
  };
  const HandleSigninSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Submit Input:", input);
      // call your API function
      await signin(input);
    } catch (error) {
      console.error("Signin failed in handler:", error);
      toast.error("Signin failed. Please try again.");
    }
  };

  return (
    <>
      <form onSubmit={HandleSigninSubmit} className="space-y-4">
        <label className="mr-20 text-bold">Enter phone number</label>
        <input
          type="number"
          placeholder="phone"
          name="phone"
          value={input.phone}
          onChange={HandleSigninInput}
          className="border p-1"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 ml-10">
          Submit
        </button>
      </form>
    </>
  );
};
export default SignIn;
