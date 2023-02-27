import { createSlice } from "@reduxjs/toolkit";

export const todoListSlice = createSlice({
    name:"Todolist",
    initialState:{
        inputValue:'',
        task:[],
        chack:[],
        edit :false
    },
    reducers:{
        setinputValue:(state, action)=>{
             state.inputValue = action.payload
        },
        setTask:(state)=>{
            if(state.edit){
                state.task[state.edit] = state.inputValue
            }
            else
           {state.task = [...state.task,state.inputValue]
           state.inputValue =""}
        },

        deleteTask:(state,action)=>{
             state.task =  state.task.filter((state,index)=>{
                return index !== action.payload
             })
        },

        editTask:(state,action)=>{
             state.inputValue = action.payload.input
             state.edit = action.payload.index
        },
        chackTask :(state)=>{
             state.chack =[...state.chack ,state.inputValue]
        }
    }
    
})


export const {setinputValue ,setTask ,deleteTask ,editTask ,chackTask} = todoListSlice.actions;

export default todoListSlice.reducer