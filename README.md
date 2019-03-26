# habito-webpack-talk

Running the team through configuring Webpack.

## Setup

At the top level of the repository you can run `yarn` once and (thanks to [workspaces](https://yarnpkg.com/lang/en/docs/workspaces/)) it will install dependencies for all the subprojects.

From steps 6-11 you will need to run `npx bower install` inside each subdirectory to install the PureScript dependencies.

## Steps

Each subdirectory is a self-contained project demonstrating a particular piece of Webpack configuration. The steps follow on from one another: so step 4 advances from step 3, and so on. Each step has comments to highlight the changes from the previous stage.

The steps are:

1. Basic entry points and output
2. Add `html-webpack-plugin` and `yarn serve` to view the project in a browser
3. Load CSS
4. Load SASS
5. Load assets
6. Load PureScript
7. Hash output names
8. Clean the `dist` directory before building
9. Extract CSS to a file
10. Optimise images
11. Add `webpack-dev-server`


To see the build output of a step, run `yarn build` within the subdirectory. This invokes Webpack; see the `package.json` for the full command that gets run.

From step 2 onwards you can also run `yarn serve`, which spins up a simple HTTP server so that you can see the build output in your browser. Note that this is not a Webpack feature.
