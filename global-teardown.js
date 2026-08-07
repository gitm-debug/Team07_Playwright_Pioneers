import fs from 'fs';

export default async function globalTeardown() {
  // Only clean up playwright-report (not test-results, needed for videos/screenshots)
  const dir = 'playwright-report';
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
  console.log('Global teardown completed');
}
