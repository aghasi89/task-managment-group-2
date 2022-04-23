import "./Login.css"
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/actions/loginAction";
import { useNavigate, useParams } from 'react-router-dom';


export default () => {
    const [form, setForm] = useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const auth = useSelector((state)=>state.user.auth)

    const handleChange = (e)=> {
        setForm( prevState=> ({ ...prevState, [e.target.name]: e.target.value }))
    }

const handleLogin = () => {
    dispatch(login(form))
    if (auth) {
        navigate('/') 
    }    
}

    return (
        <div>
            <div className='bold-line'></div>
            <div className='container'>
                <div className='window'>
                    <div className='overlay'></div>
                    <div className='content'>
                        <div className='welcome'>Hello There!</div>
                        <div className='subtitle'>We're almost done. Before using our services you need to log In.</div>
                        <div className='input-fields'>
                            <input onChange={handleChange} name='email' type='email' placeholder='Email' className='input-line full-width'></input>
                            <input onChange={handleChange} name='password' type='password' placeholder='Password' className='input-line full-width'></input>
                        </div>
                        <div className='spacing'>or continue with <span className='highlight'>Facebook</span></div>
                        <div>
                            <button onClick={handleLogin} className='ghost-round full-width'>Log IN</button></div>
                    </div>
                </div>
            </div>

        </div>
    )
}