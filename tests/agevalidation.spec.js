import { test, expect } from '@playwright/test';

import { AgeValidation } from '../pages/AgeValidation'

const ageData = require('../test-data/ageData.json');

for (const data of ageData.ageScenarios) {

  test(`Age Boundary - ${data.type}`, async ({ page }) => {

    await page.goto('https://snipform.io/examples/advanced-validation/');

    const agevalid = new AgeValidation(page);
    
    await agevalid.input(data.age);

   

    await expect(agevalid.ageInput).toHaveValue(data.age);

    await agevalid.ageInput.press('Enter')

 
  
  

   if (Number(data.age) < 18) {
    await expect(agevalid.errormessage).toBeVisible();
   
  }else{
    await expect(agevalid.errormessage).not.toBeVisible();;
  }

});
}
