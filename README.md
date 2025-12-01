# Playwright JavaScript Demo Project

This is a Playwright JavaScript demo project, see key points below.

## Key points

- Playwright tests with Github Actions for CI/CD
- Set Env when run the workflow
- Select Browser for running the tests
- Set workers for running tests
- Take screenshot and video while test failed and attach it to Allure report
- Integrate Allure report
- Publish Allure report to gh-pages after testing finished

## Notes

- You need to configure you environment in config/env for various Env
- Support browser: chromium, for firefox, webkit, but you need to enable them in playwright.config.js
