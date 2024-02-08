import "../styles/doctors.css";
import { useEffect, useState } from "react";
import doctorsData from "../data/doctorsData.json";
import Header from "./header";
import Footer from "./footer";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [serviceSelected, setServiceSelected] = useState("");
  useEffect(() => {
    setDoctors(doctorsData);
  }, []);
  return (
    <>
      <Header />
      <main>
        <div className="filterDoctors">
          <select
            name="filterService"
            id="filterService"
            onChange={(e) => setServiceSelected(e.target.value)}
          >
            <option selected>Select Service</option>
            {doctors.map((doctor) => (
              <option value={doctor.service}>{doctor.service}</option>
            ))}
          </select>
        </div>
        {doctors.map((doctor) => (
          <div>
            <p>{doctor.service}</p>
            <p>{doctor.picture}</p>
            <p>{doctor.name}</p>
            <p>{doctor.rating}</p>
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
};
export default Doctors;
