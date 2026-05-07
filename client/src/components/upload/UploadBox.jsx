import { UploadCloud } from "lucide-react";

const UploadBox = () => {
  return (
    <div className="bg-white rounded-2xl border-2 border-dashed border-gray-300 p-16 text-center">

      <div className="flex justify-center mb-4">
        <div className="bg-gray-100 p-4 rounded-full">
          <UploadCloud className="w-10 h-10 text-gray-500" />
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Drop files here or click to browse
      </h2>

      <p className="text-gray-500 mb-6">
        Upload PDF documents with real-time progress tracking
      </p>

      <div className="flex justify-center gap-3">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
          Single File
        </button>

        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2 rounded-lg">
          Bulk Upload
        </button>
      </div>
    </div>
  );
};

export default UploadBox;