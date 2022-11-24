import './styles/global.css';
import styles from './styles/app.module.css';

import { Header } from './components/Header';
import { Form } from './components/Form';
import { Task } from './components/Task';

function App() {
  return (
    <>
      <Header />
      <Form />
      <main className={styles.body}>
        <Task />
        <Task />
      </main>
    </>
  );
}

export { App }
