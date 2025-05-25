import fs from 'fs';
import path from 'path';

// Ensure the _redirects file exists in the output directory
const redirectsContent = '/* /index.html 200';
const outputDir = path.resolve('dist/public');

// Write the _redirects file to the output directory
fs.writeFileSync(path.join(outputDir, '_redirects'), redirectsContent);

console.log('✅ Created _redirects file for Netlify');