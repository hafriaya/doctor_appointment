import '../styles/common.css';
const Footer = () => {
  return (
    <footer>
      <div className="links_foot">
        <ul>
          <li>
            <a href="#home">home</a>
          </li>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#store">store</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </div>
      <div id="copyright">
        <p>© siTbib 2024 - tous droits réservés</p>
      </div>
    </footer>
  );
};
export default Footer;
