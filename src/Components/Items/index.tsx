import { useEffect } from "react";
import CreateItemForm from "./CreateItemForm";
import ItemList from "./List";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedItem } from "../../redux/itemSlice";
import {itemAPI} from "../../api/itemAPI.ts";
import {AppDispatch} from "../../redux/store.tsx";
import {RootState} from "../../redux/store.tsx";

function Items() {
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector((state:RootState) => state.items.items);


  useEffect(() => {
    dispatch(itemAPI.fetchItems());

  }, [dispatch]);

const handleSelect = (id: number) => {
  const item = items.find(item => item.id === id);
  if (item) {
    dispatch(setSelectedItem(item));
  }
}

const handleAdd = (name: string) => {
  const item = items.find(item => item.name === name);
  if (item) {
    alert('This item already exists');
    return;
  }else{
    const newItem = {
      id:Math.floor(Math.random() * 100),
      name: name,
      comments: []
    };
    dispatch(itemAPI.addItem(newItem));
  }

}
const handleDelete = (id: number) => {
  const item = items.find(item => item.id === id);
  if (item) {
    dispatch(itemAPI.deleteItem(id));
  }
}

  return (
    <div className="wrapper-column" >
      <h2>Items</h2>
      <CreateItemForm onAdd={handleAdd} />

      <ItemList items={items} onDelete={handleDelete} onSelect={handleSelect}/>

    </div>
  );
}

export default Items;