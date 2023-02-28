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
    updateTask: (state, { payload }) => {
      state.tasksList = state.tasksList.filter((task) => {
        let taskValues = Object.values(task)[0];
        return taskValues.taskName !== payload.oldTaskName;
      });
      delete payload.oldTaskName;
      state.tasksList.push(payload);
    },
    deleteTask: (state, { payload }) => {
      state.tasksList = state.tasksList.filter((task) => {
        let taskValues = Object.values(task)[0];
        return taskValues.taskName !== payload.taskName;
      });
    },
  },
});

export default taskSlice.reducer;
export const { addNewTask, updateTask, deleteTask } = taskSlice.actions;

export const selectTaskList = (state) => state.tasks.tasksList;
