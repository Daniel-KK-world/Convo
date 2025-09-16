import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { data } from "react-router-dom";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningIn: false,
  isLoggingIn: false,
  isUpdatingProfile: false,

  isCheckingAuth: true,

  checkAuth: async () => {
    console.log("checkAuth started"); // 👈 debug log
    try {
      // pretend backend is slow but returns success
      await new Promise((resolve) => setTimeout(resolve, 500));

      // replace this with your axios call
      const res = { data: { username: "testUser" } };

      console.log("checkAuth response", res.data);
      set({ authUser: res.data });
    } catch (error) {
      console.log("Error checking auth:", error);
      set({ authUser: null });
    } finally {
      console.log("checkAuth finished"); // 👈 should always fire
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) => {
     }
}));
// You can add more actions like signIn, logIn, logOut, updateProfile similarly