# Cloud-based development with GitHub Codespaces

One of the biggest challenges organizations face is onboarding new developers to projects. There are libraries to install, services to configure, version issues, obscure error messages... It can literally take days to get everything running before a developer is able to write their first line of code. [GitHub Codespaces](https://github.com/features/codespaces) is built to streamline this entire process. You can configure a container for development which your developers can access with just a couple of clicks from basically anywhere in the world. The container runs in the cloud, has everything already setup, and ready to go. Instead of days your developers can start writing code in seconds.

GitHub Codespaces allows you to develop using the cloud-based container and Visual Studio Code in your browser window, meaning no local installation is required; you can do development with a tablet and a keyboard! You can also connect your local instance of [Visual Studio Code](https://docs.github.com/en/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code) or [JetBrains IDE](https://docs.github.com/en/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)

Let's explore how to create and configure a codespaces for your project, and see how you can develop in your browser.

## Using the default container

GitHub provides a [default container](https://docs.github.com/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers#using-the-default-dev-container-configuration) for all repositories. This container is based on a Linux image, and contains many popular runtimes including Node.js, Python, PHP and .NET. In many scenarios, this default container might be all you need. You also have the ability to configure a custom container for the repository, as you'll see later in this exercise. For now, let's explore how to use the default container.

1. If not already open, open your repository in your browser.
1. From the **Code** tab (suggest to open a new browser tab) in your repo, access the green **<> Code** dropdown button and from the **Codespaces** tab click **Create codespace on main**.
1. Allow the Codespace to load; it should take less than 30 seconds because we are using the default image.

## Defining a custom container

One thing that's really great is the [default dev container](https://github.com/devcontainers/images/blob/main/src/universal/.devcontainer/Dockerfile) has **.NET 7**, **node**, **python**, **mvn**, and more. But what if you need other tools? Or in our case, we want don't want to have each developer install the **[GitHub Copilot Extension](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)**; we want to have everything pre-configured from the start!

Let's create our own dev container! The [dev container is configured](https://docs.github.com/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers) by creating the Docker files Codespaces will use to create and configure the container, and providing any customizations in the `devcontainer.json` file. Customizations provided in `devcontainer.json` can include ports to open, commands to run, and extension to install in Visual Studio Code (either running locally on the desktop or in the browser). This configuration becomes part of the repository. All developers who wish to contribute can then create a new instance of the container based on the configuration you provided.

1. Access the Command Palette (<kbd>F1</kbd>), then start typing **dev container**.
1. Select **Codespaces: Add Development Container Configuration Files...** .
1. Select **Create a new configuration...**.
1. Select **From a predefined container configuration...**.
1. Scroll down and select **Node.js & Mongo DB**.
1. Select **20 (default)**.
1. Select **Azure CLI devcontainers** and **GitHub CLI devcontainers** from **additional features** and select **OK**.

    > **NOTE:** You can type the name of the feature you want to filter the list.

1. Select **Keep defaults**.

    > Your new container definition files will be created into the **.devcontainer** folder. **DO NOT** select **Rebuild Now**; we'll do that in just a moment.

You have now defined the container to be used by your codespace. This contains the necessary services and tools for your code.

## Customize the extensions

Creating a development environment isn't solely focused on the services. Developers rely on various extensions and plugins for their [integrated development environments (IDEs)](https://en.wikipedia.org/wiki/Integrated_development_environment). To ensure consistency, you may want to define a set of extensions to automatically install. When using GitHub Codespaces and either a local instance of Visual Studio Code or the browser-based version, you can add a list of [extensions](https://code.visualstudio.com/docs/editor/extension-marketplace) to the **devcontainer.json** file.

Before rebuilding the container, let's add **GitHub.copilot** to the list of extensions.

1. Remaining in the codespace, open **devcontainer.json** inside the **.devcontainer** folder.
1. Locate the line which reads `"mongodb.mongodb-vscode"` (which should be line 18).
1. Add a comma (`,`) to the end of the line.
1. Press <kbd>return</kbd> or <kbd>Enter</kbd> to create a new line immediately after the line you just edited.
1. Insert the following into the new line to add the GitHub Copilot extension to the list: `"GitHub.copilot"`.

    > **NOTE:** An example of the entire **devcontainer.json** file is at the end of this exercise.

You've now defined a custom container!

## Use the newly defined custom container

Whenever someone uses the codespace you defined they'll have an environment with Node.js and Mongo DB, and the GitHub Copilot extension installed. Let's use this container!

1. Select <kbd>F1</kbd> to open the command palette.
1. Type **rebuild** and select **Codespaces: Rebuild container**.
1. Select **Rebuild Container** on the dialog box. Your container now rebuilds.

> **IMPORTANT:** Rebuilding the container can take several minutes. Obviously this isn't an ideal situation for providing fast access to your developers, even if it's faster than creating everything from scratch. Fortunately you can [prebuild your codespaces](https://docs.github.com/en/codespaces/prebuilding-your-codespaces) to ensure developers can spin one up within seconds.

## Interacting with the repository

Custom containers for GitHub Codespaces become part of the source code for the repository. Thus they are maintained through standard source control, and will follow the repository as it's forked in the future. This allows this definition to be shared across all developers contributing to the project. Let's upload our new configuration, closing the [issue you created](./2-issues.md) for defining a development environment.

> **IMPORTANT:** For purposes of this exercise we are pushing code updates directly to `main`, our default branch. Normally you would follow the [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow), which we will do in a [later exercise](6-github-flow.md).

1. Open the terminal window in the codespace by selecting <kbd>Ctl</kbd> + <kbd>`</kbd>.
1. Find the issue number for defining the codespace by entering the following command:

    ```bash
    gh issue list
    ```

    > **NOTE:** It will likely be #1. You'll use this number later in this exercise.

1. Stage all files, commit the changes with a message to resolve the issue, and push to main by entering the following command in the terminal window, replacing `<ISSUE_NUMBER>` with the number you obtained in the previous step:

    ```bash
    git add .
    git commit -m "Resolves <ISSUE_NUMBER>"
    git push
    ```

    > **NOTE:** If prompted, select **Allow** to enable copy/paste for the codespace.

1. When the command completes, enter the following to list all open issues:

    ```bash
    gh issue list
    ```

1. Note the issue for defining a codespace is no longer listed; you completed it and marked it as such with your pull request!

## Configuring the codespace to run your website

When building an application you will typically want to actually run the website as part of the development and testing process. Fortunately, GitHub Codespaces supports [port forwarding](https://docs.github.com/en/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace), meaning your application can run in the cloud-hosted container while you can access it from your local system. By default these ports are restricted to you via authentication, but you can also [share a port](https://docs.github.com/en/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace#sharing-a-port-1) publicly or (when using GitHub Enterprise) with your team.

Because the application we're building uses a backend MongoDB database, we need to configure a connection string. If you open **src** > **lib** > **mongoUri.js**, you'll notice on line 3 this is read from an environment variable named `MONGODB_URI`. When using GitHub Codespaces you can set environment variables by adding [encrypted secrets](https://docs.github.com/en/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces). When using a codespace, these secrets will be accessible via environment variables.

Let's add an environment variable, refresh the codespace to update the environment settings, then run the website.

1. Open your repository in a browser tab (or return to one which is already open).
1. Select the **Settings** tab.
1. On the left, under the **Security** section, expand **Secrets and variables** and select **Codespaces**.

    ![Screenshot of the Secrets and variables section](https://docs.github.com/en/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)

1. Select **New repository secret**.
1. Create a new secret by entering the following values and pressing **Add secret**.

    - **Name**: `MONGODB_URI`
    - **Secret**: `mongodb://localhost/pets`

1. Return to your codespace. You will be prompted to **Reload to apply** your settings. Select **Reload to apply**.

    ![Screenshot of reload to apply dialog](./images/3-reload.png)

1. After the codespace reloads, run your website in the codespace by entering the following command in the terminal window (using <kbd>Ctl</kbd> - <kbd>`</kbd> to open one as necessary):

    ```bash
    npm run dev
    ```

1. After the application starts, you will be presented with a dialog explaining your application is running on port 3000, which is now being forwarded.
1. Select **Open in Browser** in this dialog to open a new tab with your application.

    ![Screenshot of open in browser dialog](./images/3-open-browser.png)

1. You will now see a new tab with your website running! Notice the URL at the top, which resembles the name of your codespace. Your website is running in the container you defined in the cloud!

1. If you wish, you can add a pet to the database by selecting **Add pet**. On the form you will notice various fields to describe the pet. If you need a URL for images, you can use any of the following:

    - https://raw.githubusercontent.com/github/pets-workshop/main/src/pics/roscoe.jpg
    - https://raw.githubusercontent.com/github/pets-workshop/main/src/pics/sammy.jpg
    - https://raw.githubusercontent.com/github/pets-workshop/main/src/pics/sushi.jpg

    > **NOTE:** Because the database is in the codespace's container, as long as you keep your codespace the database will maintain its state.

1. Stop the website by returning back to your codespace, ensuring focus is on the terminal window, and selecting <kbd>Ctl</kbd> - <kbd>C</kbd>.

    > **IMPORTANT:** You can ignore any **favicon** errors.

## Summary and next steps

Congratulations! You have now defined a custom development environment including all services and extensions. This eliminates the initial setup hurdle normally required when contributing to a project. Let's use this codespace to explore the code and [implement testing](./4-testing.md) for the project.

## Resources

- [GitHub Codespaces](https://github.com/features/codespaces)
- [Getting started with GitHub Codespaces](https://docs.github.com/en/codespaces/overview)
- [Defining dev containers](https://docs.github.com/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers)
- [GitHub Skills: Code with Codespaces](https://github.com/skills/code-with-codespaces)
