export class AgeValidation {
  constructor(page) {
    this.page = page;


    this. ageInput =page.locator('//input[@name="age"]');
    this.errormessage= page.locator("//span[text()='You must be 18 or older']");
  }
   async input(age) {
    await this.ageInput.fill(age);
}
}

