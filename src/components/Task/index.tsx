import { Circle, Trash } from 'phosphor-react';

import styles from './styles.module.css';

export function Task() {
    return (
        <div className={styles.task}>
            <Circle size={24} className={styles.circleIcon}/>
            <p className={styles.textTask}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            <Trash size={18} className={styles.trashIcon}/>
        </div>
    );
}
