import Navbar from "../components/layout/Navbar";
import UploadBox from "../components/upload/UploadBox";
import UploadQueue from "../components/upload/UploadQueue";
import DocumentTable from "../components/documents/documentTable";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50">

      <Navbar />

      <main className="max-w-6xl mx-auto py-24 px-10 space-y-10">

        <UploadBox />

        <UploadQueue />

        <DocumentTable />

      </main>
    </div>
  );
};

export default Dashboard;