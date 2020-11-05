import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Task} from '../models/task.model';
import {map} from 'rxjs/operators';

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
}
