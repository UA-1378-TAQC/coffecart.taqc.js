# Coffecar Playwright

Automated testing project for the Coffecar application using Playwright.

## Setup Instructions

### 1. Install Node.js (if not already installed)
Check if Node.js is installed:
```
node -v
npm -v
```
If not installed, download from:
🔗 https://nodejs.org/

| Скрипт                                                | Що робить                                                                   |
|-------------------------------------------------------|-----------------------------------------------------------------------------|
| `npm test`                                            | Запускає всі тести у звичайному headless режимі.                            |
| `npm run test:headed`                                 | Запускає всі тести з **інтерфейсом браузера** (headed mode).                |
| `npm run test:ui`                                     | Відкриває **Playwright Test Runner UI** — зручно для вибору/запуску тестів. |
| `npm run report`                                      | Відкриває HTML-звіт (`playwright-report/`) після прогону тестів.            |
| `npm run codegen`                                     | Включає **Playwright Codegen** — записує кліки в реальний код.              |
| `npm run test:file`                                   | Запускає конкретний тестовий файл (наприклад: `tests/example.spec.ts`).     |
| `npm run test:grep -- {yourFileNameHere}`             | Запускає **тільки тести, що містять назву** у заголовку `test(...)`.        |
| `npm run test:serial`                                 | Запускає всі тести **послідовно**, один за одним (`--workers=1`).           |
| `npm run test:headed test:serial`                     | Запускає всі тести **послідовно**, один за одним (`--workers=1`).           |
| `npm run test:headed:serial -- {yourFileNameHere}` | Запускає всі тести **послідовно**, один за одним (з конктерного файлу).     |
| `npm run test:headed:file {yourFileNameHere}`         | Запускає конкретний файл у **headed** режимі (з відкриттям браузера).       |


Also install TypeScript: 
npm install --save-dev typescript

Install Playwright:
npm install --save-dev playwright

Run test in headed mode:
npx playwright test --headed

Recommended: Use the latest LTS (Long Term Support) version.

### 2. Clone the repository
```
git clone https://github.com/username/coffecar-playwright.git
cd coffecar-playwright
```
### 3. Install dependencies
```
npm install
```
This will create/update node_modules/ and install all required dependencies.
npx playwright install
### 4. (Optional) Create .env file
If the project uses environment variables:
```
cp .env.example .env
```
Then edit the file and add your values.

## Running Tests

### Run all tests
```
npm test
```
or
```
npx playwright test
```

### Run tests with browser UI visible
```
npm run test:headed
```

### Run tests with Playwright UI
```
npm run test:ui
```

### Run tests from a specific directory
```
npx playwright test tests
```

### View test report
```
npm run report
```

## Project Structure

- `tests/` - Test files
- `src/pages/` - Page objects
- `src/modal/` - Modal components
- `src/component/` - Reusable components
