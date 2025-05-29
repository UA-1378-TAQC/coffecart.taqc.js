# ☕ Coffecar Playwright
**Automated end-to-end testing project for the Coffecar web application, powered by [Playwright](https://playwright.dev/).**  
This project supports headless, headed, UI-driven testing, and is built with scalability and reliability in mind.
---

## 🚀 Prerequisites
### 1. Install Node.js
Ensure Node.js is installed:

```bash
node -v
npm -v
````
If not installed, download from [NodeJs](https://nodejs.org/)

### 2. Install TypeScript & Playwright
```bash
npm install --save-dev typescript
npm install --save-dev playwright
npx playwright install
````

## 📦 Project Setup
### 1. Clone the Repository
```bash
git clone https://github.com/UA-1378-TAQC/coffecart.taqc.js.playwright
cd playwright
````

### 2. Install Dependencies
```bash
npm install
````

### 3. (Optional) Setup Environment Variables
```bash
cp .env.example .env
# Edit the `.env` file with your values
````

## 🧪 Test Execution Scripts
| Script Command                                    | Description                                                                               |
|---------------------------------------------------|-------------------------------------------------------------------------------------------|
| `npm test`                                        | Runs all tests in headless mode.                                                          |
| `npm run test:headed`                             | Runs all tests with browser UI visible.                                                   |
| `npm run test:ui`                                 | Launches the **Playwright Test Runner UI** — interactive and visual.                      |
| `npm run report`                                  | Opens the latest HTML(`playwright-report/`) test report in the browser.                   |
| `npm run codegen`                                 | Launches **Playwright Codegen** — generates tests from browser actions.                   |
| `npm run test:file --{yourTestNameSubstringHere}` | Runs a specific test file. (ex: `npm run test:file -- tests/playwrightTestExample.spec.ts`).            |
| `npm run test:grep -- {yourTestNameSubstringHere}` | Runs tests matching **a substring in the test name**. `npm run test:grep -- loginWithVa`. |
| `npm run test:serial`                             | Runs all tests **sequentially**, one at a time.                                           |
| `npm run test:headed test:serial`                 | Runs all tests sequentially, one at a time with browser UI.                               |
| `npm run test:headed:serial --{yourFileNameHere}` | Runs a specific file in headed & serial mode. (`npm run test:headed:serial --example`)    |
| `npm run test:headed:file {yourFileNameHere}`     | Runs a specific file in headed **headed** mode (with browser UI).                         |
| `npm run report`                                  | Opens the latest HTML(`playwright-report/`) test report in the browser.                   |

```
coffecar-playwright/
├── src/
│   ├── component/       # Reusable components
│   ├── modal/           # Modal windows
│   └── pages/           # Page Object Model (POM) definitions
│
│── tests/               # Test specs
│
├── .env.example         # Sample environment config
├── package.json         # Project metadata and scripts
└── playwright.config.ts # Playwright configuration
```
⚠️ If you want to change playwright configuration, you can edit `playwright.config.ts` file. (Not recommended without group agreement) (If so, Do NOT push such changes to the repo)
⚠️ If you want to turn off parallel execution, you can edit `fullyParallel: false` in `playwright.config.ts` file. (Do not push such changes to the repo)