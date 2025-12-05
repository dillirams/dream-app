import { Button } from "./button";
import { Model } from "./model";
import { useDreamStore } from "./create";
import { useContent } from "./hook";

interface DreamType{
    title:string,
    content:string
}

export function Dashboard() {
  const { model, setModel } = useDreamStore();
  const dream:DreamType[] = useContent();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
              <span className="text-2xl font-bold text-gray-900">DreamBoard</span>
            </div>
            <Button 
              onClick={() => { setModel(true) }} 
              size="sm" 
              varient="primary" 
              text="+ Add Dream"
            />
          </div>
        </div>
      </header>
      
      {/* Modal */}
      <div className={`${model ? "block" : "hidden"}`}>
        <Model />
      </div>
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Dreams</h1>
          <p className="text-gray-600">Explore your dream journal and discover patterns</p>
        </div>
        
        {/* Dreams Grid */}
        {dream.length === 0 ? (
          <div className="text-center py-16">
            <svg className="w-20 h-20 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No dreams yet</h3>
            <p className="text-gray-500 mb-6">Start recording your dreams to unlock insights</p>
            <Button 
              onClick={() => { setModel(true) }} 
              size="sm" 
              varient="primary" 
              text="Add Your First Dream"
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dream.map((e, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-violet-600 transition-colors line-clamp-2">
                    {e.title}
                  </h3>
                  <svg className="w-5 h-5 text-violet-400 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <p className="text-gray-600 line-clamp-4 leading-relaxed">
                  {e.content}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {new Date().toLocaleDateString()}
                  </span>
                  <button className="text-sm text-violet-600 hover:text-violet-700 font-medium">
                    Read more →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}