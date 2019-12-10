export class Review {
  constructor(
    public reviewID: number,
    public reviewText: string,
    public userPlacerID: number,
    public userReceiverID: number,
    public assignmentID: number
  ) {}
}
