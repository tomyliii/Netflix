import "./header.css";
import logoNetflix from "../../assets/Images/Netflix-Logo-header.jpg";
const Header = () => {
  return (
    <header>
      <img src={logoNetflix} alt="Netflix" />
    </header>
  );
};

export default Header;
