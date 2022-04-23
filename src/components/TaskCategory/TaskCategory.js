import "./task.css"
import gif4 from "../../assets/gif4.gif"



import TaskItem from "../Task/TaskItem"
export default () => {
    return (
        <div className="category">
            <div><TaskItem /></div>
            <img src={gif4} alt="gif" />
        </div>
    )
}