# Guestbook

Backend for Guestbook

## Requirements

1. [node.js v12 and npm v6+](https://www.npmjs.com/get-npm)
2. [postgresql](https://www.postgresql.org/download/)

## Usage

1. Clone this repo.
2. move to guestbook folder.
3. configure .env
    ```dotenv
    HOST=localhost
    PORT=3003

    DB_HOST=localhost
    DB_PORT=5432
    DB_NAME=guestbook
    DB_USERNAME=postgres
    DB_PASSWORD=postgres

    APP_KEY=guestbook12345
    APP_ID=guestbook12345
    ```
4. run `npm install` to install all package.
5. run `npm run dev` to run app in development mode.
6. run `npm run dev` to show result test 1.
    ``` 1 2 3 4 5 
        2 4 6 8 10 
        3 6 9 12 15
        4 8 12 16 20
        5 10 15 20 25
    ```
## Documentation

For Web, open browser and go to `localhost:3003/api/v1/docs`
``` 
    APP_KEY=guestbook12345
    APP_ID=guestbook12345
    in swagger
```
