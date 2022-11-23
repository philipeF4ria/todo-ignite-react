import styles from './styles.module.css';

import logo from '../../../public/assets/logo.png';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="To Do" />
        </header>
    );
}
