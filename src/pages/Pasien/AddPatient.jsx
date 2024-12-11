import { useNavigate } from "react-router-dom";
import PatientForm from "../../components/Pasien/PatientForm";
import { useState } from "react";
import axios from "axios";

const AddPatient = () => {
  const navigate = useNavigate(); // Menggunakan useNavigate untuk redirect
  const [patient, setPatient] = useState({
    nama: "",
    umur: "",
    gender: "",
    alamat: "",
    telepon: "",
    email: "",
  });

  const handleSubmit = async () => {
    try {
      await axios.post(
        "https://67417a07e4647499008dcdb4.mockapi.io/DataPatient",
        patient
      );
      alert("Patient added successfully!"); // Tambahkan alert sukses
      navigate("/"); // Redirect ke halaman utama setelah menambah data pasien
    } catch (error) {
      console.error("Error adding patient:", error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Patient</h2>
      <PatientForm
        patient={patient}
        setPatient={setPatient}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddPatient;
