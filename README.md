# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
To get started with this app, create a .env file in the root of the directory and copy all the content of the .env.example file present in the root directory into it.

First thing first. Run the below code to install dependencies.

### `yarn`

# Important Information
I have created a static shipment data inside statics file to simulate the data supposed to come from the backend so you can see what the shiment  tracking data design looks like as well as statically validated it so you can see the various states at work. 
This is because the api provided to fetch a shipment using its trackId is a GET request that accepts a body. Client browsers to not allow Get requests to have bodies. The provided way to send data through a GET request in by using query params which is what implented but doesnt work as the server needs to make this adjustment too.

## Recommendations
Configure the fetch shipment by trackId api on the backend to accept query Params instead of body as it will only work on POSTMAN but not on other client.  This is the best wayto do it and the general best practice when requesting data from a GET request api.


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

