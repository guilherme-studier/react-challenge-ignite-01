import toDoLogo from '../../assets/toDoLogo.svg';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import styles from './Header.module.css';
import { ChangeEvent, FormEvent, useState } from 'react';

interface Props {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
  const [title, setTitle] = useState('');

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTask(title);
    setTitle('');
  }

  return (
    <>
      <header className={styles.header}>
        <img src={toDoLogo} />

        <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input
          placeholder="Adicione uma nova tarefa"
          type="text"
          onChange={onChangeTitle}
          value={title}
        />
        <button>
          Criar
          <AiOutlinePlusCircle size={20}/>
        </button>
      </form>
      </header>
    </>
  )
}