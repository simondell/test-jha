# JHA Front-end developer test

Using the api available at https://github.com/harvardartmuseums/api-docs please create a basic front end app which does the following:

1. A feed using the URL https://api.harvardartmuseums.org/object?classification=Prints&hasimage=1&sort=title&sortorder=desc&apikey=c28e4be0-4c0e-11ea-90d6-25d9a9fe80fc&size=10&page=1
2. Provide a basic react driven front end that utilises Material UI and TypeScript for a feed that displays the image and some artwork information. (Use npx create-react-app harvard --template typescript)
3. Commit your code for the client to GitHub and provide us with the url to the repository.

Time on task:  

Using Create React APP, build app structure, install npm/npx modules as required: 15 mins
Connect to API using the above URL and page parameter for paging, build basic model: 45 mins
Build a front end to display images with a small amount of detail on each image (Title, Artist, Year), show infinite scrolling: 1hr 30 mins

Total time 2.5 hrs.

We will inspect the quality of the code and your design approach, however please also provide any demo code you have and associated repositories.

# Notes

- The payload has `info` and `records` keys. The former contains the search metadata; the latter the data for works of art
- 10 results per page
- 1000s of results, so many pages!
- works have `primaryimageurl`, an array of `people`, which may hold just the artist
- people don't have unique keys, so probably best to leave them nested within the records rather than normalise them out
- results pages have both an index/page_number and also prev/next links. Experience suggests it'll be easier to embed the main search url in code and increment a page count, than to use the prev/next links.
- Added Material-UI and removed the fluff CRA put in.
- Add a basic APi read to get first page of data. Component state is fine for this stage of development
- 


# Setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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
