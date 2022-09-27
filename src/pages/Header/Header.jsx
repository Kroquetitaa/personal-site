import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul className="nav--info">
        <Link to="/" className="nav--info__img">
          <li>
            <img
              src="/Kroquetita.png"
              alt="kroquetita"
              width={64}
              height={64}
            />
          </li>
        </Link>
        <Link to="/kroquetita" className="nav--info__name">
          <li>Kroquetita</li>
        </Link>
        <Link to="/studies" className="nav--info__studies">
          <li>Studies</li>
        </Link>
        <Link to="/experiency" className="nav--info__experiency">
          <li>Experiency</li>
        </Link>
        <Link to="/skills" className="nav--info__experiency">
          <li>Skills</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
