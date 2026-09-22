import { test, expect } from '@playwright/test';


test('Update user details using PUT API',async({request})=>
{

    const response = await request.put('https://jsonplaceholder.typicode.com/users/1',
        {data:{
            name:'Tom',
            username:'tomcom',
            email:'tom@test1.com'
        }});

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.name).toBe('Tom');
    expect(responseBody.username).toBe('tomcom');
      expect(responseBody.email).toBe('tom@test1.com');
      
      

        }
    );

       




