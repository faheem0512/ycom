This project was bootstraped by CRA. Then SSR approach is implemented on top of it
using node js to compute html and serve.
`React Hydration`  s used to hydrate a container whose HTML contents were rendered by ReactDOMServer.
 React will attempt to attach event listeners to the existing markup.
 `React Router` is used to manage url and to make every page bookmarkable.
 `Redux` is used for app state management so that it can be share across the App.
 `Google chart` is used for displaying graph **vote vs id**.
 For `upvote` and `hide` funcitonality `localstorage` is used to persist data even after
 reload or relaunch of browser.




| Stack        | Used for           | 
| ------------- |:-------------:| 
| Redux         | For state management of App      | 
| React Router  |  To handle routes      | 
| React Google Charts        |  To display line graph     | 

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn start:ssr`

Runs the app in the production mode rendered server side.<br />
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.


### `yarn test`

Launches the test runner in the interactive watch mode.<br />


### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
App is ready to be deployed!

### `yarn lint` and `yarn lint:fix`

Is for running linter on code and fixing lint errors respectively.


