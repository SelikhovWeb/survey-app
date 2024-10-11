This is a simple Survey App

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Description

This project using a config file to display surveys and implementing logic from the config such as displaying different types of questions,
showing dynamic question text, dynamic navigation based on previous answers. In the end of the survey you'll see your results.

## Live Demo

You can view the live version of the project at the following link:

[Survey App](https://survey-app-sooty-six.vercel.app)

Feel free to explore the application and test its features!

## Technologies

This project is built using the following technologies and libraries:

- **Next.js** (v14.2.15) — A React framework that provides server-side rendering and static site generation for web applications.
- **React** (v18) — A library for building user interfaces.
- **React DOM** (v18) — A library that enables interaction with the DOM for React applications.
- **Redux Toolkit** (v2.2.8) — The official library for state management based on Redux, providing a simplified API and tools.
- **React Redux** (v9.1.2) — A library that connects Redux with React, allowing the use of Redux in React applications.
- **classnames** (v2.5.1) — A utility for conditionally combining CSS class names.

### Development Dependencies

- **TypeScript** (v5) — A programming language that extends JavaScript with static typing.
- **ESLint** (v8) — A static code analysis tool that helps find and fix problems in JavaScript and TypeScript code.
- **Prettier** (v3.3.3) — A code formatter that enforces a consistent coding style.
- **Husky** (v9.1.6) — A tool for managing Git hooks, allowing scripts to run before commits or pushes.
- **Jest** (v29.7.0) — A JavaScript testing framework that works with any project and provides a powerful API for testing.
- **ts-jest** (v29.2.5) — A tool for running TypeScript tests with Jest.
- **ts-node** (v10.9.2) — A utility that allows you to run TypeScript code in Node.js without pre-compilation.
- **@types/** — Type definition packages for TypeScript that provide type information for JavaScript libraries (e.g., `@types/react`, `@types/jest`, etc.).

## Testing

This project uses Jest as the testing framework. You can run the tests using the following command:

```bash
npm run test
```

Additionally, tests are automatically run before each commit, thanks to the pre-commit hook configured with Husky. This ensures that your code passes all tests before being committed to the repository, helping maintain code quality and reliability.
