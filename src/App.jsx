import { Route, Routes } from "react-router-dom";
import Home from "./pages/homePatient";

import NavbarComponent from "./components/NavbarComponent";
import EditPatient from "./pages/Pasien/EditPatient";
import DetailPatient from "./pages/Pasien/DetailPatient";

import EditDoctor from "./pages/Dokter/EditDoctor";
import DetailDoctor from "./pages/Dokter/DetailDoctor";

import HomeDokter from "./pages/homeDokter";

import AddPatient from "./pages/Pasien/AddPatient";

import AddDoctor from "./pages/Dokter/AddDoctor";

function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        {/* Rute untuk Pasien */}
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddPatient />} />
        <Route path="/edit/:id" element={<EditPatient />} />
        <Route path="/patients/:id" element={<DetailPatient />} />

        {/* Rute Untuk Dokter */}

        <Route path="/doctors" element={<HomeDokter />} />
        <Route path="/add-doctor" element={<AddDoctor />} />
        <Route path="/edit-doctor/:id" element={<EditDoctor />} />
        <Route path="/doctor-detail/:id" element={<DetailDoctor />} />
      </Routes>
    </>
  );
}

export default App;
