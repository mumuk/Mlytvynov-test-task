import React from 'react';
import Comment from '../Comment';
import styles from './CommentList.module.css';
import IComment from "../../../interfaces/IComment.ts";



interface CommentListProps {
  comments:IComment[];
  onDeleteComment: (id: number) => void;
}

const CommentList: React.FC<CommentListProps> = ({comments, onDeleteComment}) => {

  return (
    <div className={styles.commentList}>
      {comments.map(comment => (
        <Comment
          key={comment.id}
          comment={comment}
          onDelete={onDeleteComment}
        />
      ))}
    </div>
  );
}

export default CommentList;
