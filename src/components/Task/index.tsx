import { Circle, Trash } from 'phosphor-react';

import styles from './styles.module.css';

type ITaskProps = {
    text: string;
    isDone: boolean;
}

export function Task({ text, isDone }: ITaskProps) {
    return (
        <div className={styles.task}>
            <Circle size={24} className={styles.circleIcon}/>
            <p className={styles.textTask}>{text}</p>
            <Trash size={18} className={styles.trashIcon}/>
        </div>
    );
}
