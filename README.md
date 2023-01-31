# Getir Market
### [Live Preview on CodeSandbox](https://codesandbox.io/p/github/serdarsen/getir_market/main?file=%2FREADME.md)


![Getir Market](./docs/screenshot.png)

## Introduction

Getir Market is an implementation of my interview assignment given by Getir. This is a project that converts a [Figma design](./docs/design.fig) into a modern React application. You can find detailed information in [assignment.pdf](./docs/assignment.pdf).

## Implementation

- To be able to analyze in detail, I broke down the task into smaller pieces.

  - Creating main responsive layout struture using media queries, flex and grid properties.
  - Transforming Figma elements into React components pixel perfectly using rem and em units.
  - Creating components from scratch in order to obtain an easy-to-maintain and easy-to-test codebase.
  - Creating dev json server api.
  - Creating powerful global state management.
  - Creating a consistent styling infrastructure by using Tailwind, and BEM naming conventions
  - Testing application by simuliating the end user behaviours
    <br/><br/>

- I handled the context operations individually to have a separation of concerns.

- I applied the Clean Code Naming Conventions and the Single Responsibility Principle to write clean tests.
  <br/><br/>

- We have Redux, React-Redux, and Redux-Toolkit libraries to create a global state management infrastructure.
  - I avoided using Redux because of [its suggestion to use Redux-Toolkit](https://redux.js.org/introduction/why-rtk-is-redux-today).
  - I implemented React-Redux and Redux-Toolkit libs to work together because of their efficiency.

## Tooling

- [React](https://reactjs.org): An open source JavaScript library for building UIs
  - [react](https://github.com/facebook/react): Core React library
  - [@types/react](https://www.npmjs.com/package/@types/react): Type definitions for `React`
  - [react-dom](https://www.npmjs.com/package/react-dom): Renders React to DOM
  - [@types/react-dom](https://www.npmjs.com/package/@types/react-dom): Type definitions for `ReactDOM`
- [TypeScript](https://www.typescriptlang.org/): A strongly typed language built on top of JavaScript.
  - [typescript](https://github.com/Microsoft/TypeScript): Core TypeScript programming language
- [Vite](https://vitejs.dev/): Next Generation Frontend Tooling.
  - [@vitejs/plugin-react](https://github.com/vitejs/vite/tree/main/packages/plugin-react#readme): The all-in-one Vite plugin for React projects.
  - [vitest](https://github.com/vitest-dev/vitest#readme): A blazing fast unit test framework powered by Vite.
- [Ant Design](https://ant.design/): An enterprise-class UI design language and React UI library.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapidly building custom user interfaces.
- [Postcss](https://github.com/postcss/postcss): PostCSS is a tool for transforming styles with JS plugins.
  - [autoprofixer](https://github.com/postcss/autoprefixer): [PostCSS](https://github.com/postcss/postcss) plugin to parse CSS and add vendor prefixes to CSS rules.
- [Redux](https://redux.js.org/introduction/why-rtk-is-redux-today): A Predictable State Container for JS Apps
    - [react-redux](https://react-redux.js.org/): Official React bindings for Redux
    - [@reduxjs/toolkit](https://redux-toolkit.js.org/): Official toolset for efficient Redux development
- [ESLint](https://eslint.org/): A pluggable linting utility for JavaScript, JSX, and TSX
    - [eslint](https://github.com/eslint/eslint): A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
    - [eslint-config-airbnb](https://github.com/airbnb/javascript): Airbnb JavaScript style guide
    - [eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript): Enhances Airbnb's ESLint config with TypeScript support
    - [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import): Adds support linting of ES2015+ (ES6+) import/export syntax  
    - [eslint-import-resolver-typescript](https://github.com/import-js/eslint-import-resolver-typescript): Adds `TypeScript` support to [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)      
    - [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y): Static AST checker for accessibility rules on JSX elements
    - [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react): React specific linting rules for eslint  
    - [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks): Enforces the [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html)
    - [eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library): ESLint plugin to follow best practices and anticipate common mistakes when writing tests with Testing Library (e.g. when to use `getByRole` or `findByRole`)    
    - [eslint-plugin-jest-dom](https://github.com/testing-library/eslint-plugin-jest-dom): ESLint plugin to follow best practices and anticipate common mistakes when writing tests with jest-dom    
    - [eslint-plugin-tailwindcss](https://github.com/francoismassart/eslint-plugin-tailwindcss): Rules enforcing best practices while using Tailwind CSS    
    - [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint): Monorepo for all the tooling which enables ESLint to support TypeScript
    - [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser):  An ESLint parser which leverages [TypeScript ESTree](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/typescript-estree) to allow for ESLint to lint TypeScript source    
- [Serve](https://github.com/vercel/serve#readme): Static file serving and directory listing.
- [JSDOM](https://github.com/jsdom/jsdom#readme): A JavaScript implementation of many web standards.
- [Lodash](https://lodash.com/): Lodash modular utilities.
- [Faker](https://github.com/faker-js/faker#readme/): Generate massive amounts of fake contextual data.
- [MSW](https://mswjs.io/): Seamless REST/GraphQL API mocking library for browser and Node.js.
    - [@mswjs/data](https://github.com/mswjs/data#readme/): Data modeling and relation library for testing JavaScript applications.
## Usage

- The project built with `node v19.2.0`, `yarn 1.22.19`, and `npx 8.19.3`.
- To be able to develop locally, run `yarn run dev` and browse `localhost:5173`

## Script

| Command        | Description                                                         |
| -------------- | ------------------------------------------------------------------- |
| `yarn install`   | Install all dependent application packages                        |
| `yarn run dev`   | Start a local development web server at localhost:5173 using vite |
| `yarn run test`  | Run the full test suite using Vitest  
| `yarn run build` | Bundle application for Production using vite                      |

## Further Development
* The following topics can be considered for further development:
    * Add the ability to sort products by the selected option.
    * Research differences between msw worker and msw server.
    * Research and fix the `"Some chunks are larger than 500 KiB after minification"` build warning.
    * Add ability to save basket items and filters to database.
    * Refactor search widgets using a single reusable component.
    * Refactor context and service elements that have a similar structure using reusable modules.
    * Research and implement cypress testing infrastructure.
    * Implement dark mode.

## Reference

- [Figma](https://www.figma.com)
- [Animista](https://animista.net)
- [Blog: How To Test a React App with Jest and React Testing Library by Alyssa Holland](https://www.digitalocean.com/community/tutorials/how-to-test-a-react-app-with-jest-and-react-testing-library)
- [Blog: Testing Implementation Details by Kent C. Dodds](https://kentcdodds.com/blog/testing-implementation-details)
- [Blog: Common mistakes with React Testing Library by Kent C. Dodds](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
- [Github: reduxjs/cra-template-redux-typescript](https://github.com/reduxjs/cra-template-redux-typescript)
- [Github: cloud-city-crafted/react-typescript-webpack-template](https://github.com/cloud-city-crafted/react-typescript-webpack-template)
- [Github: do-community/doggy-directory](https://github.com/do-community/doggy-directory)
- [Github: mswjs/examples/rest-react](https://github.com/mswjs/examples/tree/master/examples/rest-react)
- [Github: vitest/react-testing-lib-msw](https://github.com/vitest-dev/vitest/tree/main/examples/react-testing-lib-msw)


