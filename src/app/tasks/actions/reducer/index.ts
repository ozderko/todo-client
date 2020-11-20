import * as fromTaskState from './tasks.reducers';
import {tasksReducer} from './tasks.reducers';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface TasksState {
  tasksList: fromTaskState.State;
}

export const reducers = {
  tasksList: tasksReducer
};

export const getTasksState = createFeatureSelector<TasksState>('tasks');

export const getTasksListState = createSelector(
  getTasksState,
  (state: TasksState) => state.tasksList
);

export const getProjects = createSelector(
  getTasksListState,
  (state: fromTaskState.State) => state.projects
);

export const getTasks = createSelector(
  getTasksListState,
  (state: fromTaskState.State) => state.tasks
);

export const getMarkers = createSelector(
  getTasksListState,
  (state: fromTaskState.State) => state.markers
);
