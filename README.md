# Getir Market
### [Live Site on Heroku](https://serdarsen-getir-market.herokuapp.com/)

![Getir Market](./docs/screenshot.png)

## Introduction
Getir Market is an implementation of my interview assignment given by Getir. This is a project that converts a [Figma design](./docs/design.fig) into a modern React application. You can find detailed information in [assignment.pdf](./docs/assignment.pdf).

## Implementation
* To be able to analyze in detail, I broke down the task into smaller pieces.
    * Creating main responsive layout struture using media queries, flex and grid properties. 
    * Transforming Figma elements into React components pixel perfectly using rem and em units. 
    * Creating components from scratch in order to obtain an easy-to-maintain and easy-to-test codebase. 
    * Creating dev json server api.
    * Creating powerful global state management.
    * Creating a consistent styling infrastructure by using SCSS variables, mixins, and BEM naming conventions
    * Testing application by simuliating the end user behaviours
<br/><br/>    
* I handled the context operations individually to have a separation of concerns.  
* I applied the Clean Code Naming Conventions and the Single Responsibility Principle to write clean tests.
<br/><br/>
* We have Redux, React-Redux, and Redux-Toolkit libraries to create a global state management infrastructure.
    *  I avoided using Redux because of [its suggestion to use Redux-Toolkit](https://redux.js.org/introduction/why-rtk-is-redux-today).
    *  I implemented React-Redux and Redux-Toolkit libs to work together because of their efficiency.

## Tooling
- [React](https://reactjs.org): An open source JavaScript library for building UIs
  - [react](https://github.com/facebook/react): Core React library
  - [@types/react](https://www.npmjs.com/package/@types/react): Type definitions for `React`
  - [react-dom](https://www.npmjs.com/package/react-dom): Renders React to DOM
  - [@types/react-dom](https://www.npmjs.com/package/@types/react-dom): Type definitions for `ReactDOM`
- [TypeScript](https://www.typescriptlang.org/): A strongly typed language built on top of JavaScript.
  - [typescript](https://github.com/Microsoft/TypeScript): Core TypeScript programming language
  - [ts-node](https://github.com/TypeStrong/ts-node): TypeScript execution engine for Node.js
  - [@types/node](https://www.npmjs.com/package/@types/node): Type definitions for Node.js
- [Jest](https://jestjs.io/): A JavaScript testing framework
  - [jest](https://github.com/facebook/jest): Core Jest library
  - [@types/jest](https://www.npmjs.com/package/@types/jest)
  - [ts-jest](https://github.com/kulshekhar/ts-jest): A Jest transformer for TypeScript
  - [jest-environment-jsdom](https://github.com/facebook/jest): Simulates a DOM environment during jest tests (See: [Jest DOM Manipulation Guide](https://jestjs.io/docs/tutorial-jquery))
  - [@testing-library/jest-dom](https://github.com/testing-library/jest-dom): Jest matchers (e.g. `toHaveClass`, `toBeChecked`) to test the state of the DOM
  - [@testing-library/react](https://www.npmjs.com/package/@testing-library/react): React DOM testing utilities (e.g. `.queryByText`, `.getByRole`)
  - [@testing-library/user-event](https://github.com/testing-library/user-event): Fires events the same way the user does
- [Babel](https://github.com/babel/babel): Compiles latest JavaScript features down to a supported version
  - [@babel-core](https://www.npmjs.com/package/@babel/core): Babel compiler core
  - [@babel-runtime](https://www.npmjs.com/package/@babel/runtime): Babel's modular runtime helper
  - [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env): Allows to use the latest JavaScript without needing to micromanage which syntax transforms
  - [@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react/): Babel preset for all React plugins
  - [@babel/preset-typescript](https://babeljs.io/docs/en/babel-preset-typescript): Babel preset for TypeScript
- [Webpack](https://webpack.js.org/): An extensible static module bundler for JavaScript applications
  - [webpack](https://github.com/webpack/webpack): Core webpack bundler
  - [webpack-cli](https://github.com/webpack/webpack-cli): CLI tooling for webpack (required for `npm` scripts that call `webpack`)
  - [webpack-dev-server](https://github.com/webpack/webpack-dev-server): Development server with live reloading
  - [Loaders](https://webpack.js.org/loaders/)
    - [style-loader](https://github.com/webpack-contrib/style-loader): Injects CSS into the DOM when bundling
    - [css-loader](https://github.com/webpack-contrib/css-loader): Interprets and resolves `@import` and `url()` in CSS files when bundling
    - [sass-loader](https://github.com/webpack-contrib/sass-loader): Loads a Sass/SCSS file and compiles it to CSS
    - [babel-loader](https://github.com/babel/babel-loader): Allows transpiling JavaScript files using [Babel](https://github.com/babel/babel) and [webpack](https://github.com/webpack/webpack)
  - [Plugins](https://webpack.js.org/plugins/)
    - [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin): Clean your build folder(s)
    - [dotenv-webpack](https://github.com/mrsteele/dotenv-webpack): Exposes environment variables
    - [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin): Generates HTML files when bundling
    - [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin): Extracts CSS into separate files
    - [webpack-manifest-plugin](https://github.com/shellscape/webpack-manifest-plugin): Generates an asset manifest
    - [copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin): Copies individual files or entire directories, which already exist, to the build directory
    - [@types/dotenv-webpack](https://www.npmjs.com/package/@types/dotenv-webpack)
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
    - [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint): Monorepo for all the tooling which enables ESLint to support TypeScript
    - [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser):  An ESLint parser which leverages [TypeScript ESTree](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/typescript-estree) to allow for ESLint to lint TypeScript source
- [msw](https://www.npmjs.com/package/msw): Mock Service Worker (MSW) is a seamless REST/GraphQL API mocking library for browser and Node.js
- [cross-fetch](https://github.com/lquixada/cross-fetch): Universal WHATWG Fetch API for Node, Browsers and React Native.
- [express](https://github.com/expressjs/express): Fast, unopinionated, minimalist web framework for [Node.js](http://nodejs.org)
- [lodash](https://github.com/lodash/lodash): The [Lodash](https://lodash.com/) library exported as a [UMD](https://github.com/umdjs/umd) module   
- [@types/lodash](https://www.npmjs.com/package/@types/lodash)
- [sass](https://www.npmjs.com/package/sass): A pure JavaScript implementation of [Sass](https://sass-lang.com/). Sass makes CSS fun again 
  
## Usage
- The project built with `node v18.9.0` and `npm 8.19.1`.
- To be able to watch logs and develop locally, create `.env` file in the project root dir with `PORT=3004`(optional) and `DEV=true` properties in it, then run `npm run dev-server` and `npm run dev` scripts in seperate terminals, browse `localhost:3004`
<br/><br/>
- Run `npm run test` to run tests.
- Use `npx jest` to run a single test (e.g. `npx jest /src/component/pagination/Pagination.test.tsx -c jest.config.ts --watch`)
<br/><br/>
- Before running `npm run build` make sure to check if `DEV=false` in the `.env`.

## Script
| Command                    | Description                                                                            |
| -------------------------- | -------------------------------------------------------------------------------------- |
| `npm install`              | Install all dependent application packages                                             |
| `npm run dev`              | Start a local development web server at localhost:3004 using webpack-dev-server        |
| `npm run build`            | Bundle application for Production using webpack (DEV=false in .env)                    |
| `npm run start`            | Serve static web site at localhost:8080 using express                              |
| `npm run test`             | Run the full test suite using Jest                                                     |
| `npm run test:watch`       | Watch files for changes and rerun tests related to changed files                       |

## Further Development
* The following topics can be considered for further development:
    * Add ability to find countable entities dynamically
    * Research and fix the `"a test was not wrapped in act(...)"` test warning
    * Research and fix the `"asset(s) exceed the recommended size limit (244 KiB)"` build warning
    * Add ability to save basket items and filters to database.
    * Refactor search widgets using a single reusable component.
    * Refactor widgets that include a checkbox or radio using a single reusable component.
    * Refactor context and service elements that have a similar structure using reusable modules.

## Reference
- [Figma](https://www.figma.com)
- [Animista](https://animista.net)
- [reduxjs/cra-template-redux-typescript](https://github.com/reduxjs/cra-template-redux-typescript)
- [cloud-city-crafted/react-typescript-webpack-template](https://github.com/cloud-city-crafted/react-typescript-webpack-template)
- [How To Test a React App with Jest and React Testing Library by Alyssa Holland](https://www.digitalocean.com/community/tutorials/how-to-test-a-react-app-with-jest-and-react-testing-library)
- [do-community/doggy-directory](https://github.com/do-community/doggy-directory)
- [Testing Implementation Details by Kent C. Dodds](https://kentcdodds.com/blog/testing-implementation-details)
- [Common mistakes with React Testing Library by Kent C. Dodds](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
- [mswjs/examples/rest-react](https://github.com/mswjs/examples/tree/master/examples/rest-react)
