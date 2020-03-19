This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Steps to run the app:
1. Clone or download this repository to your local machine
2. $ npm install (to install all modules listed as dependencies in package.json)
3. $ npm start
4. The app should be running at http://localhost:3000/

SPEC:
We have some APIs about StarWar: https://swapi.co/ , you can fetch all persons by https://swapi.co/api/people (doesn't need to consider pagination), and you can get a person's homeworld URL in the response. please implement such a React component:

1. It accepts a person name (like "Luke Skywalker") as props
2. If the person exists, display its basic information (name, height, gender), else display "Not found"
3. If the person exists, show an extra "show my homeworld" button, after clicking the button, it is expected to show the person's homeworld basic information (name, population)
4. Make the person name as the document title
5. Make the person name and homeworld name as the document title after getting the homeworld information
6. Use modern JavaScript (ES6 or TypeScript) and (Redux + Redux-Saga or dva), use create-react-app or codesandbox.io to initiate the project
