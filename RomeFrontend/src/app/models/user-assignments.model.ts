export class UserAssignments {
  constructor(
    public userAssignmentID: number,
    public userID: number,
    public assignmentID: number,
    public status: boolean,
    public progress: number
  ) {}
}
