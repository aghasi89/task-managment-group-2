import { taskTypes } from "../types/taskTypes";


export function addTask(task) {
    return {
      type: taskTypes.ADD_TASK,
      task
    }
  }
  export function deleteTask(id) {
    return {
      type: taskTypes.DELETE_TASK,
      id
    }
  }
  