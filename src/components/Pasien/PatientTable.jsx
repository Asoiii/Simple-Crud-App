import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { getPatients, deletePatient } from "../../services/patientService";

const PatientTable = ({ onEdit }) => {
  const [patients, setPatients] = useState([]);
  const navigate = useNavigate();

  // Ambil data pasien saat komponen dimuat
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const data = await getPatients();
        setPatients(data);
      } catch (error) {
        console.error("Failed to fetch patients:", error);
      }
    };
    fetchPatients();
  }, []);

  // Fungsi untuk menghapus pasien
  const handleDelete = async (id) => {
    if (!window.confirm("Apakah Anda yakin ingin menghapus pasien ini?")) {
      return;
    }
    try {
      await deletePatient(id);
      setPatients((prevPatients) =>
        prevPatients.filter((patient) => patient.id !== id)
      );
    } catch (error) {
      console.error("Failed to delete patient:", error);
    }
  };

  // Fungsi untuk navigasi ke detail pasien
  const handleDetailClick = (id) => {
    navigate(`/patients/${id}`);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full bg-white shadow-md rounded-md mt-6">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left">Nama</th>
            <th className="px-4 py-2 text-left hidden md:table-cell">Umur</th>
            <th className="px-4 py-2 text-left">Penyakit</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.length > 0 ? (
            patients.map((patient) => (
              <tr key={patient.id} className="border-t">
                <td className="px-4 py-2">{patient.nama}</td>
                <td className="px-4 py-2 hidden md:table-cell">
                  {patient.umur}
                </td>
                <td className="px-4 py-2">{patient.penyakit}</td>
                <td className="px-4 py-2">
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => onEdit(patient)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-700 text-xs md:text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDetailClick(patient.id)}
                      className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-700 text-xs md:text-sm"
                    >
                      Detail
                    </button>
                    <button
                      onClick={() => handleDelete(patient.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-700 text-xs md:text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-4 text-gray-500">
                Tidak ada data pasien.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

// Tambahkan validasi prop-types
PatientTable.propTypes = {
  onEdit: PropTypes.func.isRequired,
};

export default PatientTable;
