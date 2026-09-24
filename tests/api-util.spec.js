import { test, expect } from '@playwright/test';

const {validateStatusCode} = require('../utils/apiUtil.js');

test('API Utility - Validate Status Code', async ({ request }) => {

  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users/1'
  );

  validateStatusCode(response, 200);

  const data = await response.json();

  console.log('User:', data.name);

  expect(data.id).toBe(1);

});