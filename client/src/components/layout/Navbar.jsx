import { Bell, FileText } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <FileText className="text-white w-5 h-5" />
          </div>

          <div>
            <h1 className="text-xl font-bold text-gray-800">
              SWS AI Document Hub
            </h1>
          </div>
        </div>

        <button className="relative">
          <Bell className="w-6 h-6 text-gray-700" />

          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
            2
          </span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;