# Postgres & Sequelize

[SEQUELIZE DOCS](http://docs.sequelizejs.com/)

[MIGRATION DOCS](http://docs.sequelizejs.com/manual/tutorial/migrations.html)

[CLI GITHUB](https://github.com/sequelize/cli)


## Enable the `psql` shell command (mac users only)

Add `export PATH="$PATH:/Applications/Postgres.app/Contents/Versions/latest/bin"` to your `~/.bash_profile`


## Common commands

```bash
# create a databse from the command line
$ createdb [database_name]

# initialize sequelize in the current working directory
$ sequelize init

# create a model AND migration file for the user entity
$ sequelize model:create --name User --attributes first_name:string,last_name:string,bio:text

# create a new migration file
$ sequelize migration:create --name user

# read migrations (ONCE) and populate columns on the tables
$ sequelize db:migrate

# undo a migration
$ sequelize db:migrate:undo

# enter the postgres interactive environment, specifically the "awesome_db" database
$ psql awesome_db

# -- inside postgres interactive environment (database: awesome_db) -- #

# create a database called new_db
awesome_db=# create database new_db;

# drop a database
awesome_db=# drop database new_db;
```

---

### `sequelize init`

- Initializes the project in the current working directory
- Creates these items
    * config                folder that contains config files
    * config/config.json    configuration for the ORM
    * migrations            folder that contains migration files
    * seeders               folder that contains seed files
    * models                folder that contains model files
    * models/index.js       required to load all the models

---

### `sequelize model:create`

- Generates a model file and its respective migration file
- You must specify the name of the model AND its attributes
- Attributes must be written using one of the 3 following semantic conventions
    * `sequelize model:create --name User --attributes first_name:string,last_name:string,bio:text`
    * `sequelize model:create --name User --attributes 'first_name:string last_name:string bio:text'`
    * `sequelize model:create --name User --attributes 'first_name:string, last_name:string, bio:text'`

```nano
OPTIONS
    --env              The environment to run the command in. Default: development
    --coffee           Enables coffee script support. Default: false
    --config           The path to the config file. Default: config/config.json
    --options-path     The path to a JSON file with additional options. Default: none
    --migrations-path  The path to the migrations folder. Default: migrations
    --seeders-path     The path to the seeders folder. Default: seeders
    --models-path      The path to the models folder.Default: models
    --url              The database connection string to use. Alternative to using --config files. Default: none
    --name             The name of the new model.
    --attributes       A list of attributes.
    --underscored      Set timestamps to snake_case
```

---

### `sequelize migration:create`

- Generates a new migration file.

```nano
OPTIONS
    --env              The environment to run the command in. Default: development
    --coffee           Enables coffee script support. Default: false
    --config           The path to the config file. Default: config/config.json
    --options-path     The path to a JSON file with additional options. Default: none
    --migrations-path  The path to the migrations folder. Default: migrations
    --seeders-path     The path to the seeders folder. Default: seeders
    --models-path      The path to the models folder.Default: models
    --url              The database connection string to use. Alternative to using --config files. Default: none
    --name             Defines the name of the migration. Default: unnamed-migration
    --underscored      Use snake case for the timestamp's attribute names
```

---

### `sequelize db:migrate`

- Run pending migrations.

```nano
OPTIONS
    --env              The environment to run the command in. Default: development
    --coffee           Enables coffee script support. Default: false
    --config           The path to the config file. Default: config/config.json
    --options-path     The path to a JSON file with additional options. Default: none
    --migrations-path  The path to the migrations folder. Default: migrations
    --seeders-path     The path to the seeders folder. Default: seeders
    --models-path      The path to the models folder.Default: models
    --url              The database connection string to use. Alternative to using --config files. Default: none
```

---
