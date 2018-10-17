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
    public  picture: string,
    public company: string,
    public role: string,
    // Files:[{name:String}],
    public joinDate: Date,
    public rank: number,
    public investorAssociatedProjects: [string],
    // comments:String,
    public commentsTest: [{comment: string, name: string, date: string}],
    public  recruiter: string,
    public _id?: string) {}

}

class InvestorFormModel {
  constructor(
  public userName: string,
  public firstName: string,
  public lastName: string,
  public company: string,
  public cellPhoneNumber: string,
  public officePhoneNumber: string,
  public address: string,
  public city: string,
  public email: string,
  public birthDate: string,
 // public  picture: string,
  public role: string,
  // Files:[{name:String}],
  public joinDate: string,
  public rank: number,
  //public investorAssociatedProjects: [string],
  // comments:String,
  public commentsTest: [{comment: string, name: string, date: string}],
  public recruiter: string) {}
}

export {InvestorFormModel, InvestorModel};
