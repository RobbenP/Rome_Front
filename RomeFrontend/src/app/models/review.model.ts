export class Review {
  constructor(
    public reviewID: number,
    public reviewText: string,
    public userPlacerID: number,
    public userRecieverID: number,
    public assignmentID: number
  ) {}
}
