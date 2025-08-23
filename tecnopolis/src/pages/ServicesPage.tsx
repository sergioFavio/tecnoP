import React from 'react';
import { Link } from "react-router-dom";

const ServicesPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full bg-transparent">
      <div className="grid grid-cols-3 gap-6 p-4">
        {/* Slide In Down */}
        {/*<Link to="/card_service" className="w-32 h-24 flex items-center justify-center border border-gray-300 bg-amber-300 shadow-md rounded-lg animate-slide-in-down hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
          <span className="text-xs text-center">slideindownSERGIO</span>
        </Link>*/}
        
        {/* Slide In Up */}
        <Link to="/card_service" className="w-32 h-24 flex items-center justify-center border border-gray-300 bg-white shadow-md rounded-lg animate-slide-in-up hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
          <span className="text-xs text-center">slideinup</span>
        </Link>
        
        {/* Slide In Left */}
        <Link to="/card_service" className="w-32 h-24 flex items-center justify-center border border-gray-300 bg-orange-400 shadow-md rounded-lg animate-slide-in-left hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
          <span className="text-xs text-center">slideinleft</span>
        </Link>
        
        {/* Slide In Right */}
        <Link to="/card_service" className="w-32 h-24 flex items-center justify-center border border-gray-300 bg-green-400 shadow-md rounded-lg animate-slide-in-right hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
          <span className="text-xs text-center">slideinright</span>
        </Link>
        
        {/* Slide Out Down */}
        <Link to="/card_service" className="w-32 h-24 flex items-center justify-center border border-gray-300 bg-amber-300 shadow-md rounded-lg animate-slide-out-down hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
          <span className="text-xs text-center">slideoutdown</span>
        </Link>
        
        {/* Slide Out Up */}
        <Link to="/card_service" className="w-32 h-24 flex items-center justify-center border border-gray-300 bg-lime-400 shadow-md rounded-lg animate-slide-out-up hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
          <span className="text-xs text-center">slideoutup</span>
        </Link>
        
        {/* Slide Out Left */}
        <Link to="/card_service" className="w-32 h-24 flex items-center justify-center border border-gray-300 bg-orange-400 shadow-md rounded-lg animate-slide-out-left hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
          <span className="text-xs text-center">slideoutleft</span>
        </Link>
        
        {/* Slide Out Right */}
        <Link to="/card_service" className="w-32 h-24 flex items-center justify-center border border-gray-300 bg-sky-400 shadow-md rounded-lg animate-slide-out-right hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
          <span className="text-xs text-center">slideoutright</span>
        </Link>
        
        {/* Slide Down */}
        <Link to="/card_service" className="w-32 h-24 flex items-center justify-center border border-gray-300 bg-amber-400 shadow-md rounded-lg animate-slide-down hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
          <span className="text-xs text-center">slidedown</span>
        </Link>
        
        {/* Slide Up */}
        <Link to="/card_service" className="w-32 h-24 flex items-center justify-center border border-gray-300 bg-lime-400 shadow-md rounded-lg animate-slide-up hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
          <span className="text-xs text-center">slideup</span>
        </Link>
        
        {/* Slide Left */}
        {/*<Link to="/card_service" className="w-32 h-24 flex items-center justify-center border border-gray-300 bg-blue-500 shadow-md rounded-lg animate-slide-left hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
          <span className="text-xs text-center">slideleft</span>
        </Link>*/}
        
        {/* Slide Right */}
        {/*<Link to="/card_service" className="w-32 h-24 flex items-center justify-center border border-gray-300 bg-red-500 shadow-md rounded-lg animate-slide-right hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
          <span className="text-xs text-center">sliderightINDIRA</span>
        </Link>*/}
      </div>
      
      <style>{`
        @keyframes slide-in-down {
          0% {
            visibility: visible;
            transform: translate3d(0, -100%, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
        
        @keyframes slide-in-up {
          0% {
            visibility: visible;
            transform: translate3d(0, 100%, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
        
        @keyframes slide-in-left {
          0% {
            visibility: visible;
            transform: translate3d(-100%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
        
        @keyframes slide-in-right {
          0% {
            visibility: visible;
            transform: translate3d(100%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
        
        @keyframes slide-out-down {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            visibility: hidden;
            transform: translate3d(0, 100%, 0);
          }
        }
        
        @keyframes slide-out-up {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            visibility: hidden;
            transform: translate3d(0, -100%, 0);
          }
        }
        
        @keyframes slide-out-left {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            visibility: hidden;
            transform: translate3d(-100%, 0, 0);
          }
        }
        
        @keyframes slide-out-right {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            visibility: hidden;
            transform: translate3d(100%, 0, 0);
          }
        }
        
        @keyframes slide-down {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(0, 100%, 0);
          }
        }
        
        @keyframes slide-up {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(0, -100%, 0);
          }
        }
        
        @keyframes slide-left {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-100%, 0, 0);
          }
        }
        
        @keyframes slide-right {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(100%, 0, 0);
          }
        }
        
        .animate-slide-in-down {
          animation: slide-in-down 3s ease-in-out infinite;
        }
        
        .animate-slide-in-up {
          animation: slide-in-up 3s ease-in-out infinite;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 3s ease-in-out infinite;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 3s ease-in-out infinite;
        }
        
        .animate-slide-out-down {
          animation: slide-out-down 3s ease-in-out infinite;
        }
        
        .animate-slide-out-up {
          animation: slide-out-up 3s ease-in-out infinite;
        }
        
        .animate-slide-out-left {
          animation: slide-out-left 3s ease-in-out infinite;
        }
        
        .animate-slide-out-right {
          animation: slide-out-right 3s ease-in-out infinite;
        }
        
        .animate-slide-down {
          animation: slide-down 3s ease-in-out infinite;
        }
        
        .animate-slide-up {
          animation: slide-up 3s ease-in-out infinite;
        }
        
        .animate-slide-left {
          animation: slide-left 3s ease-in-out infinite;
        }
        
        .animate-slide-right {
          animation: slide-right 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;