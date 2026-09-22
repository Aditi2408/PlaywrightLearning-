import { test, expect } from '@playwright/test';


test("post User API test",async({request})=>
{
//sending data

 const requestbody = {
    name:'Aditi',
    email:'test@test.com'
};


const response = await request.post('https://jsonplaceholder.typicode.com/users',
    {data:requestbody});



expect(response.status()).toBe(201);

//converting HTML response to Json

 const data = await response.json();
expect(data.name).toBe('Tanu');
expect(data.email).toBe('test@test.com');
}
)