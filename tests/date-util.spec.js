import { test, expect } from '@playwright/test';

const { getFutureDate } = require('../utils/dateUtil.js');

test('Date Utility - Generate Future Date', async () => {

  const futureDate = getFutureDate(7);

  console.log('Future Date:', futureDate);

  expect(futureDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);

});