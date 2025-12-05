import { useRef } from "react";
import { Button } from "./button";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export function SignIn() {
  const navigate = useNavigate();
    //@ts-ignore
  const emailRef = useRef<any>();
    //@ts-ignore
  const passwordRef = useRef<any>();
  
  async function signin() {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const res = await axios.post("http://localhost:3000/user/signin", {
      email,
      password,
    }, {
      withCredentials: true
    })
    alert(res.data.message)
    navigate('/dashboard')
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 via-white to-purple-50 flex items-center justify-center px-4 py-12">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-violet-200 to-purple-200 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-pink-200 to-violet-200 rounded-full filter blur-3xl opacity-20"></div>
      
      {/* Card Container */}
      <div className="relative z-10 w-full max-w-md">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <svg className="w-10 h-10 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            <span className="text-3xl font-bold text-gray-900">DreamBoard</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome back</h2>
          <p className="text-gray-600">Sign in to continue your dream journey</p>
        </div>
        
        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <div className="space-y-5">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input 
                ref={emailRef} 
                type="email" 
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
              />
            </div>
            
            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input 
                ref={passwordRef} 
                type="password" 
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
              />
            </div>
            
            {/* Forgot Password */}
            <div className="flex justify-end">
              <button className="text-sm text-violet-600 hover:text-violet-700 font-medium transition-colors">
                Forgot password?
              </button>
            </div>
            
            {/* Sign In Button */}
            <div className="pt-2">
              <Button onClick={signin} varient="primary" size="md" text="Sign In" />
            </div>
          </div>
          
          {/* Divider */}
          <div className="mt-6 pt-6 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <button 
                onClick={() => navigate('/signup')}
                className="text-violet-600 hover:text-violet-700 font-semibold transition-colors"
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
        
        {/* Back to Home */}
        <div className="text-center mt-6">
          <button 
            onClick={() => navigate('/')}
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors inline-flex items-center"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to home
          </button>
        </div>
      </div>
    </div>
  );
}