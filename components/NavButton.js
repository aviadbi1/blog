import Link from "next/link";
import { withRouter } from "next/router";
import styles from "./NavButton.module.scss";

const NavButton = (props) => {
  let active = props.router.pathname === props.path;

  return (
    <Link href={props.path}>
      <div className={styles.NavButton + ` ${active ? styles.active : ""}`}>
        <a className={styles.Label}>{props.label}</a>
      </div>
    </Link>
  );
};

export default withRouter(NavButton);
