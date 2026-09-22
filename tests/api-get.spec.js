import { test, expect } from '@playwright/test';


test("Get User API test",async({request})=>
{
//sending get Request 


const response = await request.get('https://jsonplaceholder.typicode.com/users/1');

//validating status code

expect(response.status()).toBe(200);

//converting HTML response to Json

 const data = await response.json();
expect(data.name).toBe('Leanne Graham');
expect(data.email).toBe('Sincere@april.biz');
}
)