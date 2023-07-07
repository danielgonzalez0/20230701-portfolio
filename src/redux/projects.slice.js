import { createSlice } from '@reduxjs/toolkit';

export const projectsSlice = createSlice({
  name: 'projects',
  initialState: {},
  reducers: {
    getAllProjects: (state, action) => {
      return (state = action.payload);
    },
  },
});
export const { getAllProjects } = projectsSlice.actions;

export default projectsSlice.reducer;
