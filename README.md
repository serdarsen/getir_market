# Getir Market
### [Live Site on Heroku](https://serdarsen-getir-market.herokuapp.com/)

![Getir Market](./docs/screenshot.png)

## Introduction
Getir Market is an implementation of my interview assignment given by Getir. This is a project that converts a [Figma design](./docs/design.fig) into a modern React application. You can find detailed information in [assignment.pdf](./docs/assignment.pdf).

### Implementation
* To be able to analyze in detail, I broke down the task into smaller pieces.
    * Creating main responsive layout struture. 
    * Transforming Figma element sizes and colors into React components using rem and em units. 
    * Creating components from scratch in order to obtain an easy-to-maintain codebase. 
    * Creating mock json server api.
    * Creating powerful global state management.
    * Testing and creating unit tests.
<br/><br/>    
* I applied html semantic elements.  
* I handled the context operations individually to have a separation of concerns.  
* I applied the Clean Code Naming Conventions and the Single Responsibility Principle to write clean tests.

<br/><br/>
* We have Redux, React-Redux, Redux-Saga, and Redux-Toolkit libraries to create a global state management infrastructure.
    *  I avoided using Redux because of its suggestion to use Redux-Toolkit.
    *  I implemented React-Redux, Redux-Saga, and Redux-Toolkit libs to work together because of their efficiency.

### Feature

Focus points in this project :

- React Functional components and their reusability
- React file and folder structure
- Fundamental CSS properties to master flex & grid
- Fundamentals of the CSS BEM Model
- Perfectly placed media queries for satisfactory responsiveness covering almost devices (in development)
- Pixel Perfect Designs
- Powerful global state management
- Unit test coverage (in development)

## Usage
- The project built with `node v18.8.0` and `npm 8.18.0`
- To be able to watch logs and develop locally, run `npm run dev-json-server` and `npm run dev` in seperate terminals, browse `localhost:4000`

## Reference
- [Webpack](https://webpack.js.org/)
- [ESLint](https://eslint.org/)
- [Figma](https://www.figma.com)
- [React Redux](https://react-redux.js.org/)
- [Redux-Saga](https://redux-saga.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [cra-template-redux-typescript](https://github.com/reduxjs/cra-template-redux-typescript)
- [JEST](https://jestjs.io/)
- [JSON Server](https://github.com/typicode/json-server)