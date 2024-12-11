import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { getDoctors, deleteDoctor } from "../../services/doctorService";

const DoctorTable = ({ onEdit }) => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  // Ambil data dokter saat komponen dimuat
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await getDoctors();
        setDoctors(data);
      } catch (error) {
        console.error("Failed to fetch doctors:", error);
      }
    };
    fetchDoctors();
  }, []);

  // Fungsi untuk menghapus dokter
  const handleDelete = async (id) => {
    if (!window.confirm("Apakah Anda yakin ingin menghapus dokter ini?")) {
      return; // Konfirmasi untuk menghindari penghapusan yang tidak disengaja
    }

    try {
      await deleteDoctor(id);
      setDoctors((prevDoctors) =>
        prevDoctors.filter((doctor) => doctor.id !== id)
      ); // Pastikan state diperbarui dengan aman
    } catch (error) {
      console.error("Failed to delete doctor:", error);
    }
  };

  // Fungsi untuk navigasi ke detail dokter
  const handleDetailClick = (id) => {
    navigate(`/doctor-detail/${id}`); // Pastikan path sesuai dengan rute di aplikasi Anda
  };

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full bg-white shadow-md rounded-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left">Nama</th>
            <th className="px-4 py-2 text-left">Spesialis</th>
            <th className="px-4 py-2 text-left hidden md:table-cell">
              Telepon
            </th>{" "}
            {/* Hanya terlihat pada layar medium ke atas */}
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {doctors.length > 0 ? (
            doctors.map((doctor) => (
              <tr key={doctor.id} className="border-t">
                <td className="px-4 py-2">{doctor.nama}</td>
                <td className="px-4 py-2">{doctor.spesialis}</td>
                <td className="px-4 py-2 hidden md:table-cell">
                  {doctor.telepon}
                </td>{" "}
                {/* Hanya terlihat pada layar medium ke atas */}
                <td className="px-4 py-2">
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => onEdit(doctor.id)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-700 text-xs md:text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDetailClick(doctor.id)}
                      className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-700 text-xs md:text-sm"
                    >
                      Detail
                    </button>
                    <button
                      onClick={() => handleDelete(doctor.id)}
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
                Tidak ada data dokter.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

// Validasi tipe props
DoctorTable.propTypes = {
  onEdit: PropTypes.func.isRequired,
};

export default DoctorTable;
