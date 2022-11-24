import './styles/global.css';
import styles from './styles/app.module.css';

import { Header } from './components/Header';
import { Form } from './components/Form';
import { Task } from './components/Task';
import { Counter } from './components/Counter';

import clipboard from '../public/assets/icons/clipboard.png';

function App() {
  return (
    <>
      <Header />
      <Form />
      <main className={styles.body}>
        <Counter total={0} done={0}/>
        <div className={styles.emptyListContainer}>
          <img src={clipboard} alt="Clipboard" className={styles.emptyListIcon}/>
          <strong className={styles.emptyListText}>Você ainda não tem tarefas cadastradas</strong>
          <p className={styles.emptyListText}>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </main>
    </>
  );
}

export { App }
