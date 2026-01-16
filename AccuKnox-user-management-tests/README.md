# AccuKnox User Management Automation Tests

## Overview
This repository contains end-to-end automation tests for the **User Management module** in OrangeHRM.  
The tests cover the following flows:
- Navigate to Admin module
- Add a new user
- Search for a user
- Edit user details
- Validate updated details
- Delete a user

Tests are implemented using **Playwright** with JavaScript.

---

## Playwright Version
- `@playwright/test` version: 1.41.0
- Node.js version: >= 18.x (recommended)

---

## Project Setup

1. **Clone the repository**
```bash
git clone https://github.com/<your-username>/AccuKnox-user-management-tests.git
cd AccuKnox-user-management-tests
```

2. **Install dependencies**
```bash
npm install
```

3. **Install Playwright browsers**
```bash
npx playwright install
```

4. **Verify installation**
```bash
npx playwright --version
```

---

## Running Test Cases

1. **Run all tests**
```bash
npx playwright test
```

2. **Run tests in headed mode (browser visible)**
```bash
npx playwright test --headed
```

3. **Run a specific test file**
```bash
npx playwright test tests/userManagement.spec.js
```

4. **Generate HTML report**
```bash
npx playwright show-report
```

5. **Run in UI mode**
```bash
npx playwright test --ui
```
---

## Notes / Best Practices

- Tests include proper waits for stable elements (spinner, table, dropdowns, and toast messages).  
- Tests are written using **separate test blocks** for each scenario.  
- Recommended to run on a stable network for consistent results.

---

## Credentials (for demo purposes)

- Username: `Admin`  
- Password: `admin123`  



