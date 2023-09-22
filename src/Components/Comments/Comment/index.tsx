import React from 'react';
import styles from './Comment.module.css';
import IComment from "../../../interfaces/IComment.ts";


interface CommentProps {
  comment: IComment
  onDelete: (id: number) => void;
}

const Comment: React.FC<CommentProps> = ({comment, onDelete}) => {
  const handleDelete = (e: MouseEvent) => {
    e.stopPropagation();
    onDelete(comment.id);
  }
  return (
    <div className={styles.comment}>
      <div
        className={styles.colorBox}
        style={{backgroundColor: comment.color}}></div>
      <p className={styles.text}>{comment.text}</p>
      <button
        onClick={handleDelete}
        className='deleteButton'>Delete
      </button>
    </div>
  );
}

export default Comment;