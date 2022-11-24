import { Circle, CheckCircle, Trash } from 'phosphor-react';

import styles from './styles.module.css';

type ITaskProps = {
    text: string;
    isDone: boolean;
    onRemove: () => void;
    onTaskDone: () => void;
}

export function Task({ text, isDone, onRemove, onTaskDone }: ITaskProps) {

    return (
        <div className={styles.task}>
            {
                isDone === false ? (<Circle 
                    size={24} 
                    className={styles.circleIcon} 
                    onClick={onTaskDone}
                />)
                :
                (<CheckCircle 
                    size={24} 
                    className={styles.circleIcon}
                    onClick={onTaskDone}
                    style={{ color: '#5E60CE' }}
                />)
            }
            <p 
                className={styles.textTask}
                style={isDone === true ? {textDecorationLine: 'line-through'} : undefined}
            >
                {text}
            </p>
            <Trash size={18} className={styles.trashIcon} onClick={onRemove}/>
        </div>
    );
}
