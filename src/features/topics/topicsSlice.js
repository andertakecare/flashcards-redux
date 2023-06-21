import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    topics: {}
}

export const topicsSlice = createSlice({
    name: "topics",
    initialState,
    reducers: {
        addTopic: (state, action) => {
            state.topics[action.payload.id] = action.payload;
            state.topics[action.payload.id].quizIds = [];
        }
    }

})

export const { addTopic } = topicsSlice.actions;
export const selectTopics = (state) => state.topics.topics;

export default topicsSlice.reducer;