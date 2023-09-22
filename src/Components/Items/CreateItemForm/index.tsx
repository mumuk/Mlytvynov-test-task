// components/Index.tsx

import React, { useState, FormEvent } from 'react';
import styles from './CreateItemForm.module.css';
interface CreateItemFormProps {
  onAdd: (name: string) => void; // Callback для добавления нового элемента
}

const CreateItemForm: React.FC<CreateItemFormProps> = ({ onAdd }) => {
  const [name, setName] = useState(''); // Состояние для ввода имени

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (name.trim()) {
      onAdd(name);
      setName(''); // Очистить поле ввода после добавления
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <input
        className={styles.textInput}
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter item name"
      />
      <button type="submit" className={styles.addButton}>Add new</button>
    </form>
  );
};

export default CreateItemForm;
