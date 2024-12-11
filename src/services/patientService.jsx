import axios from "axios";

// Base URL untuk MockAPI
const BASE_URL = "https://67417a07e4647499008dcdb4.mockapi.io/DataPatient";

// Ambil data pasien
export const getPatients = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching patients:", error);
    throw error;
  }
};

export const getPatientById = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};

// Tambah pasien baru
export const addPatient = async (patient) => {
  try {
    const response = await axios.post(BASE_URL, patient);
    return response.data;
  } catch (error) {
    console.error("Error adding patient:", error);
    throw error;
  }
};

// Update data pasien
export const updatePatient = async (id, patient) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, patient);
    return response.data;
  } catch (error) {
    console.error("Error updating patient:", error);
    throw error;
  }
};

// Hapus pasien
export const deletePatient = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting patient:", error);
    throw error;
  }
};
