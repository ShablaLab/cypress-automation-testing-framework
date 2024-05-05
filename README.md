# ypress-automation-testing-framework 

This guide explores the concept of a Cypress.js boilerplate and how it can streamline your Cypress testing workflow.

## Features

- Supports the execution of tests in both headless and interactive modes, allowing for flexible testing options.
- Provides easy-to-use commands and assertions for validating the behavior of web applications.
- Enables test execution and reporting using various plugins, including html reporting, to generate comprehensive test reports.
- Offers reusable step definitions and custom commands to improve test maintainability and reduce duplication.
- Allows for easy integration with continuous integration (CI) systems, such as Jenkins or GitLab CI, for seamless test execution as part of the development pipeline.

## Prerequisites

Make sure you have the following dependencies installed:

- Node.js (version 18 or higher)
- NPM (Node Package Manager)

## Getting Started

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install the project dependencies by running the command: `npm install`
4. Configure your test scenarios by creating feature files in the `cypress/e2e/` directory using Gherkin syntax.
5. Implement step definitions for your scenarios in the `cypress/step_definitions` directory.
6. Run the tests using one of the available commands:
   - Run tests in interactive mode: `npm run cy:test -- --browser=chrome --headed`
   - Run tests in headless mode: `npm run cy:test`
   - Run tests in interactive mode for a specific spec: ` npm run cy:test -- --spec cypress/e2e/login.cy.js --headed`

## Configuration

- `cypress.config.json`: Cypress configuration file containing various settings for test execution.
- `cypress/support/commands.js`: Custom commands and global configurations for Cypress.
- `cypress/support/e2e.js`: Cypress e2e configuration file.

## Viewing Reports
Once the tests have been executed, the [allure](https://allurereport.org/docs/cypress/) reports will be generated in the specified output directory. You can view the reports by running the following command:
```
npm run report
```
This command will open a web browser displaying the allure html report, which provide detailed information about the test results, including screenshots, logs, and more.

## Continuous Integration
This framework can be seamlessly integrated with popular CI/CD tools such as Jenkins, CircleCI, or GitLab CI. Configure your CI/CD pipeline to execute the `npm run test` command and generate allure html report as part of your build process.
