# REACT MINESWEEPER!
This is the react-minesweeper version made by me!

## Dependencies
Run docker:
```
$ docker run -it --rm --network host -v ${PWD}/:/app -w /app node sh
```
... or install NodeJS 8v.

## Start Project
Run project `npm install` and then `npm start` to run development mode.
Open `http://localhost:8080`.

## Demo
You can play the game [here](https://andrescabana86.github.io/react-minesweeper/).

## What to show
The following is a list of items I wish to show:
* When a cell with no adjacent mines is revealed, all adjacent squares will be revealed (and repeat) DONE!
* Ability to 'flag' a cell with a question mark or red flag DONE!
* Alert when game is over DONE!
* Persistence. Not to lose the game if browser is closed DONE!
* Time tracking DONE!
* Ability to start a new game and preserve/resume the old ones DONE!
* Ability to select the game parameters: number of rows, columns, and mines (TODO)
* Ability to support multiple users/accounts (TODO)
* Design and implement an API for the game (think of a mobile app for your API) (TODO)
* Nice user experience (eg avoid page reload while playing) DONE!

## Techstack & Conventions
- BEM CSS naming conventions
- Typescript with ts linter
- ES6 classes
- import & export modules
- React & Redux architecture
- Webpack 4