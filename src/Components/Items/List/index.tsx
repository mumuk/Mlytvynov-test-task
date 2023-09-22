import React from 'react';

import Item from "../Item/item.tsx";
import IItem from "../../../interfaces/IItem.ts";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store.tsx";


interface ItemListProps {
  items: IItem[];
  onDelete: (id: number) => void;
  onSelect: (id: number) => void;
}

const ItemList: React.FC<ItemListProps> = ({items, onDelete, onSelect}) => {
  const selectedItem = useSelector((state: RootState) => state.items.selectedItem);
  return (
    <div>
      {items.map(item => (
        <Item
          key={item.id}
          isSelected={selectedItem?.id === item.id}
          item={item}
            onDelete={() => onDelete(item.id)}
            onSelect={() => onSelect(item.id)}
            />
            ))}
        </div>
        );
      }

      export default ItemList;