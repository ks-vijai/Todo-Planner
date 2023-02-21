import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userList: [],
  tasksList: [
    {
      tictactoe: {
        id: 1,
        username: "vijai@gmail.com",
        taskName: "tictactoe",
        startDate: "Feb 22",
        endDate: "Feb 23",
        project: "",
        progress: "Todo",
        description: "",
        liked: true,
      },
      planner: {
        id: 2,
        username: "vijai@gmail.com",
        taskName: "planner",
        startDate: "Feb 22",
        endDate: "Feb 23",
        project: "",
        progress: "InProgress",
        description: "",
        liked: false,
      },
    },
  ],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    newTask: (state, { payload }) => {
      state.tasksList = payload;
    },
  },
});

export default taskSlice.reducer;
export const { newTask } = taskSlice.actions;
