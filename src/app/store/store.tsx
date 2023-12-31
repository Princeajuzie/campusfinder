import { create } from "zustand";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import Cookies from "js-cookie";
import { Auth } from "@/firebase/firebase";



interface AuthStore {
  user: any,

  loading:  boolean,
  Login: ()=> Promise<void>,
  Logout: ()=> Promise<void>,
  
}

const UseAuthStore = create<AuthStore >((set) => ({
  user: null,
  loading: false,
  /**
   * Asynchronously logs in the user using Google authentication provider.
   *
   * @return {Promise<void>} - A promise that resolves when the user is logged in successfully.
   */
  Login: async function () {
    set({loading: true})
    try {

      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(Auth, provider);
      const { displayName, email, photoURL, } = result.user;
      const token = await result.user.getIdToken();
      console.log( result.user, "result");
      Cookies.set("findertoken", token || "");
      set({loading: false})
      set({ user: { displayName, email, photoURL } });
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
