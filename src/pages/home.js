import Footer from "./footer";
import Header from "./header";
import "../styles/home.css";
import { useState } from "react";
const Home = () => {
  const [citySelected, setCitySelected] = useState("");
  const [serviceSelected, setServiceSelected] = useState("");
  const cities = [
    "casablanca",
    "eljadida",
    "safi",
    "rabat",
    "tangier",
    "dakhla",
    "agadir",
    "ouajda",
    "fes",
    "meknes",
    "totouane",
    "ayoune",
    "marrakech",
  ];
  const services = ["Dentist", "Cardiology", "Medicine"];
  return (
    <>
      <Header />
      <div className="main_bg">
        <div className="main_bg_text">
          <span className="apple_day">An apple a day </span>
          <br />
          <span> keeps the Doctor </span>
          <br />
          <span> away 🍎</span>
        </div>
      </div>
      <div className="container">
        <section className="booking">
          <div className="top_section">
            <h3>Book an Appointment</h3>
            <p>We are always ready to solution your all problems</p>
          </div>
          <form action="#" method="post">
            <div className="form_inputs">
              <select
                name="cities"
                id="cities"
                required
                onChange={(e) => setCitySelected(e.target.value)}
              >
                <option selected>Select City</option>
                {cities.map((city) => (
                  <option value={city}>{city}</option>
                ))}
                {/* {console.log(citySelected)} */};
              </select>
              {/* <input type="text" name="name" placeholder="Name" required /> */}
              {/* <input type="email" name="email" placeholder="Email" required /> */}
              <select
                name="services"
                id="services"
                required
                onChange={(e) => setServiceSelected(e.target.value)}
              >
                <option selected>Select Service</option>
                {services.map((service) => (
                  <option value={service}>{service}</option>
                ))}
                {/* {console.log(serviceSelected)} */}
                ;
              </select>
              <input type="button" id="submit_booking" value="submit" />
            </div>
          </form>
        </section>
        <section className="clients_comments"></section>
      </div>
      <Footer />
    </>
  );
};
export default Home;
