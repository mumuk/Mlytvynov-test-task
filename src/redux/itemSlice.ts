import {createSlice, PayloadAction,} from "@reduxjs/toolkit";
import {itemAPI} from "../api/itemAPI.ts";
import IItem from "../interfaces/IItem.ts";

export interface IItemState {
  items: Array<IItem>;
  status: "idle" | "loading" | "failed";
  error: string | null;
  selectedItem: IItem | null;
}

const initialState: IItemState = {
  items: [],
  status: "idle",
  error: null,
  selectedItem: null
}

const itemSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
      setSelectedItem: (state, action: PayloadAction<IItem>) => {
        state.selectedItem = action.payload;
      }
    },
    extraReducers: (builder) => {
      builder.addCase(itemAPI.fetchItems.pending, (state) => {
        state.status = "loading";
      })
        .addCase(itemAPI.fetchItems.fulfilled, (state, action) => {
          state.status = "idle";
          state.items = action.payload;
        })
        .addCase(itemAPI.fetchItems.rejected, (state,) => {
          state.status = "failed";
        })
        .addCase(itemAPI.addItem.fulfilled, (state, action) => {
          state.items.push(action.payload);
        }).addCase(itemAPI.addItem.pending, (state,) => {
        state.status = "loading";
      })
        .addCase(itemAPI.addItem.rejected, (state,) => {
          state.status = "failed";
        })
        .addCase(itemAPI.deleteItem.pending, (state,) => {
          state.status = "loading";
        })
        .addCase(itemAPI.deleteItem.rejected, (state,) => {
          state.status = "failed";
        })
        .addCase(itemAPI.deleteItem.fulfilled, (state, action) => {
          state.items = state.items.filter(item => item.id !== action.payload);
        })
        .addCase(itemAPI.updateItem.fulfilled, (state, action) => {
          const index = state.items.findIndex(item => item.id === action.payload.id);
          state.items = [...state.items.slice(0, index), action.payload, ...state.items.slice(index + 1)];
          if (state.selectedItem?.id === action.payload.id) {
            state.selectedItem = action.payload;
          }
        })
        .addCase(itemAPI.updateItem.pending, (state,) => {
          state.status = "loading";
        }).addCase(itemAPI.updateItem.rejected, (state,) => {
        state.status = "failed";
      })
    }
  }
)

export const {setSelectedItem} = itemSlice.actions;
export default itemSlice.reducer;