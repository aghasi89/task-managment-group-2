import gif1 from "../../assets/gif1.gif"
import React, { useState } from 'react'
import { addProject } from '../../store/actions/projectsActions';
import { useDispatch, useSelector } from "react-redux";
import { v1 as uuid } from 'uuid';
import { useNavigate,useParams } from 'react-router-dom';
import { addTask } from "../../store/actions/taskActions";


export default () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [task, setTask] = useState("")
    const {id} = useParams()


    const handlerAddTask = (e) => {
        e.preventDefault()
        dispatch(addTask({
            projectID:id,
            id: uuid(),
            text: task,
        }))
        setTask("")
        navigate(`/category/${id}`)

    }
    const onChangeTask = (e) => {
        setTask(e.target.value)
    }

    return (
        <div className="create_task">
            <div>
                <input
                    type="text"
                    className="task_input"
                    placeholder="task name"
                    value={task}
                    onChange={onChangeTask}

                >

                </input>
                <button
                    className="gray_button"
                    onClick={handlerAddTask}

                >new task</button>
            </div>
            <div>
                <img src={gif1} alt="gif" className="task_gif" />
            </div>

        </div>
    )
}