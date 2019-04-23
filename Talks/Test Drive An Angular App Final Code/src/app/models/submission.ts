export class Submission {
  private FirstName: string;
  private LastName: string;
  private Email: string;
  private Title: string;
  private Abstract: string;

  constructor(firstName: string, lastName: string, email: string, title: string, abstract: string) {
    this.FirstName = firstName;
    this.LastName = lastName;
    this.Email = email;
    this.Title = title;
    this.Abstract = abstract;

  }
}
