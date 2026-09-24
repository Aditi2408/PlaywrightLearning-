 export function validateStatusCode(response, expectedStatus) {

  const actualStatus = response.status();

  if (actualStatus !== expectedStatus) {
    throw new Error(
      `Expected status ${expectedStatus}, but received ${actualStatus}`
    );
  }

}