import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setinputValue, setTask ,deleteTask ,editTask } from '../fetures/todolist-redux/todolistSlice'
import "./todolist.css"

function Home() {
    const reffocus = useRef(0)
 
    // const tasks = useSelector((state) =>  state.Todolist.inputValue)
    const init = useSelector((state) =>  state.Todolist)
    const dispatch = useDispatch()
    


    function inputSubmit(e) {
        e.preventDefault()
        dispatch(setTask())
        reffocus.current.focus()
    }

    function deletetask(e,index){
        e.preventDefault()
        dispatch(deleteTask(index))

    }
    function edit(e,index ,input){
        e.preventDefault()
        dispatch(editTask({
            input:input, index:index  }))
    }

    return (
        <div className='box'>
            <form onSubmit={inputSubmit}>
                <input type='text'  ref ={reffocus} placeholder='Enter the task' value={init.inputValue}
                    onChange={(e) => dispatch(setinputValue(e.target.value))}></input>
                <button>Add task</button>
            </form>
            <ul>
                {
                    init.task.map((input, index) => {
                        return (
                        <li key={index}>
                        {input}
                        <a href='' onClick={(e) => deletetask(e, index)}>Delete</a>
                        <a href='' onClick={(e) =>edit(e,index ,input)}>Edit</a>
                       
                        </li>
                        );
                    })
                }
            </ul>
        </div>
    )
}

export default Home