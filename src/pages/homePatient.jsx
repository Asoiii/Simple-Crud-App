import { Link, useNavigate } from "react-router-dom";
import PatientTable from "../components/Pasien/PatientTable";

const Home = () => {
  const navigate = useNavigate();

  const handleEdit = (patient) => {
    navigate(`/edit/${patient.id}`); // Arahkan ke halaman edit dengan ID pasien
  };

  return (
    <div className="container mt-20">
      <h1 className="text-3xl font-bold mb-4 text-center">Data Pasien</h1>
      <div className="text-right mb-4">
        <Link
          to="/add"
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 no-underline"
        >
          Tambah Pasien
        </Link>
      </div>
      {/* Pass handleEdit to PatientTable */}
      <PatientTable onEdit={handleEdit} />
    </div>
  );
};

export default Home;
