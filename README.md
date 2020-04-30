Demo [Link](https://encouragementnow.net/) <br>
API Repo [Link](https://github.com/rosborne132/encouragement-now-api)

# About

I built this site to help users to register for the encouragement now service.

## Summary

![manageGames](https://res.cloudinary.com/rosborne/image/upload/v1562437064/Backlogger/gameManage.png)
Backlogger is an app that allows users to create a list of consoles they are playing games on. Users can keep track of what games they are playing by listing games and organizing them by console. The point of backlogger is for users to list the games they are currently playing so that they don't get distracted.

Tech Used:

-   React
-   Gatsby

## Running the app locally

### Create an api key

Create a dev stack in the api Repo then follow the steps to create an api key
[Setup API Key](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-setup-api-key-with-console.html)
[Setup Usage Plan](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-create-usage-plans-with-console.html)

### Create env.development file

```env
GATSBY_API_URL= (Your api local/dev's `registeruser` end point)
GATSBY_API_KEY= (Your api key)
```

### Install dependenices

```bash
yarn install
```

### Running local site

```bash
yarn run start
```
