"use client"
import UseAuthStore from "../store/store";

import Cookies from "js-cookie";

export default function SignInPage() {
const { user, Login, Logout} = UseAuthStore()

console.log(user)
    return (
      <div className="min-h-screen bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] flex flex-col justify-center items-center">
        <div className="text-white text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
          <p className="lg:text-lg text-sm leading-loose">
            Your easy way to find departments and navigate our campus effortlessly.
          </p>
        </div>
        <div className="relative inline-flex group">
          <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <a
            href="#"
            title="Sign in with Google"
            className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
          onClick={()=>{
            Login()
           
           }} >
            <button
              aria-label="Sign in with Google"
              className="flex items-center gap-3 bg-google-button-dark rounded-full p-0.5 pr-4 transition-colors duration-300 hover:bg-google-button-dark-hover"
            >
              <div className="flex items-center justify-center bg-white w-9 h-9 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-gray-900"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
              </div>
              <span className="text-sm text-white tracking-wider">Sign in with Google</span>
            </button>
          </a>
        </div>
        <div className="my-4 text-gray-300 flex items-center">
          <span className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 inline-block text-white"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 11h2v2h-2zm0-4h2v6h-2z"
                fill="currentColor"
              />
            </svg>
          </span>
          Campus Location
        </div>
        <footer className="mt-8 text-gray-300 text-center">
          Made with ❤️ by Prince Ajuzie
        </footer>
      </div>
    );
  }
  