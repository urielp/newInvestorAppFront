class InvestorModel {
  constructor(
    public userName: string,
    public firstName: string,
    public lastName: string,
    public cellPhoneNumber: string,
    public officePhoneNumber: string,
    public address: string,
    public city: string,
    public email: string,
    public birthDate: Date,
    public company: string,
    public role: string,
    public joinDate: Date,
    public rank: number,
    public investorAssociatedProjects: [string],
    public commentsTest: [{comment: string, name: string, date: string}],
    public  recruiter: string,
    public _id?: string,
    public  picture?: string) {}

}

class InvestorFormModel {
  constructor(
  public userName: string,
  public firstName: string,
  public lastName: string,
  public cellPhoneNumber: string,
  public officePhoneNumber: string,
  public address: string,
  public city: string,
  public email: string,
  public birthDate: string,
  public company: string,
  public role: string,
  public joinDate: string,
  public rank: number,
  public investorAssociatedProjects: [string],
  public commentsTest: [{comment: string, name: string, date: string}],
  public recruiter: string,
  public _id?: string,
  public  picture?: string) {}
}

export {InvestorFormModel, InvestorModel};
