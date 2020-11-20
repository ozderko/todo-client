export class TaskChangeProject {
  constructor(public projectToDelete: string, public projectToSave: string, public taskId: string) {
  }
}
