# Swapi

An app for browsing Swapi with React using React.Context+State

## To run app:
1. run `npm i`
2. run `npm start`

Or use docker command 
1. run `npm run build-docker`
2. run `npm run run-docker` and go to `0.0.0.0:3031`


## Dependencies:
- This app is using few 3rd parties libraries.You can find them in package.json:
1. react-create-app: the fastest way to start a new react project.
2. eslint+typescript: to have some nice code structure, finding mistakes before code runs.
3. react-virtualized: for infinite scroll
4. lodash: for debounce function only


## Architecture decisions
Why React Context and not Redux+saga or any Flux alternative?
- reducing the amount of boilerplating.
- React Context when is used correctly can make same performance as Redux with the right structure (as long as you take care of side effects).
- Extra info from the creator of Redux: https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367 



Added features:
- Control side effects fetch with controller abort and custom hooks with context.
- Turn off the internet while browsing- error messages will appear for few seconds and get cleared.
- Set your internet speed for slower to see cool Spinners
- Saving data on React State and using Effect hooks for activating post mutation function (similar to Saga/Thunk architecture) 

Note:
- In this app we won't take relation from a character to his relations.
- A username and password is a character name and his birth date. for example: "Luke Skywalker" and "19BBY"
- Where the fond to Ref comes from: a nice way to use mutable protected data in hooks and define what the 
  context/service may change and what may the component change with useState

Issues that were found:
1. React Virtualized is re calling the fetch rows if scrolling too fast. a quick workaround with Debounce was used, but not enough
2. React Virtualized scroll to top when changing entity type isn't perfect.
3. Wookiee Encoding doesn't support JSON https://github.com/phalt/swapi/issues/100

