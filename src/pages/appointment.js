import Footer from "./footer";
import Header from "./header";
import '../styles/appointment.css';
const Appointment = () => {
  return (
    <>
      <Header />
      <div className="appointment_container">
        <div className="form_container">
            <h3>make appointment</h3>
            <form action="#" method="post">
                <input type="text" name="name" placeholder="Name"/>
            </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Appointment;
