import { PlusCircle } from 'phosphor-react';

import styles from './styles.module.css';

export function Form() {
    return (
        <form className={styles.form}>
            <input placeholder="Adicione uma nova tarefa" className={styles.input}/>
            <button className={styles.button}>
                <strong className={styles.textButton}>Criar</strong>
                <PlusCircle size={16} />
            </button>
        </form>
    );
}
