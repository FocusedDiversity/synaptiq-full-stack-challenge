# Code Challenge

> Call-out: this has been tested on M2 MacBook Air - if the Docker environment doesn't work for you you're welcome to debug it but go ahead and just work on the code outside of the Docker environment.

## Getting Set Up

Ensure Docker is installed: https://docs.docker.com/desktop/install/mac-install/
`$ docker-compose up`

The idea is to grab either the fronted or the backend and get the tests passing.
The expectation is that you should set a timer for an hour and get done what you can.
You are welcome to have fun and complete bonus tasks or add your own.

## How we evaluate

Our code challenge is a conversation starter. It's used to talk through your thought process.
We will ask you questions about the decisions you made, how you worked through issues, etc.
It's suggested that you code as if you were on a team and others will look at your code.
it's suggested that you think through edge cases

## Delivery

You're welcome to share on GitHub or sharing a zip'd version of the application

## Frontend Tasks

### Get Cypress Passing

1. `$ cd frontend`
2. `$ npx cypress open --e2e`

### Bonus Tasks

- [ ] bring in a UI library and use it
- [ ] theme the application based on computer's light or dark them preference
- [ ] get creative - what else do you want to do?

## Backend Tasks

### Get basic tasks passing

1. `$ cd backend`
2. `$ npm test`

## Bonus tasks

- [ ] add GraphQL as a layer
- [ ] deploy this to a cloud service using terraform
- [ ] convert to TypeScript

## General Bonus tasks

- [ ] connect the frontend and the backend
- [ ] add more tests
- [ ] have the frontend and backend share TypeScript types
- [ ] add Hasura
- [ ] add authentication
