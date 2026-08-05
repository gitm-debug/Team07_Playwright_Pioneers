import fs from 'fs';

export default async function globalTeardown() {
  const authFile = 'playwright/.auth/user.json';
  if (fs.existsSync(authFile)) {
    fs.unlinkSync(authFile);
    console.log('Auth file cleaned up');
  }
  console.log('All tests completed');
}
