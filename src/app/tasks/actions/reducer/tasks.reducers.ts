import {TasksAction, TasksActionTypes} from '../tasks.action';
import {Task} from '../../models/task.model';
import {Marker} from '../../models/marker.model';

export interface State {
  tasks: Task[];
  markers: Marker[];
}

export const initialState: State = {
  tasks: [],
  markers: []
};

export function tasksReducer(state = initialState, action: TasksAction): State {
  switch (action.type) {
    case TasksActionTypes.LoadTasksSuccess:
      return {
        ...state,
        tasks: action.tasks
      };
    case TasksActionTypes.SelectTaskSuccess:
      return {
        ...state,
        tasks: action.tasks
      };
    case TasksActionTypes.CreateTaskSuccess:
      return {
        ...state,
        tasks: action.tasks
      };
    case TasksActionTypes.LoadMarkersSuccess:
      return {
        ...state,
        markers: action.markers
      };
    case TasksActionTypes.SelectMarkerSuccess:
      return {
        ...state,
        tasks: action.tasks
      };
    case TasksActionTypes.SaveMarkerSuccess:
        return {
          ...state,
          markers: action.markers
        };
    default:
      return state;
  }
}
