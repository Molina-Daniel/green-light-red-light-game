# Green Light, Red Light 🚦

Hi! This App is a version of the "Red Light, Green Light" children's game. Made with ❤️ for BBVA and Sngular :)
[Play Now!](https://green-light-red-light-game.netlify.app/)

<p align="center">
  <img
      src="https://i.ibb.co/607ffCG/mobile-frame.png"
      alt="App view"
      height="400px" />
</p>

It has three main views:

- **Home**: Introduce a Player Name and press the Join button.
- **Game**: On the Game screen you will see your Name, your Highest Score, the red/green light, the Score of the current game, and two buttons: Start, to start the game, and Go Back to return to the Home screen.
  When the Start button is pressed, you will find two new buttons: Left Step and Right Step buttons. The game has started!
- **Game Rules**: Game rules explanation in plain English.

# Make it work locally

Instructions to run the project in your machine.

## Pre-requisites

- Git
- Node 10 (or higher)
- npm 6 (or higher)

## Install

- Clone the repository `git clone`
- Run `npm install` in the root folder

## Running

- `npm run start` to start the proyect in a local server

## Tests

- `npm run test` to run all the tests

# Tech Stack

- React
- react-testing-library
- Workbox (for PWA settings)

## Features

- PWA
- Installable
- Work offline
- Stores the highest score of each player (join with the same name)
- Alerts when you are using the App offline
- Input validation
- Re-routing to Home screen

## Lighthouse test

<p align="center">
  <img
      src="https://i.ibb.co/nnKZyv1/lighthouse-test-2022-07-20-155705.png"
      alt="App view"
      height="650px" />
</p>
