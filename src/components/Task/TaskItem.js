import { useSelector } from 'react-redux';
import { Link, useNavigate,useParams } from 'react-router-dom';


export default () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const task= useSelector((state)=>state.task)
    const newTask = task.filter(item=>item.projectID == id)
    const createTask = ()=> {
        navigate(`/CreateTask/${id}`)
    }
    return (
        <div >
            <button onClick={createTask} className='task_button' >New task</button>
            <div >
                {
                    newTask?.map(task=>(
                        <div key={task.id}>{task.text}</div>
                    ))
                }
            </div>
        </div>
    )
}
