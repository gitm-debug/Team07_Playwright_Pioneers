import fs from 'fs';

export default async function globalTeardown() {
  // Clean up test results from previous run
  const dirs = ['test-results', 'playwright-report'];
  for (const dir of dirs) {
    if (fs.existsSync(dir)) {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  }
  console.log('Global teardown completed');
}
