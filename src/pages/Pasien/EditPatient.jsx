import { useParams, useNavigate } from "react-router-dom";
import PatientForm from "../../components/Pasien/PatientForm";
import { useState, useEffect } from "react";
import axios from "axios";

const EditPatient = () => {
  const { id } = useParams(); // Ambil id dari URL
  const navigate = useNavigate();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await axios.get(
          `https://67417a07e4647499008dcdb4.mockapi.io/DataPatient/${id}`
        );
        setPatient(response.data); // Set data pasien
      } catch (error) {
        console.error("Error fetching patient:", error);
      }
    };
    fetchPatient();
  }, [id]);

  const handleSubmit = () => {
    navigate("/"); // Kembali ke halaman utama setelah update
  };

  if (!patient) {
    return <p>Loading...</p>; // Tampilkan loading saat data belum tersedia
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Edit Patient</h2>
      <PatientForm patient={patient} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditPatient;
