import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

// eslint-disable-next-line react/prop-types
const Logo = ({ LogoSrc }) => {
  return (
    <Link to={LogoSrc}>
      <img src="/logo.png" alt="WorldWise logo" className={styles.logo} />
    </Link>
  );
};

export default Logo;
