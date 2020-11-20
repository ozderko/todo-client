import {TasksAction, TasksActionTypes} from '../tasks.action';
import {Task} from '../../models/task.model';
import {Marker} from '../../models/marker.model';
import {Project} from '../../models/project.model';
import {TaskChangeProject} from "../../models/taskChangeProject.model";

export interface State {
  projects: Project[];
  tasks: Task[];
  markers: Marker[];
}

export const initialState: State = {
  projects: [],
  tasks: [],
  markers: []
};

export function tasksReducer(state = initialState, action: TasksAction): State {
  switch (action.type) {
    case TasksActionTypes.LoadProjectsSuccess:
      return {
        ...state,
        projects: action.projects
      };
    case TasksActionTypes.CreateProjectSuccess:
      return {
        ...state,
        projects: action.projects
      };
    case TasksActionTypes.ChangeTaskProjectSuccess:
      return {
        ...state,
        projects: action.projects
      };
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
