import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: JSON.parse(localStorage.getItem("todo")) || [],
  filterState: "all",
  status: "idle",
};

export const fetchData = createAsyncThunk("api/fetchData", async () => {
  try {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/users/1/todos"
    );
    const fetchData = res.data;
    localStorage.setItem("todo", JSON.stringify(fetchData));
    return fetchData;
  } catch (error) {
    throw error;
  }
});

const todoReducer = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newId = state.data.length + 1;
      const newTodo = {
        id: newId,
        title: action.payload.title,
        completed: action.payload.completed,
      };
      state.data.push(action.payload);
      localStorage.setItem(
        "todo",
        JSON.stringify([
          ...JSON.parse(localStorage.getItem("todo") || "[]"),
          newTodo,
        ])
      );
    },
    updateFilter: (state, action) => {
      state.filterState = action.payload;
    },

    updateTodo: (state, action) => {
      const { id, title, completed } = action.payload;
      const todoIndex = state.data.findIndex((todo) => todo.id === id);
      if (todoIndex !== -1) {
        state.data[todoIndex] = {
          ...state.data[todoIndex],
          title,
          completed,
        };
        localStorage.setItem("todo", JSON.stringify(state.data));
      }
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      const updatedData = state.data.filter((todo) => todo.id !== id);
      state.data = updatedData;
      localStorage.setItem("todo", JSON.stringify(updatedData));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export const { addTodo, updateTodo, updateFilter, deleteTodo } =
  todoReducer.actions;
export default todoReducer.reducer;
