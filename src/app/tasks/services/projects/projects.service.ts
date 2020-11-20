import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Project} from '../../models/project.model';
import {TaskChangeProject} from '../../models/taskChangeProject.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  public baseApiUrl = environment.baseApiUrl;

  constructor(private http: HttpClient) {
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.baseApiUrl}/project`).pipe(
      map((projects: Project[]) => projects.map((project: Project) => new Project(project)))
    );
  }

  createProject(project: Project): Observable<Project[]> {
    return this.http.post<Project[]>(`${this.baseApiUrl}/project`, project).pipe(
      map((projects: Project[]) => projects.map((proj: Project) => new Project(proj)))
    );
  }

  // TODO

  taskChangeProject(projectData: TaskChangeProject) {
    return this.http.put(`${this.baseApiUrl}/project`, projectData).pipe(
      map((projects: Project[]) => projects.map((project: Project) => new Project(project)))
    );
  }
}
