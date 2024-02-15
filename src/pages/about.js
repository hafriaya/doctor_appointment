import "../styles/about.css"
import Footer from "./footer";
import Header from "./header";

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
        <div className="middle_of_page"></div>
      </div>
      <Footer />
    </>
  );
};
export default About;
