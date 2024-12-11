import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const DoctorForm = ({ doctor, onSubmit }) => {
  const [formData, setFormData] = useState({
    id: "",
    nama: "",
    umur: "",
    gender: "",
    spesialis: "",
    telepon: "",
    alamat: "",
    email: "",
  });

  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    if (doctor) {
      setFormData({
        id: doctor.id,
        nama: doctor.nama,
        umur: doctor.umur,
        gender: doctor.gender,
        spesialis: doctor.spesialis,
        telepon: doctor.telepon,
        alamat: doctor.alamat,
        email: doctor.email,
      });
    }
  }, [doctor]);

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
          `https://67417a07e4647499008dcdb4.mockapi.io/DataDokter/${formData.id}`,
          formData
        );
        alert("Doctor updated successfully!");
        onSubmit();
        navigate("/"); // Navigate back to home after submitting
      } catch (error) {
        console.error("Error editing doctor:", error);
      }
    } else {
      try {
        await axios.post(
          "https://67417a07e4647499008dcdb4.mockapi.io/DataDokter",
          formData
        );
        alert("Doctor added successfully!");
        onSubmit();
        navigate("/"); // Navigate back to home after adding
      } catch (error) {
        console.error("Error adding doctor:", error);
      }
    }
  };

  return (
    <div>
      <h2 className="text-center text-2xl text-blue-600 mt-5 S ">
        Data Dokter
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
            Nama
          </label>
          <input
            type="text"
            id="nama"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            placeholder="Nama..."
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
            placeholder="Umurr..."
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
            placeholder="Gender..."
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div>
          <label
            htmlFor="spesialis"
            className="block text-sm font-medium text-gray-700"
          >
            Spesialis
          </label>
          <input
            type="text"
            id="spesialis"
            name="spesialis"
            value={formData.spesialis}
            onChange={handleChange}
            placeholder="Spesialis"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div>
          <label
            htmlFor="telepon"
            className="block text-sm font-medium text-gray-700"
          >
            Nomor Telepon
          </label>
          <input
            type="telepon"
            id="telepon"
            name="telepon"
            value={formData.telepon}
            onChange={handleChange}
            placeholder="Phone Number..."
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
            placeholder="Address..."
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
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full md:w-auto"
        >
          {formData.id ? "Update Doctor" : "Add Doctor"}
        </button>
      </form>
    </div>
  );
};

// Validasi props
DoctorForm.propTypes = {
  doctor: PropTypes.shape({
    id: PropTypes.string,
    nama: PropTypes.string,
    umur: PropTypes.string,
    gender: PropTypes.string,
    spesialis: PropTypes.string,
    telepon: PropTypes.string,
    alamat: PropTypes.string,
    email: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
};

export default DoctorForm;
