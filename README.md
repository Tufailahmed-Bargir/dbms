# Library Management System

A dynamic library management website built with Node.js, Express, Pug, Sequelize, and SQLite.

## Motivation

This project was created as a part of the Treehouse Full Stack JavaScript Techdegree program

## Features

* The library database is an SQLite3 database and uses Sequelize to perform CRUD operations
* The Home Screen contains a list of all books in the library database
* This list is paginated and the user can click on the numbered buttons to view different sections of the book list
* The user can search the database based on title, author, genre and year properties
* The search functionality is case insensitive and returns partial matches
* The user can add a book to the database by clicking the "Create New Book" button and filling out the associated form
* The New Book form uses Sequelize validation to ensure the Title and Author sections are filled out
* The user can click on the Title of a book from the list to update details for a book
* The Update Book form uses Sequelize validation to ensure the Title and Author sections are filled out

## Future Improvements

* Improve styling and layout of search input and button
* Improve styling and layout of pagination buttons
* Add more detailed code comments
* Add message when no matches are returned
* Add Home button to search page
* Look for ways to improve error handling
* improve overall look of the page

## To Run

* Download project files by running `git clone https://github.com/LeeVaughn/sql-library-manager`
* Navigate to the project folder
* Install dependencies with `npm install`
* Start application by running `npm start` (application runs on localhost:3000)

## Built With

* [Node.js](https://nodejs.org/en/)
* [Express](https://github.com/LeeVaughn/twitter-interface)
* [Pug](https://pugjs.org/api/getting-started.html)
* [Sequelize](https://www.npmjs.com/package/sequelize)
* [SQLite3](https://www.npmjs.com/package/sqlite3)

## Dependencies

* [cookie-parser](https://www.npmjs.com/package/cookie-parser) Parse Cookie header and populate req.cookies with an object keyed by the cookie names
* [debug](https://www.npmjs.com/package/debug) A tiny JavaScript debugging utility modeled after Node.js core's debugging technique
* [http-errors](https://www.npmjs.com/package/http-errors) Create HTTP errors for Express, Koa, Connect, etc. with ease
* [morgan](https://www.npmjs.com/package/morgan) HTTP request logger middleware for Node.js
* [nodemon](https://www.npmjs.com/package/nodemon) A tool for Node.js based applications that automatically restarts the application when file changes in the directory are detected
* [sequelize-cli](https://www.npmjs.com/package/sequelize-cli) The Sequelize Command Line Interface (CLI)

## Links

* [Repository](https://github.com/LeeVaughn/sql-library-manager)

## Author

[Daniel Lee Vaughn](https://github.com/LeeVaughn)
