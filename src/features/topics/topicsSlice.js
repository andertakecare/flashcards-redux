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
        },
        addQuizId: (state, action) => {
            const { quizId, topicId } = action.payload;
            state.topics[topicId].quizIds.push(quizId);
        }
    }

})

export const { addTopic, addQuizId } = topicsSlice.actions;
export const selectTopics = (state) => state.topics.topics;

export default topicsSlice.reducer;