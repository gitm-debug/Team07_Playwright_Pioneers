# Team07 Playwright Pioneers

Playwright BDD test automation framework for LMS application.

## Setup

1. Clone the repo:
```bash
git clone https://github.com/gitm-debug/Team07_Playwright_Pioneers.git
cd Team07_Playwright_Pioneers
```

2. Install dependencies:
```bash
npm install
```

3. Create your `.env` file:
```bash
cp .env.example .env
```

4. Edit `.env` with your credentials:
```
BASE_URL=https://lms-frontend-hackathon-6dcccb9dd0fa.herokuapp.com/
EMAIL=your-email@example.com
PASSWORD=your-password
ROLE=Admin
```

5. Run tests:
```bash
npm test
```

6. Run tests in headed mode:
```bash
npx playwright test --headed
```

7. View HTML report:
```bash
npx playwright show-report
```

## Workflow

1. Create a feature branch:
```bash
git checkout -b feature-name
```

2. Make changes and commit:
```bash
git add .
git commit -m "Your changes"
```

3. Push branch and create PR:
```bash
git push origin feature-name
```

4. Get review and merge via PR (do not push directly to main)

## Project Structure

```
├── features/           # BDD feature files
├── stepDefinitions/    # Step definitions
├── pages/             # Page objects
├── Fixture/           # Test fixtures
├── test-data/         # Test data
├── utils/             # Utilities (logger)
├── .env.example       # Environment variables template
└── playwright.config.js
```
