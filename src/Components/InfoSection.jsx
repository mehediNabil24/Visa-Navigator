import React from "react";
import { FaStar, FaFacebook, FaGoogle } from "react-icons/fa";

const InfoSection = () => {
  return (
    <div className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Main Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {/* Card 1 */}
          <div>
            <h2 className="text-4xl font-bold">185+</h2>
            <p className="mt-2 text-lg">Countries Visa Information</p>
          </div>
          {/* Card 2 */}
          <div>
            <h2 className="text-4xl font-bold">1,000+</h2>
            <p className="mt-2 text-lg">Organizations Relying on Us</p>
          </div>
          {/* Card 3 */}
          <div>
            <h2 className="text-4xl font-bold">3.2M+</h2>
            <p className="mt-2 text-lg">Travelers Served from Bangladesh</p>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-8 border-t border-white/20 pt-4 flex flex-wrap justify-center space-x-6">
          {/* Review 1 */}
          <div className="flex items-center space-x-2">
            <FaStar className="text-yellow-400 w-6 h-6" />
            <span className="text-lg">Review 4.9</span>
          </div>
          {/* Review 2 */}
          <div className="flex items-center space-x-2">
            <FaFacebook className="text-blue-500 w-6 h-6" />
            <span className="text-lg">Review 4.6</span>
          </div>
          {/* Review 3 */}
          <div className="flex items-center space-x-2">
            <FaGoogle className="text-red-500 w-6 h-6" />
            <span className="text-lg">Review 4.3</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
