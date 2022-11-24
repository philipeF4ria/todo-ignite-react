import { Circle, Trash } from 'phosphor-react';

import styles from './styles.module.css';

type ITaskProps = {
    text: string;
    isDone: boolean;
    onRemove: () => void;
}

export function Task({ text, isDone, onRemove }: ITaskProps) {
    return (
        <div className={styles.task}>
            <Circle size={24} className={styles.circleIcon}/>
            <p className={styles.textTask}>{text}</p>
            <Trash size={18} className={styles.trashIcon} onClick={onRemove}/>
        </div>
    );
}
