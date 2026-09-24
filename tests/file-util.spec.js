import { test, expect } from '@playwright/test';

const {fileExists} = require('../utils/fileUtil.js');

test('File Utility - Verify File Exists', async () => {

  const filePath = 'test-data/sample.txt1';

  const exists = fileExists(filePath);

  console.log('File Exists:', exists);

  expect(exists).toBe(true);

});