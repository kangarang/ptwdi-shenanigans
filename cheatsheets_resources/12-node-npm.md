# Node / npm

Node -- Think: JavaScript on the backend

Package -- Think: A repository of software

npm -- Stands for Node Package Manager

npm allows developers to share software with each other. This can be all types of software -- some are used for development purposes, some are used to create web servers, some are even used just for fun. We've seen fs, events, nodemon, express, pug, express-generator. These are all packages (other software) that DO things. They're just objects or functions that return/execute different things. That's why everything is written in dot-notation and parentheses! Just like JQuery, packages are imported and used accordingly.

Every package is different.

## READ THE [DOCS](https://docs.npmjs.com/)

---

## To enable locally installed npm shell commands (e.g. sequelize-cli and nodemon), add this to your `~/.bash_profile` (mac) or `~/.bashrc` (windows / linux)

`export PATH="$PATH:./node_modules/.bin"`

---

## `package.json`

- metadata about the package / repo / software
- lists all other packages that the package depends on
- packages are **locally** stored in a directory called `node_modules`

---

## `node_modules`

- all packages that your package depends on are located here
- **local**

---

## `.gitignore`

Make sure you `touch .gitignore` and enter the text "node_modules" (without quotes) into the `.gitignore` file so that git doesn't track your packages. Why not track the packages? Because we don't need to and we don't want to. Other developers can just type `npm install` and download those packages themselves. This minimizes the size of our app (e.g. 1MB vs 400MB), and speeds up development.

---

## Flags

### Global -- refers to hard drive and can be used from any directory

    -g

### Local -- refers to current working directory

    --save

---

## Common commands

### Initialize npm in working directory (creates `package.json` and allows you to enter information about your app)

    $ npm init

### List all local packages

    $ npm ls

### List all globally installed packages

    $ npm ls -g

### Install packages listed in `package.json`

    $ npm install

### Install package locally

    $ npm install [package]

### Install package locally AND update `package.json`

    $ npm install --save [package]

### Install package globally

    $ npm install -g [package]

### Uninstall package

    $ npm uninstall [package]

## HOW DO I KNOW HOW TO DO THIS???

## I READ THE DOCS

---

## Example: Express generator

### Install the express-generator package globally (only do this once)

    $ npm install -g express-generator

### Use express generator to create a new express app (with pug as the view layer)

    $ express --pug example-app

---

## Example: Usage

### Import the [file system](https://nodejs.org/api/fs.html) package (which is just an object that has functions) and then invoke the readFile function

```js
var fs = require('fs');

fs.readFile('./stupid-file.json', (err, data) => {

    var json = JSON.parse(data);

    console.log(json);

});
```

### Import the [express](https://expressjs.com/en/4x/api.html) package, which is just a function, then invoke it

```js
var express = require('express');

var app = express();
```
