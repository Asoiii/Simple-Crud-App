import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPatientById } from "../../services/patientService";

const DetailPatient = () => {
  const { id } = useParams(); // Ambil ID dari URL
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const data = await getPatientById(id);
        setPatient(data);
      } catch (error) {
        console.error("Failed to fetch patient detail:", error);
      }
    };
    fetchPatient();
  }, [id]);

  if (!patient) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-20 p-4 bg-white shadow-md rounded-lg max-w-4xl">
      <h2 className="text-2xl font-bold mb-4 text-center sm:text-3xl">
        Detail Pasien
      </h2>
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <p className="text-lg sm:w-1/3">
            <strong className="text-gray-700">Nama :</strong> {patient.nama}
          </p>
          <p className="text-lg sm:w-1/3">
            <strong className="text-gray-700">Gender :</strong> {patient.gender}
          </p>
          <p className="text-lg sm:w-1/3">
            <strong className="text-gray-700">Umur :</strong> {patient.umur}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <p className="text-lg sm:w-1/3">
            <strong className="text-gray-700">Penyakit :</strong>{" "}
            {patient.penyakit}
          </p>
          <p className="text-lg sm:w-1/3">
            <strong className="text-gray-700">Handphone:</strong>{" "}
            {patient.telepon}
          </p>
          <p className="text-lg sm:w-1/3">
            <strong className="text-gray-700">email :</strong> {patient.email}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <p className="text-lg sm:w-1/3">
            <strong className="text-gray-700">Alamat :</strong> {patient.alamat}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailPatient;
