import { test, expect } from '@playwright/test';



test('Delete user using DELETE API', async ({ request }) => {



const response = await request.delete('https://jsonplaceholder.typicode.com/users/1');

expect(response.status()).toBe(200);


 const responseBody = await response.text();

 console.log('Response:', responseBody);


}
);

