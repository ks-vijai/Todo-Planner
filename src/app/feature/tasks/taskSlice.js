import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userList: [],
  tasksList: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addNewTask: (state, { payload }) => {
      state.tasksList.push(payload);
    },
  },
});

export default taskSlice.reducer;
export const { addNewTask } = taskSlice.actions;

export const selectTaskList = (state) => state.tasks.tasksList;
