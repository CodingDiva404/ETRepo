# Redux Toolkit

## What is Redux Toolkit?

- Redux Toolkit is a **state management tool** used in React applications.
- It helps manage application state in **one central place** (single source of truth).
- It is more suitable for **large and complex applications**.
- Compared to Props and Context API, Redux Toolkit provides:
  - Better scalability
  - Cleaner structure
  - Easier debugging
- In large applications, managing state using only props or Context API becomes **hard to maintain**.

---

## Core Elements of Redux (Conceptual)

- Action  
- Reducer  
- Store  
- Provider  

> Note: Provider comes from **React-Redux**, which connects Redux with React.

---

## Core Elements of Redux Toolkit

- Store  
- Provider  
- Slice  

Redux Toolkit simplifies Redux by removing the need to manually create actions and reducers.

---

## Explanation of Key Concepts

### Reducer
- A reducer is a function that:
  - Receives the **current state**
  - Applies logic based on an action
  - Returns a **new updated state**
- Reducers decide **how the state should change**.

---

### Store
- The store is where the **entire application state is stored**.
- A Redux application has **only one store**.
- The store is created using `configureStore` in Redux Toolkit.

---

### Action
- An action is a **plain JavaScript object**.
- It describes **what happened** in the application.
- Actions carry data from the UI to the reducer.
- In Redux Toolkit, actions are **automatically generated** using slices.

---

### Provider
- Provider makes the Redux store available to the entire React application.
- It allows components to access state using hooks like:
  - `useSelector`
  - `useDispatch`
- Without Provider, Redux state cannot be accessed in React components.

---

### Slice
- A slice is a **combination of state, reducers, and actions**.
- Each slice represents **one feature of the application**.
- Redux Toolkit uses slices instead of separate action and reducer files.
- Slices help keep code **organized and feature-based**.

---

## Project Setup Steps

### Install Required Packages

```
npm install @reduxjs/toolkit react-redux
```
---
## Folder Structure

```txt
src/
├── redux/
│   ├── store.js
│   └── cricketersSlice.js
├── App.js
└── index.js

```

## Code Formate

index.js
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    <App />
  </Provider>
);
```

store.js

```js
import {configureStore} from "@reduxjs/toolkit"

const store = configureStore({
    reducer:{}
})

export default store
```