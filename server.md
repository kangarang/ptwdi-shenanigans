# How to deploy a react app

Create a `server.js` file in the root directory of your app and paste this in there:

```js
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// static route
app.use(express.static(__dirname + '/public'))

// config for browser history in react
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'public', 'index.html')))

const server = app.listen(process.env.PORT || 8080, () => {
    const port = server.address().port
    console.log('app listening on port:', port);
})
```

Notice: you'll need to run `$ npm install --save [package(s)]` for those 4 npm packages.

In `package.json`, change the start script to: `node server.js`.

Then, build the static files and change the name to `public` so that heroku or firebase or github knows where your files are:

### Don't just run commands without knowing what they do. If you're unsure, check out this [revolutionary website](https://google.com) that all the best developers in the world use! :)

    $ npm run build
    $ mv build public
    $ git add -A
    $ git commit -m 'my first build'
    $ git push heroku master

When you type `npm run [script]`, it looks at your `package.json` file and executes that script.
