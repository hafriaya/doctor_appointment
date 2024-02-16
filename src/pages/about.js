import "../styles/about.css";
import Footer from "./footer";
import Header from "./header";
import welcome_img from "../images/pictures/welcome_img.jpg";
import medical_mission from "../images/pictures/medical_mission1.jpg";
import medical_services from "../images/pictures/medical_sevices.webp";
import medical_staff from "../images/pictures/medical_staff1(1).jpg";
import medical_choose_us from "../images/pictures/medical_choose_us.jpg"
const About = () => {
  return (
    <>
      <Header />
      <div className="content">
        <div className="top_of_page">
          <div className="medical_bg_image">
            <div className="bg_text">
              <h1>About us</h1>
            </div>
          </div>
        </div>
        <div className="middle_of_page">
          <div className="about_description">
            <div className="about_artices">
              <div className="img_side">
                <img id="welcome_img" src={welcome_img} alt="welcome_img" />
              </div>
              <div className="artice_desc">
                <h2>
                  Welcome to <b>SiTbib</b>
                </h2>
                <p>
                  "At the heart of every patient's journey is the right to
                  choose," a principle that <b>SiTbib</b> embodies at its core.
                  Our mission transcends traditional healthcare by offering an
                  innovative platform where prioritizing your health and
                  convenience is our utmost goal. <b>SiTbib</b> is a pioneering
                  service designed to connect you seamlessly with medical
                  professionals across various specialties. Born from a vision
                  to integrate technology with the compassionate touch of
                  healthcare, <b>SiTbib</b>
                  revolutionizes how patients access and book doctor
                  appointments, ensuring care is just a click away.
                </p>
              </div>
            </div>
            <div className="about_artices">
              <div className="img_side">
                <img src={medical_mission} alt="medical_mission" />
              </div>
              <div className="artice_desc">
                <h2>Our Mission</h2>
                <p>
                  "To cure sometimes, to relieve often, to comfort always." Our
                  mission is woven from the threads of this timeless principle.
                  We are here to improve lives, offering each patient a path to
                  better health through exceptional medical care and
                  personalized treatments. Our commitment extends beyond curing
                  ailments; we advocate for preventive care and healthy
                  lifestyles, empowering our patients to lead their healthiest
                  lives.
                </p>
              </div>
            </div>
            <div className="about_artices">
              <div className="img_side">
                <img src={medical_services} alt="medical_services" />
              </div>
              <div className="artice_desc">
                <h2>Comprehensive Services</h2>
                <p>
                  "In diversity, there is beauty and strength." This adage is at
                  the heart of siTbib's approach to healthcare. Our platform
                  offers a wide range of medical services by connecting patients
                  with doctors for preventive health checks, routine
                  examinations, and specialized treatments for chronic
                  conditions. SiTbib is dedicated to meeting the diverse
                  healthcare needs of our community through a user-friendly
                  online booking system. Our commitment to leveraging the latest
                  technology ensures a smooth, efficient, and secure experience
                  for every patient seeking care.
                </p>
              </div>
            </div>
            <div className="about_artices">
              <div className="img_side">
                <img src={medical_staff} alt="medical_staff" />
              </div>
              <div className="artice_desc">
                <h2>Our Dedicated Team</h2>
                <p>
                  "At siTbib, excellence in healthcare starts with setting high
                  standards." Our team of board-certified physicians and
                  dedicated support staff is united by this belief. Committed to
                  ongoing education, they ensure access to cutting-edge
                  treatments personalized for each patient. Known for their
                  compassion and a patient-first approach, our professionals
                  create a caring environment where every individual feels heard
                  and supported. SiTbib is more than a team; it's a community
                  committed to delivering top-tier medical care with a heart.
                </p>
              </div>
            </div>
            <div className="about_artices">
              <div className="img_side">
                <img src={medical_choose_us} alt="medical_choose_us"/>
              </div>
              <div className="artice_desc">
                <h2>Why Choose SiTbib</h2>
                <p>
                  Choosing siTbib means choosing a partner who values your
                  health as much as you do. "The good physician treats the
                  disease; the great physician treats the patient who has the
                  disease." Our platform embodies this philosophy by focusing on
                  your individual health journey. With siTbib, you gain access
                  to a network of professionals ready to listen, care, and
                  dedicate themselves to your well-being, ensuring a healthcare
                  experience that's both innovative and grounded in compassion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default About;
