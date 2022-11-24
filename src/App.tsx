import { FormEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';
import uuid from 'react-uuid';

import './styles/global.css';
import styles from './styles/app.module.css';

import { Header } from './components/Header';
import { Task } from './components/Task';
import { Counter } from './components/Counter';

import clipboard from '../public/assets/icons/clipboard.png';

type ITasks = {
  id: string;
  text: string;
  isDone: boolean;
}

function App() {
  const [taskText, setTaskText] = useState<string>('');
  const [tasks, setTasks] = useState<ITasks[]>([]);
  
  function handleCreateTask(event: FormEvent) {
    event.preventDefault();

    if (taskText.length < 1) {
      alert('Não é permitido texto vazio');

      return;
    }

    setTasks(prevState => [...prevState, {
      id: uuid(),
      text: taskText,
      isDone: false,
    }]);

    setTaskText('');
  }

  return (
    <>
      <Header />
      <form 
        className={styles.form}
        onSubmit={handleCreateTask}
      >
        <input 
          placeholder="Adicione uma nova tarefa" 
          className={styles.input}
          value={taskText}
          onChange={e => setTaskText(e.target.value)}
        />
        <button className={styles.button} type="submit">
          <strong className={styles.textButton}>Criar</strong>
          <PlusCircle size={16} />
        </button>
      </form>
      <main className={styles.body}>
        <Counter total={0} done={0} />
        {
          tasks.length > 0 ? 
            tasks.map(task => <Task key={task.id} text={task.text} isDone={task.isDone}/>) : 
            (
              <div className={styles.emptyListContainer}>
                <img src={clipboard} alt="Clipboard" className={styles.emptyListIcon}/>
                <strong className={styles.emptyListText}>Você ainda não tem tarefas cadastradas</strong>
                <p className={styles.emptyListText}>Crie tarefas e organize seus itens a fazer</p>
              </div>
            )
        }
        
      </main>
    </>
  );
}

export { App }
