import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types"; // Tambahkan ini

const PatientForm = ({ patient, onSubmit }) => {
  const [formData, setFormData] = useState({
    id: "",
    nama: "",
    gender: "",
    alamat: "",
    umur: "",
    penyakit: "",
    telepon: "",
  });

  useEffect(() => {
    if (patient) {
      setFormData({
        id: patient.id,
        nama: patient.nama,
        gender: patient.gender,
        alamat: patient.alamat,
        umur: patient.umur,
        penyakit: patient.penyakit,
        telepon: patient.telepon,
        email: patient.email,
      });
    }
  }, [patient]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.id) {
      try {
        await axios.put(
          `https://67417a07e4647499008dcdb4.mockapi.io/DataPatient/${formData.id}`,
          formData
        );
        alert("Patient updated successfully!"); // Tambahkan alert
        onSubmit();
      } catch (error) {
        console.error("Error editing patient:", error);
      }
    } else {
      try {
        await axios.post(
          "https://67417a07e4647499008dcdb4.mockapi.io/DataPatient",
          formData
        );
        alert("Patient added successfully!"); // Tambahkan alert
        onSubmit();
      } catch (error) {
        console.error("Error adding patient:", error);
      }
    }
  };

  return (
    <div>
      <h2 className="text-center text-2xl text-blue-600 mt-5 S ">
        Data Pasien
      </h2>
      <form
        className="bg-white p-6 rounded-lg shadow-md  space-y-4 max-w-lg mx-auto w-full md:w-3/4 lg:w-2/3"
        onSubmit={handleSubmit}
      >
        <div>
          <label
            htmlFor="nama"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="nama"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            placeholder="Nama....."
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div>
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-gray-700"
          >
            Gender
          </label>
          <input
            type="text"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            placeholder="gender..."
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div>
          <label
            htmlFor="umur"
            className="block text-sm font-medium text-gray-700"
          >
            Umur
          </label>
          <input
            type="text"
            id="umur"
            name="umur"
            value={formData.umur}
            onChange={handleChange}
            placeholder="umur...."
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div>
          <label
            htmlFor="penyakit"
            className="block text-sm font-medium text-gray-700"
          >
            Penyakit
          </label>
          <input
            type="text"
            id="penyakit"
            name="penyakit"
            value={formData.penyakit}
            onChange={handleChange}
            placeholder="penyakit...."
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div>
          <label
            htmlFor="alamat"
            className="block text-sm font-medium text-gray-700"
          >
            Alamat
          </label>
          <input
            type="text"
            id="alamat"
            name="alamat"
            value={formData.alamat}
            onChange={handleChange}
            placeholder="alamat....."
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div>
          <label
            htmlFor="telepon"
            className="block text-sm font-medium text-gray-700"
          >
            Handhphone
          </label>
          <input
            type="telepon"
            id="telepon"
            name="telepon"
            value={formData.telepon}
            onChange={handleChange}
            placeholder="Handphone"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email......."
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full md:w-auto"
        >
          {formData.id ? "Update Patient" : "Add Patient"}
        </button>
      </form>
    </div>
  );
};

// Tambahkan validasi props di sini
PatientForm.propTypes = {
  patient: PropTypes.shape({
    id: PropTypes.string,
    nama: PropTypes.string,
    alamat: PropTypes.string,
    umur: PropTypes.string,
    gender: PropTypes.string,
    penyakit: PropTypes.string,
    telepon: PropTypes.string,
    email: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
};

export default PatientForm;
