/** @format */

import axios from "axios";
import { toast } from "react-toastify";
//{{apis}}/api/auth/register
const API_END_POINT = "https://apis.askussolution.tech/api/auth";

export const UserAuth = () => {
  return {
    signUp: async (input) => {
      try {
        const res = await axios.post(`${API_END_POINT}/register`, input, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (res.status === 200 || res.status === 201) {
          toast.success(res.data.message);
        }
      } catch (error) {
        toast.error(error?.response?.data?.message || "Signup failed!");
      }
    },

    //fresh token access accesstoken
    signin: async (input) => {
      try {
        const res = await axios.post(`${API_END_POINT}/sign-in`, input, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (res.status === 200 || res.status === 201) {
          toast.success(res.data.message);
        }
      } catch (error) {
        toast.error(error?.response?.data?.message || "Login failed!");
      }
    },
  };
};
