import styles from "./NavBarLogo.module.scss";
import utilStyles from "../styles/utils.module.css";

const NavBarLogo = (props) => (
  <img
    src="/images/profile.jpg"
    className={`${styles.logoImage} ${utilStyles.borderCircle}`}
    alt="Logo"
  />
);

export default NavBarLogo;
