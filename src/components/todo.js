import React, { useState } from 'react'
import "./style.css"
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from '../actions/index';


const Todo = () => {
    const [inputdata, setInputData] = useState("")
    const list = useSelector((state) => state.todo.todoReducers.list);
    const dispatch = useDispatch();


    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <img src="./images/todo.svg" alt="todologo" />
                        <figcaption> Add your List Here 👍 </figcaption>
                    </figure>

                    {/* adding new item  */}

                    <div className='addItems'>
                        <input type="text" placeholder='Add Items' className='form-control' value={inputdata} onChange={(e) => setInputData(e.target.value)}/>
                        <i className="fa fa-plus add-btn" onClick={() => dispatch(addTodo(inputdata), setInputData(''))}></i>
                    </div>


                    {/* show item container */}

                    <div className='showItems'>
                        {list.map((curElem) => {
                            return (
                                <div className='eachItem' key={curElem.id}>
                                    <h3>{curElem.data}</h3>
                                    <div className='todo-btn'>
                                        <i className="fa fa-trash-alt add-btn" title='Delete Item' onClick={() => dispatch(deleteTodo(curElem.id))}></i>
                                    </div>
                                </div>
                            )
                        })}

                    </div>


                    {/* button: Remove all */}

                    <div className='showItems'>
                        <button className='btn effect04' data-sm-link-text="Remove All" onClick={() => dispatch(removeTodo())}> <span>CHECK LIST</span> </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Todo
