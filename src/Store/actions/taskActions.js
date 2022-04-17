//import { taskTypes } from "../types/taskTypes";
export const ADD_TASK= 'ADD_TASK';
export const DELETE_TASK= 'DELETE_TASK';

export function addTask(task) {
    return {
      type: ADD_TASK,
      task
    }
  }
  export function deleteTask(id) {
    return {
      type: DELETE_TASK,
      id
    }
  }
  