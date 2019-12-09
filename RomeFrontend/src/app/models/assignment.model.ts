export class Assignment {
  constructor(
    public AssignmentID: number,
    public Naam: string,
    public Omschrijving: string,
    public Locatie: string,
    public QuantityUsers: number,
    public Status: boolean
  ) {}
}
