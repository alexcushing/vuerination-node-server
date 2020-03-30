# vuerination-server

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)

## About <a name = "about"></a>

This is the server for our Vuerination app.
It was built with Node.js, mongoose, and apollo.

ask me for yhe env if u wanna play around

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

Clone the repo

```
git clone https://github.com/alexcushing/Vuerination-server.git
```

install dependencies

```
npm i
```

PM ME FOR `.env` file contents and `nodemon.json` file contents

run the dev server

```
npm run dev
```

test GraphQL endpoints at `localhost:5000/graphql` 

## Deployment <a name = "deployment"></a>

Build changes

```
npm run build
```

Test Build

```
npm start
```

Push / PR to Master and Heroku will auto-deploy
