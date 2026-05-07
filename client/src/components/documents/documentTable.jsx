const files = [
  {
    name: "employee-handbook.pdf",
    size: "2.1 MB",
    date: "Today",
  },
  {
    name: "security-policy.pdf",
    size: "1.5 MB",
    date: "Yesterday",
  },
];

const DocumentTable = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="text-xl font-semibold mb-6">
        Document Library
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3">Name</th>
              <th className="text-left py-3">Size</th>
              <th className="text-left py-3">Uploaded</th>
            </tr>
          </thead>

          <tbody>
            {files.map((file, index) => (
              <tr key={index} className="border-b">
                <td className="py-4">{file.name}</td>
                <td>{file.size}</td>
                <td>{file.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DocumentTable;