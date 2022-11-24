import { PlusCircle } from 'phosphor-react';

import styles from './styles.module.css';

type IFormProps = {
    taskText: string | undefined;
}

export function Form({ taskText }: IFormProps) {
    return (
        <form className={styles.form}>
            <input 
                placeholder="Adicione uma nova tarefa" 
                className={styles.input}
                value={taskText}
            />
            <button className={styles.button}>
                <strong className={styles.textButton}>Criar</strong>
                <PlusCircle size={16} />
            </button>
        </form>
    );
}
