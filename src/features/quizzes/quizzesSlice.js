import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";


export const quizzesSlice = createSlice({
    name: "quizzes",
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const { id } = action.payload;
            state.quizzes[id] = action.payload;
        }
    }
});

export const addQuizAndQuizIdToTopic = ( payload ) => {
    // console.log(JSON.stringify( payload, null, 2)); //showing the payload in console
    return (dispatch) => {
        dispatch(quizzesSlice.actions.addQuiz(payload));
        dispatch(addQuizId({ topicId: payload.topicId, quizId: payload.id }));
    };
};

export const { addQuiz } = quizzesSlice.actions;
export const selectQuizzes = (state) => state.quizzes.quizzes;
export default quizzesSlice.reducer;