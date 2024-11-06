const { createSlice } = require("@reduxjs/toolkit");

export const interviewSlice = createSlice({
    name: "interview",
    initialState: {
       job:{
        jobRole:"",
        jobDesc:"",
        jobExp:0,
       },
        questionsAnswer: ["hello"],
        feedback:[]
    },
    reducers: {
        AddJobDetails: (state, action) => {
            // Destructure the payload to get job details
            const { jobRole, jobDesc, jobExp } = action.payload;
            // Update the job object in the state
            state.job = {
                jobRole,
                jobDesc,
                jobExp,
            };
        },
        addQuestionAnswer: (state, action) => {
            state.questionsAnswer=[...state.questionsAnswer,action.payload]
        },
        addfeedback:(state,action)=>{
            state.feedback.push(action.payload)
        }
       
    }
});

export const { addQuestionAnswer,AddJobDetails,addfeedback} = interviewSlice.actions;
export default interviewSlice.reducer;
