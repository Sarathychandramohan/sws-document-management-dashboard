const uploads = [
  {
    name: "company-policy.pdf",
    progress: 100,
    size: "2.4 MB",
    status: "Completed",
  },
  {
    name: "employee-guide.pdf",
    progress: 70,
    size: "1.2 MB",
    status: "Uploading",
  },
];

const UploadQueue = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="text-xl font-semibold mb-6">
        Upload Queue
      </h3>

      <div className="space-y-4">
        {uploads.map((file, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-4"
          >
            <div className="flex justify-between mb-2">
              <div>
                <h4 className="font-medium text-gray-800">
                  {file.name}
                </h4>

                <p className="text-sm text-gray-500">
                  {file.size}
                </p>
              </div>

              <span className="text-sm text-blue-600">
                {file.status}
              </span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${file.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadQueue;