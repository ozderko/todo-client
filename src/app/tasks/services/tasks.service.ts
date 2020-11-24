import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Task} from '../models/task.model';
import {map} from 'rxjs/operators';
import {Project} from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public baseApiUrl = environment.baseApiUrl;

  constructor(private http: HttpClient) {
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseApiUrl}/todo`).pipe(
      map((tasks: Task[]) => tasks.map((task: Task) => new Task(task)))
    );
  }

  updateSelect(id: string): Observable<Task[]> {
    return this.http.put<Task[]>(`${this.baseApiUrl}/todo/selected/${id}`, {}).pipe(
      map((tasks: Task[]) => tasks.map((task: Task) => new Task(task)))
    );
  }

  createTask(task: Task, projectId: string): Observable<any> {
    return this.http.post<Task[]>(`${this.baseApiUrl}/todo/${projectId}`, task).pipe(
      map((data: any) => {
        const tasks = data.tasks.map((todo: Task) => new Task(todo));
        const projects = data.projects.map((project: Project) => new Project(project));
        return {tasks, projects};
      }));
  }

  selectMarker(id: string, color: string): Observable<Task[]> {
    return this.http.put<Task[]>(`${this.baseApiUrl}/todo/${id}`, {color}).pipe(
      map((tasks: Task[]) => tasks.map((todo: Task) => new Task(todo)))
    );
  }
}
