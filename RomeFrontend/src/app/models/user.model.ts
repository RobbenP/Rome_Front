export class User {
  constructor(
    public userID: number,
    public username: string,
    public email: string,
    public password: string,
    public roleID: number,
    public token: string,
    public companyID: number,
    public studentID: number
  ) {}
}
