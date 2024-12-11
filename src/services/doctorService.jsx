// doctorService.js
const BASE_URL = "https://67417a07e4647499008dcdb4.mockapi.io/DataDokter"; // Endpoint untuk dokter

// Fungsi untuk mendapatkan data dokter
export const getDoctors = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch doctors");
  }
  return response.json();
};

// Fungsi untuk mendapatkan detail dokter berdasarkan ID
export const getDoctorById = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch doctor detail");
  }
  return response.json();
};

// Fungsi untuk menambah dokter
export const addDoctor = async (doctor) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(doctor),
  });
  if (!response.ok) {
    throw new Error("Failed to add doctor");
  }
  return response.json();
};

// Fungsi untuk mengedit dokter berdasarkan ID
export const editDoctor = async (id, doctor) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(doctor),
  });
  if (!response.ok) {
    throw new Error("Failed to update doctor");
  }
  return response.json();
};

// Fungsi untuk menghapus dokter berdasarkan ID
export const deleteDoctor = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete doctor");
  }
};
