# React JS

-   UI library (not technically a framework)
-   Developed originally by Facebook (now Meta)
-   Used for client side rendering

## Setup

-   Install `node.js` first
-   We will be using `Vite` instead of `create-react-app`
-   Vite will help us with setting up a complete react project
-   Steps:
    -   `npm create vite@latest frontend`
    -   Select `react` and then `JavaScript`
    -   `cd frontend` to go into the newly created `frontend` folder
    -   `npm install` to install all the needed node packages

## Folder Structure

-   `index.html`:
    -   this is the file sent to the browser
    -   The whole app is rendered inside this one file
-   `package.json`
    -   holds information about any node project
    -   also has the node scripts we use to run and build the project
-   `node_modules` folder:
    -   contains all the dependencies
    -   created when we ran `npm install`
-   `public`:
    -   contains any static assets our app will need
-   `src` folder:
    -   contains all the source code of our app
    -   this is where the **bulk** of our work
-   `vite.config.js`:
    -   a config file for Vite.js
-   `.gitignore`:
    -   used to prevent some files from being tracked by git

## Viewing our App

-   `npm run dev` will run our app
-   if all works fine, you will see a URL of where the app is hosted locally (it was `http://localhost:5173` for me)
-   opening the URL will show you a page created using ReactJS
-   this is the default demo app
-   click on the `count is 0` text to increase the count!

## Editing + HMR

-   Now, lets try something cool
-   Go to the `src` folder and open the `App.jsx` file
-   Try changing some text, eg. change the text `Vite + React` to `LUG VITC ROCKS!!!`
-   After making the change, save the file.
-   You will see that the web app will automatically reload and our changes are reflected without us having to reload the page
-   This is called _Hot Module Reloading_ or _HMR_
-   This feature helps speed up development by eliminating the need to reload the app every time we make a change

## Cleanup

-   The demo app is cool, but if we want to make our own app, we will need to remove the demo code before we can write our own.
-   To clear the demo app, do the following stuff:
    -   `App.jsx`:
        -   replace everything inside the App function and replace it with `return <>LUG VITC ROCKS!!!</>;`
        -   also remove lines 1, 2 and 3
    -   empty `App.css` and `index.css`

## How React Works

-   render on state change
-   virtual dom

## No, that is not HTML!

-   it is jsx!
-   a special syntax to write html-like markup inside js

## JSX Variables

-   inside curly braced

## Conditional Rendering

-   &&, || and ?:

## Mapping Lists

## Importing images

## Components

## Props

## Hooks

### useState

### useEffect

## Remaking the Counter from the demo page

## React Router

## Forms in React

## Fetching data from an API
