import {Task} from './task.model';

export class Project {
  public id?: string;
  public name: string;
  public tasksId: [];

  // public tasks: Task[];

  constructor(obj: any) {
    this.id = obj._id;
    this.name = obj.name;
    this.tasksId = obj.todos;
    // this.tasks = obj.todos ? obj.todos.map((task: Task) => new Task(task)) : [];
  }
}
