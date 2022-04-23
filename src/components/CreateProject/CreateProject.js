import React, { useState } from 'react'
import { addProject } from '../../store/actions/projectsActions';
import { useDispatch, useSelector } from "react-redux";
import { v1 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';




export default () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [value, setValue] = useState("")
    const handleAddProject = (e) => {
        e.preventDefault()
        dispatch(addProject({
            id: uuid(),
            text: value,
        }))
        setValue("")
        navigate("/")
    }
    const onChange = (e) => {

        setValue(e.target.value)
    }

    return (

        <div class="card">
            <h4>add new project</h4>
            <input type="text"
                placeholder="add new project"
                class="type-2"
                value={value}
                onChange={onChange} />
            <br />
            <button class="learn-more"
                onClick={handleAddProject}>
                <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span></span>
                <span class="button-text">new project</span>
            </button>

            <div class="loader"></div>
        </div>
    )
}
