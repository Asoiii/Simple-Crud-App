import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DoctorForm from "../../components/Dokter/DoctorForm";

const AddDoctor = () => {
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState({
    nama: "",
    umur: "",
    gender: "",
    spesialis: "",
    telepon: "",
    alamat: "",
    email: "",
  });

  const handleSubmit = async () => {
    try {
      await axios.post(
        "https://67417a07e4647499008dcdb4.mockapi.io/DataDokter",
        doctor
      );
      alert("Doctor added successfully!"); // Tambahkan alert sukses
      navigate("/doctors"); // Redirect ke halaman utama setelah menambah data dokter
    } catch (error) {
      console.error("Error adding doctor:", error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Doctor</h2>
      <DoctorForm
        doctor={doctor}
        setDoctor={setDoctor}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddDoctor;
