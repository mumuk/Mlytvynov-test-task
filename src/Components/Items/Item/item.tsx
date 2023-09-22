import React from 'react';
import styles from './Item.module.css';
import IItem from "../../../interfaces/IItem.ts";


interface ItemProps {
  item: IItem
  onDelete: () => void;
  onSelect: () => void;
  isSelected?: boolean;
}

const Item: React.FC<ItemProps> = ({item, onDelete, onSelect, isSelected}) => {

  const handleDelete = (e:MouseEvent) => {
    e.stopPropagation();
    onDelete();
  }
  return (
    <div
      className={styles.itemContainer}
      style={{border: isSelected ? '1px solid green' : '1px solid lightgray'}}
      onClick={onSelect}
    >
      <span className={styles.itemName}>{item.name}</span>
      <span className={styles.commentsCount}>{item.comments.length}</span>
      <button className="deleteButton" onClick={handleDelete}>Delete
      </button>
    </div>
  );
}

export default Item;