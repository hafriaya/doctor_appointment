import "../styles/doctors.css";
import { useEffect, useState } from "react";
import doctorsData from "../data/doctorsData.json";
import Header from "./header";
import Footer from "./footer";
import profilePicture from "../images/doctorsPic/blank-profile-picture-973460_960_720.webp";
import ratingStar from "../images/stars/rating-star-icon-28-removebg-preview.png";

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
        <div className="cardsDescription">
          {doctors.map((doctor) =>
            doctor.service === serviceSelected || serviceSelected === "" ? (
              <div className="doctorCard">
                {/* <img src={doctor.picture} alt={doctor.name+"_picture"}/> */}
                <img
                  id="profilePicture"
                  src={profilePicture}
                  alt={doctor.name + "_picture"}
                />
                <div className="bottomCard">
                  <h3>{doctor.name}</h3>
                  <p id="doctor_service">{doctor.service}</p>
                  <div className="ratingIcon">
                    <img src={ratingStar} alt="ratingStar" />
                    <p>{doctor.rating}</p>
                  </div>
                </div>
              </div>
            ) : (
              console.log("not selected")
            )
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Doctors;
