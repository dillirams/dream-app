import { useRef } from "react"
import { Button } from "./button"
import axios from "axios";
import { useDreamStore } from "./create";

export function Model() {
  const { model, setModel } = useDreamStore();
    //@ts-ignore
  const titleRef = useRef<any>();
    //@ts-ignore
  const contentRef = useRef<any>();
  
  async function submit() {
    const title = titleRef.current.value;
    const content = contentRef.current.value;
    
    const res = await axios.post('https://dream.dillaxadhi.com/api/user/post', {
      title: title,
      content: content
    }, {
      withCredentials: true
    })
    
    console.log(res.data.message)
    setModel(false)
    window.location.reload();
  }
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      {/* Modal Container */}
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Add New Dream</h2>
              <p className="text-sm text-gray-500">Capture your dream while it's fresh</p>
            </div>
          </div>
          <button 
            onClick={() => setModel(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Title Input */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Dream Title
            </label>
            <input 
              ref={titleRef}
              type="text" 
              id="title"
              placeholder="Give your dream a memorable title..."
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
            />
          </div>
          
          {/* Content Input */}
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
              Dream Description
            </label>
            <textarea 
              ref={contentRef}
              id="content"
              rows={8}
              placeholder="Describe your dream in detail... What happened? How did you feel? What symbols or people appeared?"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all resize-none"
            />
            <p className="text-xs text-gray-500 mt-2">
              💡 Tip: Include emotions, colors, and any recurring themes you noticed
            </p>
          </div>
        </div>
        
        {/* Modal Footer */}
        <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
          <button
            onClick={() => setModel(false)}
            className="px-6 py-2.5 text-gray-700 hover:text-gray-900 font-medium transition-colors rounded-xl hover:bg-gray-200"
          >
            Cancel
          </button>
          <Button 
            onClick={submit} 
            size="sm" 
            varient="primary" 
            text="Save Dream"
          />
        </div>
      </div>
    </div>
  );
}