This project is a basic Playwright automation framework created to demonstrate end-to-end testing of web applications.  
It covers functional test scenarios using Page Object Model with Playwright.

## Tech Stack
- Playwright
- JavaScript
- Node.js
- Git & GitHub

## Project Structure
Playwright-Automation/
 ├─ pages/
 ├─ tests/
 ├─ playwright.config.js
 ├─ package.json

## Features
- Page Object Model (POM)
- End-to-end test scenarios
- Assertions using Playwright expect
- HTML test reports
- Screenshot on test failure

## Prerequisites
- Node.js (v16 or above)
- npm

## Installation
1. Clone the repository  
   git clone https://github.com/vijayagolisg/Playwright-Automation.git
2. Navigate to the project folder  
   cd Playwright-Automation
3. Install dependencies  
   npm install

## Running Tests
- Run all tests  
  npx playwright test
- Run tests in headed mode  
  npx playwright test --headed
- Run particular test in headed mode and particular browser
  npx playwright test ./tests/loginApplication.spec.js --headed --project=firefox

## Test Reports
After execution, view the HTML report using:  
npx playwright show-report

## Purpose
This project is created for learning and demonstration of Playwright automation testing concepts as part of skill upgradation for QA automation roles.
