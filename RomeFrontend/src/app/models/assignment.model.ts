export class Assignment {
  constructor(
    public assignmentID: number,
    public naam: string,
    public omschrijving: string,
    public locatie: string,
    public quantityUsers: number,
    public status: boolean,
    public companyID:number
  ) {}
}
