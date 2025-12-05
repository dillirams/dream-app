import { useNavigate } from "react-router-dom";
import { Button } from "./button";

export function Home() {
  // Pass your navigate function from react-router-dom
  const navigate = useNavigate(); // Import useNavigate in your actual file
  
  function onClick() {
    navigate('/signup')
  }
  
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-50 via-white to-purple-50"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-violet-200 to-purple-200 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-pink-200 to-violet-200 rounded-full filter blur-3xl opacity-20"></div>
      
      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
          <span className="text-2xl font-bold text-gray-900">DreamBoard</span>
        </div>
        <button 
          onClick={() => navigate('/signin')}
          className="px-4 py-2 text-gray-700 hover:text-violet-600 transition-colors font-medium"
        >
          Sign In
        </button>
      </nav>
      
      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 pt-16 pb-24 text-center max-w-7xl mx-auto">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-violet-100 rounded-full mb-8">
            <span className="text-sm font-medium text-violet-700">Your Dream Journal</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Capture Your Dreams,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
              Unlock Your Mind
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            A beautiful space to record, explore, and understand your dreams. 
            Discover patterns and gain insights into your subconscious.
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <Button onClick={onClick} varient="primary" size="sm" text="Get Started Free" />
            <button 
              onClick={() => navigate('/signin')}
              className="px-8 py-3 text-gray-700 hover:text-violet-600 font-semibold transition-colors"
            >
              Learn More
            </button>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-32">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-violet-100 rounded-2xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy Journaling</h3>
              <p className="text-gray-600 leading-relaxed">Quickly capture your dreams with our simple and intuitive interface designed for early mornings.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Track Patterns</h3>
              <p className="text-gray-600 leading-relaxed">Discover recurring themes, symbols, and emotions that appear across your dream experiences.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Gain Insights</h3>
              <p className="text-gray-600 leading-relaxed">Understand your subconscious better and unlock meaningful insights from your dreams.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="relative z-10 text-center pb-10 text-gray-500 text-sm">
        <p>Start your dream journey today — completely free</p>
      </div>
    </div>
  );
}