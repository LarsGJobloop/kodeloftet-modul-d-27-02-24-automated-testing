# Testing Codelab

## Overview

A set of task for getting familiar with various types of automated testing of frontend applications.

## Types of tests

### Unit Testing

The smallest test we are writing. Here we are checking that the return value of functions aligns with the expected values when the functions are called with certain inputs.

### Integration Testing

More complicated to setup than unit tests. These are testing that component which interacts with each other does so in ways we have decided.

### End to End Testing

This is where we are testing if the application itself does what we have designed it to do, ie the User Journey we have defined. Examples here would be testing that a users can register, sign in, sign out, aswell as testing that a Todo application can handle adding a new task, marking a task as complete, etc. The difference between this and the former twoes is that End to End testing requires more surrounding infrastucture to pull off. In the instance of a Frontend application this means that to do this type of testin you have to stand up a full (potentially headless) browser to test user interaction in the way a user interacts with the application.

### Regression Tests - [link](https://www.geeksforgeeks.org/software-engineering-regression-testing/)

These are tests written to ensure that once bugs or issues are identied and fixed they stay that way while we continue to make changes to our systems.

### Visual Regression Testing - [link](https://www.browserstack.com/guide/visual-regression-testing)

These are somewhat similar to regression tests, in the sense that once we have settled on a certain visual look to our application that look stays as is until we explicitly decide to change it.

## Strategies

One of the common ways to go approach testing is a pattern called Arrange Act Assert, or AAA for short.

## Links

- [Vitest Testing Library](https://vitest.dev/)
- [Testing Library React](https://testing-library.com/docs/react-testing-library/intro/)
- [Mock Service Worker](https://mswjs.io/)
- [Playwright](https://playwright.dev/)
- [Arrange Act Assert Examples](https://chat.openai.com/share/c906a0d8-c8f4-4d18-b69e-2d3ada5ee9a4)
