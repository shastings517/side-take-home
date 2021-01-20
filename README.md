# Design Decision Notes

This project was built with the latest stable version of Node 14.15.3.

This project uses React.Suspense to utilize 'render-as-you-fetch' data fetching and React.lazy for lazy loading pages. I used these because they were mentioned in the Side senior front end engineer job description. React.Suspense is bleeding edge and is marked as experimental by the React team. As such, I might hesitate to use it in a production application, even though it does improve the developer experience. All pages in this project are lazy loaded. If a page requires fetching data (such as SavedListings and PropertyListings pages), the <Suspense> component will show a 'loading' fallback until the data is available. Currently there is no caching of fetched data so both the SavedListings and PropertyListings pages will initially trigger calls to the simplyRETS api. This could easily be improved in the future.

I organized the directory structure around a `pages` folder that contains a page for each route in the project and a `components` folder that contains smaller components usedon each page. There is a `utils` folder that contains miscellaneous helper functions. All logic that has to do with fetching data is housed in the `api` folder. In order to utilize React.Suspense, some extra data fetching logic must be added (see `endpoints.js` and `wrapPromise.js`).

For styling I leaned heavily on Material-UI's built in makeStyles hook. It is also possible to add our own css module styles (this is used in the App.js component for global style). Material-UI's Grid component is used for responsiveness across screen sizes.

For testing both jest and react-testing-library are utilized. I leveraged react-testing-library on top of jest because it is part of the create-react-app bundle. Each component/page has a corresponding testing file in the same directory. I think this provides a bit more clarity/accessibility then having tests live in a separate folder. The tests rely on jsdom and mostly test that pages/components are present in the DOM when they should be. localStorage methods are mocked in App.tests.js (save userId) and Property.tests.js (save property logic) to test that these components are calling them correctly. Shared test helper functions are housed in `utils/testUtils.js`.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
