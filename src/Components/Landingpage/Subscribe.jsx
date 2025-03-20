import { TextInput } from "@mantine/core";

const Subscribe = () => {
    return (
      <div className="max-w-xl mx-auto p-6 sm:p-8  rounded-lg shadow-lg text-center">
 
        <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 leading-tight">
          Never Want to Miss Any <span className="text-red-800">Job News?</span>
        </div>
        <div className="text-gray-600 mb-6 text-sm sm:text-base">
          Stay updated with the latest job opportunities and career tips. Subscribe now!
        </div>

        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-2">
          <TextInput
            type="email"
            placeholder="Enter your email"
            className="w-full sm:flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            className="w-full sm:w-auto px-6 py-3 bg-red-800 text-white font-semibold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          >
            Subscribe
          </button>
        </div>
      </div>
    );
  };
  
  export default Subscribe;
  