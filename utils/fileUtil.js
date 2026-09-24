const fs = require('fs');

 export function fileExists(filePath) {
  return fs.existsSync(filePath);
}