import React, { useState } from 'react';
import styles from './CreateCommentForm.module.css';

interface CreateCommentFormProps {
  onSubmit: (text: string, color: string) => void;
  disabled?: boolean;
}

const CreateCommentForm: React.FC<CreateCommentFormProps> = ({ onSubmit,disabled }) => {
  const [text, setText] = useState('');
  const [color, setColor] = useState('#ffffff');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (text.trim()) {
      onSubmit(text, color);
      setText('');
      setColor('#ffffff');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <label htmlFor="commentText" className={styles.label}>Text:</label>
        <input
          type="text"
          id="commentText"
          disabled={disabled}
          value={text}
          onChange={e => setText(e.target.value)}
          className={styles.input}
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="commentColor" className={styles.label}>Color:</label>
        <input
          disabled={disabled}
          type="color"
          id="commentColor"
          value={color}
          onChange={e => setColor(e.target.value)}
          className={styles.colorPicker}
        />
        <button
          type="submit"
          disabled={disabled}
          className={styles.submitButton}>Add comment</button>
      </div>


    </form>
  );
}

export default CreateCommentForm;
