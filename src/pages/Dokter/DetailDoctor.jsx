import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoctorById } from "../../services/doctorService";

const DetailDoctor = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const data = await getDoctorById(id);
        setDoctor(data);
      } catch (error) {
        console.error("Failed to fetch doctor:", error);
      }
    };
    fetchDoctor();
  }, [id]);

  if (!doctor) return <div>Loading...</div>;

  return (
    <div className="container mx-auto mt-20 p-4 bg-white shadow-md rounded-lg max-w-4xl">
      <h2 className="text-2xl font-bold mb-4 text-center sm:text-3xl">
        Detail Dokter
      </h2>
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <p className="text-lg sm:w-1/3">
            <strong className="text-gray-700">Nama :</strong> {doctor.nama}
          </p>
          <p className="text-lg sm:w-1/3">
            <strong className="text-gray-700">Gender :</strong> {doctor.gender}
          </p>
          <p className="text-lg sm:w-1/3">
            <strong className="text-gray-700">Umur :</strong> {doctor.umur}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <p className="text-lg sm:w-1/3">
            <strong className="text-gray-700">Spesialis :</strong>{" "}
            {doctor.spesialis}
          </p>

          <p className="text-lg sm:w-1/3">
            <strong className="text-gray-700">Handphone :</strong>{" "}
            {doctor.telepon}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <p className="text-lg sm:w-1/3">
            <strong className="text-gray-700">Alamat :</strong> {doctor.alamat}
          </p>
          <p className="text-lg sm:w-1/3">
            <strong className="text-gray-700">Email :</strong> {doctor.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailDoctor;
