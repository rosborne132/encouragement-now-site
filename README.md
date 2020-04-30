Demo [Link](https://encouragementnow.net/) <br>
API Repo [Link](https://github.com/rosborne132/encouragement-now-api)

# About

I built this site to help users to register for the encouragement now service.

Tech Used:

-   React
-   Gatsby

## Running the app locally

### Setup env file

Create a dev stack in the API Repo then follow the steps to create an API key

-   [Setup API Key](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-setup-api-key-with-console.html)
-   [Setup Usage Plan](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-create-usage-plans-with-console.html)

Sample env.development file

```env
GATSBY_API_URL= (Your API local/dev's `registeruser` endpoint)
GATSBY_API_KEY= (Your API key)
```

### Install dependencies

```bash
yarn install
```

### Running the local site

```bash
yarn run start
```

Once you have registered on the site you should receive a text that looks like the one below.
![text](https://res.cloudinary.com/rosborne/image/upload/v1588207382/encouragement-now/text.png)
