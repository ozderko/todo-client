import {TasksAction, TasksActionTypes} from '../tasks.action';
import {Task} from '../../models/task.model';

export interface State {
  tasks: Task[];
}

export const initialState: State = {
  tasks: []
};

export function tasksReducer(state = initialState, action: TasksAction): State {
  switch (action.type) {
    case TasksActionTypes.LoadTasksSuccess:
      return {
        ...state,
        tasks: action.tasks
      };
    default:
      return state;
  }
}
