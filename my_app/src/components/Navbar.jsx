import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

export default function Nav(){
    return(
    <nav className={styles.nav}>
        <div className={styles.logoContainer}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Finn_the_Human_character.svg/250px-Finn_the_Human_character.svg.png" alt="" />
        </div>
        <div className="nav-section">
            <ul className={styles.navItems}>
                <li className={styles.navItem}><Link className={styles.navLink} to="/">Home</Link></li>
                <li className={styles.navItem}><Link className={styles.navLink} to="/page2">Page2</Link></li>
                <li className={styles.navItem}><Link className={styles.navLink} to="/gengars">Gengars</Link></li>
            </ul>
        </div>
    </nav>


    )

}