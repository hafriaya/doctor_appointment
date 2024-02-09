import Footer from "./footer";
import Header from "./header";
import { useEffect, useState } from "react";
import doctorsData from "../data/doctorsData.json";
import "../styles/doctorProfile.css";
import profilePicture from "../images/doctorsPic/blank-profile-picture-973460_960_720.webp";
import { useParams } from "react-router-dom";

const DoctorProfile = () => {
  const { doctorId } = useParams();
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    setDoctors(doctorsData);
  }, []);
  return (
    <>
      <Header />
      <article>
        <div className="doctorProfile">
          {doctors.map((doctor) =>
            doctor.id === Number(doctorId) ? (
              <div className="topArticle">
                <div className="sideBySide">
                  <div className="rightSide">
                    <div className="pdpDoctor">
                      <img id="pdpDoctorImg"
                        src={profilePicture}
                        alt={doctor.name + "_picture"}
                      />
                    </div>
                  </div>
                  <div className="leftSide">
                    <div className="doctorInformation">
                    <h2>{doctor.name}</h2>
                    <h4>{doctor.service}</h4>
                    </div>

                  </div>
                </div>
              </div>
            ) : (
              console.log("not selected")
            )
          )}
        </div>
      </article>
      <Footer />
    </>
  );
};
export default DoctorProfile;
