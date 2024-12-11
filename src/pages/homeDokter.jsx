import { Link, useNavigate } from "react-router-dom";
import PatientTable from "../components/Dokter/DoctorTable";

const HomeDokter = () => {
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/edit-doctor/${id}`); // Sesuaikan path ke edit-doctor
  };
  return (
    <div className="container mt-20">
      <h1 className="text-3xl font-bold mb-4 text-center">Data Dokter</h1>
      <div className="text-right mb-4">
        <Link
          to="/add-doctor"
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 no-underline"
        >
          Tambah Dokter
        </Link>
      </div>
      {/* Pass handleEdit to PatientTable */}
      <PatientTable onEdit={handleEdit} />
    </div>
  );
};

export default HomeDokter;
