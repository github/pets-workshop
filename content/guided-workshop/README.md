# Running the in Codespaces

The repository can be configured with a [dev container](https://code.visualstudio.com/docs/remote/create-dev-container) which can be used with Codespaces. The container uses Docker Compose to combine the [Cypress](https://github.com/cypress-io/cypress-docker-images) image for web app dev and [MongoDB](https://www.mongodb.com/compatibility/docker) for the database.

To run the project in Codespaces:

1. Copy the **.devcontainer** folder to the root of the repository.
1. Commit and push the changes to GitHub.
1. Open the repository in GitHub, and create a [Codespaces secret](https://docs.github.com/en/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces) to store the MongoDB connection string by:
   1. Selecting **Settings** > **Secrets and variables** > **Codespaces** > **New repository secret**.
   2. Set the name to **MONGODB_URI**
   3. Set the secret to **mongodb://localhost**
   4. Select **Add Secret**
1. Select **Code** to return to the main page for the repository.
1. To launch the repository, select **Code** > **Codespaces** > **Create codespace on main**.
1. After the codespace is loaded, open a new terminal by selecting **Ctl** **`** on your keyboard.
1. In the terminal, run the following to install the packages and start the server:
   ```bash
   npm install
   npm run dev
   ```
1. Open the site by selecting **Open Browser** in the lower right corner of the Codespace window.
