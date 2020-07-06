import NavButton from "./NavButton";
import NavBarLogo from "./NavBarLogo";
import styles from "./NavBar.module.scss";

const NavBar = (props) => (
  <div className={styles.NavBar}>
    <div className={styles.NavBarInternal}>
      <NavBarLogo />
      {props.navButtons.map((button) => (
        <NavButton key={button.path} path={button.path} label={button.label} />
      ))}
    </div>
  </div>
);

export default NavBar;
