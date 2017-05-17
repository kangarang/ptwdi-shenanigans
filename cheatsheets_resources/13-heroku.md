# Heroku

#### List all remote repos

    $ git remote -v


#### Create a heroku app in working directory (do this only one time)

    $ heroku create


#### List remote repos -- now heroku should show up as a remote repo

    $ git remote -v
    heroku https://git.heroku.com/example-heroku-app.git (fetch)
    heroku https://git.heroku.com/example-heroku-app.git (push)


#### Get your current node and npm versions

    $ node -v
    v7.8.0

    $ npm -v
    4.4.4


#### Add this to `package.json` (with your respective versions)

```json
"engines": {
    "node": "7.8.0",
    "npm": "4.4.4"
}
```


#### Add environment variables to heroku

    $ heroku config:set SECRET_API_KEY='fdss124GFG13clkjaVCXVi'


#### Change start script in `package.json`

```json
"scripts": {
    "start": "node bin/www"
}
```

#### Deploying to heroku

    $ git add -A
    $ git commit -m 'commit message'
    $ git push heroku master


#### Open heroku app in browser

    $ heroku open


#### Show heroku logs (great for debugging)

    $ heroku logs

#### Show heroku logs constantly

    $ heroku logs --tail
