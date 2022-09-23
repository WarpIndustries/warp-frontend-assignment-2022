# Warp Assignment for frontend developers.

The goal is to get an idea of your skills and approach. So please pick the parts of the assignment that you are comfortable to take on by yourself.


## About the app
The app is built in two parts:
 A [json-server](https://www.npmjs.com/package/json-server) API and a React application (initialized with `create-react-app`)

### Ports
* the react app runs on port 3000
* the api runs on port 3001 

### Requirements:
1. [Node.js](https://nodejs.org/en/)
2. [Yarn](https://yarnpkg.com/)

### How to run
1. In your terminal run `yarn install`
2. Run `yarn start-api` to start the API
3. Open another terminal in the project folder and run:
`yarn start`

## The API
If you are unfamiliar with [json-server](https://www.npmjs.com/package/json-server)  take a look at the package for more information.

You can find the database file in `./db/db.json`. A copy has been added as `db.original.json`.

The api has two endpoints; `/devices` and `/employees`.

An example GET request has been added to `./src/App.js`

Some more examples are:
```js
GET ${apiUrl}/employees?role=manager
GET ${apiUrl}/devices?brand=Oculus 
GET ${apiUrl}/employees/1 // gets information of employee 1

POST ${apiUrl}/devices
/* 
    requires a body containing all fields except id
    example body: {
      "brand": "Brandname",
      "product": "Product name",
      ...
    }
*/
```
If you want to add more endpoints you can do so in db.json. Remember to restart the API after making changes. 

## The frontend

We want you to have a clean slate to start with. A little bit of data has already been given on startup, but everything from here on out is up to you! 

You can also of course remove & edit anything in App.js that is not to your liking. 

You can take inspiration from [warpvr.com](https://warpvr.com) for your designs.

### Good luck!
