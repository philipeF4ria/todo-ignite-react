import styles from './styles.module.css';

type ICounterProps = {
    total: number;
    done: number;
}

export function Counter({ total, done }: ICounterProps) {
    return (
        <div className={styles.countersContainer}>
            <div className={styles.counter}>
                <strong className={styles.counterText}>Tarefas criadas</strong>
                <span className={styles.counterNumberContainer}>
                    <strong className={styles.counterNumber}>{total}</strong>
                </span>
            </div>
            <div className={styles.counter}>
                <strong className={styles.counterText} style={{color: '#8284FA'}}>Concluídas</strong>
                <span className={styles.counterNumberContainer}>
                    <strong className={styles.counterNumber}>{done}</strong>
                </span>
            </div>
        </div>
    );
}
