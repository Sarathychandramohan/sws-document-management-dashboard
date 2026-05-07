import Navbar from "../components/layout/Navbar";
import UploadBox from "../components/upload/UploadBox";
import UploadQueue from "../components/upload/UploadQueue";
import DocumentTable from "../components/documents/documentTable";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50">

      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">

        <UploadBox />

        <UploadQueue />

        <DocumentTable />

      </main>
    </div>
  );
};

export default Dashboard;