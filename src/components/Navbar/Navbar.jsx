import { NavLink } from "react-router-dom";
import { v4 as uuid } from "uuid"
import styles from "./Navbar.module.css";
import { navLinks } from "../../const/navLinks";

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar__container}>
                <input type="checkbox" name="" id=""/>
                <div className={styles.hamburger_lines}>
                    <span className={`${styles.line} ${styles.hamburger_line__one}`}></span>
                    <span className={`${styles.line} ${styles.hamburger_line__two}`}></span>
                    <span className={`${styles.line} ${styles.hamburger_line__three}`}></span>
                </div>
                <ul className={styles.menu_items}>
                    {navLinks.map((item) => (
                        <li key={uuid()}>
                            <NavLink to={item.path} className={({isActive}) => isActive ? styles.active_item : ""}>
                                {item.text}
                            </NavLink>                            
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}