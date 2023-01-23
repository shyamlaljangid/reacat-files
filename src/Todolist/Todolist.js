import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import "./Todolist.css"

function Todolist() {

    const [inpvalue, setvalue] = useState('')
    const [task, setsubmit] = useState([])
    const [Check, setcheck] = useState([])
    const [Edit ,setedit] = useState(false)


    function change(e) {
        setvalue(e.target.value)
    }


    function submitvalue(e) {
        e.preventDefault()
        if(Edit=== false)
        { setsubmit([...task, inpvalue])}
        else{
            task[Edit] =inpvalue
        }
        setvalue('')
    }






    function Checkico(e,index ){
        e.preventDefault();
        setcheck([...Check,index])
    }





    function Deleteico(e, index) {
        e.preventDefault();
        setsubmit(
            task.filter((inp, ivalue) => {
                return (
                    (index !== ivalue)
                )
            })
        )
    }




function Editico(e,index){
        e.preventDefault();
       setvalue(task[index])
        setedit(index)
}


    return (
        <>
            <h1>To do list</h1>

            <form onSubmit={submitvalue}>
                <input type="text" placeholder='Enter your Name' value={inpvalue} onChange={change}></input>
                <button type="submit">submit</button>
            </form>
            <div>{
                task.map((name, index) => {
                    return (
                        <ul key={index}  className={(Check.includes(index))?"line" :""}>
                            <li>
                                {name}
                                <a href='' onClick={(e) => Deleteico(e, index)}><DeleteIcon /></a>
                                <a href='' onClick={(e)=>Editico(e,index)}><EditIcon /></a>
                                <a href='' onClick={(e) => Checkico(e, index)}><CheckIcon /></a>
                            </li>
                        </ul>
                    )
                })
            }

            </div>

        </>
    )
}

export default Todolist