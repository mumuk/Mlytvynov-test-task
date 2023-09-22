import axios from 'axios';
import {createAsyncThunk} from "@reduxjs/toolkit";
import IItem from "../interfaces/IItem.ts";

const fetchItems = createAsyncThunk("items/fetchItems", async () => {
  const {data} = await axios.get("http://localhost:3001/items");
  return data;
})

const addItem = createAsyncThunk("items/addItem", async (item:IItem) => {
  const {data} = await axios.post("http://localhost:3001/items", item);
  return data;
})

const deleteItem = createAsyncThunk("items/deleteItem", async (id:number) => {
  await axios.delete(`http://localhost:3001/items/${id}`);
  return id;
});

const updateItem = createAsyncThunk("items/updateItem", async (item:IItem) => {
  const {data} = await axios.put(`http://localhost:3001/items/${item.id}`, item);
  return data;
});

export const itemAPI = {
  fetchItems,
  addItem,
  deleteItem,
  updateItem
}