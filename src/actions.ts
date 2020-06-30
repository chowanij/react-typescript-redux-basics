import { Action } from "redux";
import { Task } from "./types";

export interface FetchTasksAction extends Action<'FETCH_TASKS'>{
    tasks: Task[]
}

export const fetchTasks = (): FetchTasksAction => ({
    type: 'FETCH_TASKS',
    tasks: [{title: 'First task'}, {title: 'Second Task'}, {title: 'Third Task'}]
})