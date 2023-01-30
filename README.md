# Getir Market

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
- [Ant Design](https://ant.design/): An enterprise-class UI design language and React UI library..
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapidly building custom user interfaces.
- [Postcss](https://github.com/postcss/postcss): PostCSS is a tool for transforming styles with JS plugins.
  - [Autoprofixer](https://github.com/postcss/autoprefixer): [PostCSS](https://github.com/postcss/postcss) plugin to parse CSS and add vendor prefixes to CSS rules.

## Usage

- The project built with `node v19.2.0`, `yarn 1.22.19`, and `npx 8.19.3`.
- To be able to develop locally, run `yarn run dev` and browse `localhost:5173`

## Script

| Command        | Description                                                       |
| -------------- | ----------------------------------------------------------------- |
| `yarn install` | Install all dependent application packages                        |
| `yarn run dev` | Start a local development web server at localhost:5173 using vite |

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
