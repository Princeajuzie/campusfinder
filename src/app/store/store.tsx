"use client"
import { create } from "zustand";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import Cookies from "js-cookie";
import { Auth } from "@/firebase/firebase";
import { db } from "@/firebase/firebase";
import { setDoc, doc } from "firebase/firestore";
import { useEffect } from "react";

// interface for the the user to signin
interface AuthStore {
  user: any;

  loading: boolean;
  Login: () => Promise<void>;
  Logout: () => Promise<void>;
}

const UseAuthStore = create<AuthStore>((set) => ({
  user: null,
  loading: true,

  /**
   * Asynchronously logs in the user using Google authentication provider.
   *
   * @return {Promise<void>} - A promise that resolves when the user is logged in successfully.
   */
  Login: async function () {
    // const router = useRouter();
    set({ loading: true });
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(Auth, provider);
      const { displayName, email, photoURL, uid } = result.user;
      const timestamp = new Date();
      // timestamp to get the date when user register
      const formattedDate = `${
        timestamp.getMonth() + 1
      }/${timestamp.getDate()}/${timestamp.getFullYear()}`;
      const token = await result.user.getIdToken();
      await setDoc(doc(db, "users", uid), {
        displayName: displayName,
        email: email,
        uid: uid,
        photoURL: photoURL,
        createdAt: formattedDate,
      });
      console.log(result.user, "result");
      Cookies.set("findertoken", token || "");
      set({ loading: false });

      set({ user: { displayName, email, photoURL, uid } });
      // router.push('/dashboard')
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  },

  /**
   * Logout function.
   *
   * @param {type} paramName - No parameters.
   * @return {type} No return value.
   */
  Logout: async () => {
    try {
      await Auth.signOut();
      set({ user: null });
    } catch (error) {
      console.error("Error signing out:", error);
    }

  
  },
}));

export default UseAuthStore;
