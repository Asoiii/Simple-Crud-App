import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import DoctorForm from "../../components/Dokter/DoctorForm";

const EditDoctor = () => {
  const { id } = useParams(); // Ambil ID dari URL
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await axios.get(
          `https://67417a07e4647499008dcdb4.mockapi.io/DataDokter/${id}`
        );
        setDoctor(response.data); // Set data dokter
      } catch (error) {
        console.error("Error fetching doctor data:", error);
      }
    };

    fetchDoctor();
  }, [id]);

  const handleSubmit = () => {
    alert("Data berhasil diperbarui!");
    navigate("/doctors"); // Arahkan ke halaman utama dokter setelah berhasil
  };

  if (!doctor) {
    return <p>Loading...</p>; // Tampilkan loading sementara data belum tersedia
  }

  return (
    <div>
      <h2 className="text-center font-bold text-xl mb-4">Edit Doctor</h2>
      <DoctorForm doctor={doctor} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditDoctor;
