# Sample Next.js app with MongoDB

This sample app was generated from the [Next.js example using MongoDB](https://github.com/vercel/next.js/tree/canary/examples/with-mongodb). The design is to be used as a walk-through of GitHub features, including [Codespaces](https://github.com/features/codespaces), [Actions](https://github.com/features/actions) and [GitHub Advanced Security (GHAS)](https://github.com/features/security).

## Starting the project

The project depends on a MongoDB database. You can [install locally](https://www.mongodb.com/docs/manual/administration/install-community/) or use a cloud based provider of your choosing. To start the project, you need to configure an environment variable to store the connection string for the database, install the NPM packages, and run the server.

1. Create an environment variable

    ```bash
    # Linux or Mac
    export MONGODB_URI=<connection string>
    # Windows
    set MONGODB_URI=<connection string>
    ```

1. Install the NPM packages and start the server

    ```bash
    npm install
    npm run dev
    ```

1. Enter the following commands to start the dev server

   ```bash
   npm install
   npm run dev
   ```

## Dog images

You can use the following URLs for the images for pets created in the app:

- https://raw.githubusercontent.com/GeekTrainer/pets-walkthrough/main/pics/roscoe.jpg
- https://raw.githubusercontent.com/GeekTrainer/pets-walkthrough/main/pics/sammy.jpg
- https://raw.githubusercontent.com/GeekTrainer/pets-walkthrough/main/pics/sushi.jpg
