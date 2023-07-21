# Cloud-based development with GitHub Codespaces

One of the biggest challenges organizations face is onboarding new developers to projects. There are libraries to install, services to configure, version issues, obscure error messages... It can literally take days to get everything running before a developer is able to write their first line of code. [GitHub Codespaces](https://github.com/features/codespaces) is built to streamline this entire process. You can configure a container for development which your developers can access with just a couple of clicks from basically anywhere in the world. The container runs in the cloud, has everything already setup, and ready to go. Instead of days your developers can start writing code in seconds.

GitHub Codespaces allows you to develop using the cloud-based container and Visual Studio Code in your browser window, meaning no local installation is required; you can do development with a tablet and a keyboard! You can also connect your local instance of [Visual Studio Code](https://docs.github.com/en/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code) or [JetBrains IDE](https://docs.github.com/en/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)

Let's explore how to create and configure a codespaces for your project, and see how you can develop in your browser.

## Using the default container

GitHub provides a [default container](https://docs.github.com/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers#using-the-default-dev-container-configuration) for all repositories. This container is based on a Linux image, and contains many popular runtimes including Node.js, Python, PHP and .NET. In many scenarios, this default container might be all you need. You also have the ability to configure a custom container for the repository, as you'll see later in this exercise. For now, let's explore how to use the default container.

1. If not already open, open your repository in your browser.
2. From the **Code** tab (suggest to open a new browser tab) in your repo, access the green **<> Code** dropdown button and from the **Codespaces** tab click **Create codespace on main**.
3. Allow the Codespace to load; it should take less than 30 seconds because we are using the default image.

## Defining a custom container

One thing that's really great is the [default dev container](https://github.com/devcontainers/images/blob/main/src/universal/.devcontainer/Dockerfile) has **.NET 7**, **node**, **python**, **mvn**, and more. But what if you need other tools? Or in our case, we want don't want to have each developer install the **[GitHub Copilot Extension](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)**; we want to have everything pre-configured from the start!

Let's create our own dev container! The [dev container is configured](https://docs.github.com/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers) by creating the Docker files Codespaces will use to create and configure the container, and providing any customizations in the `devcontainer.json` file. Customizations provided in `devcontainer.json` can include ports to open, commands to run, and extension to install in Visual Studio Code (either running locally on the desktop or in the browser). This configuration becomes part of the repository. All developers who wish to contribute can then create a new instance of the container based on the configuration you provided.

1. Access the Command Palette (<kbd>F1</kbd>), then start typing **dev container**.
2. Select **Codespaces: Add Development Container Configuration Files...** .
3. Select **Create a new configuration...**.
4. Select **From a predefined container configuration...**.
5. Scroll down and select **Node.js & Mongo DB**.
6. Select **20 (default)**.
7. Select **Azure CLI** and **GitHub CLI** from **additional features** and select **OK**.
8. Select **Keep defaults**.

    > Your new container definition files will be created into the **.devcontainer** folder. **DO NOT** select **Rebuild Now**; we'll do that in just a moment.

Before rebuilding the container, we want to make one last configuration. We want to ensure the GitHub Copilot extension is automatically installed for all users of the container.

1. Remaining in the codespace, open **devcontainer.json** inside the **.devcontainer** folder.
2. Locate the line which reads `"mongodb.mongodb-vscode"` (which should be line 18).
3. Add a comma (`,`) to the end of the line.
4. Press <kbd>return</kbd> or <kbd>Enter</kbd> to create a new line immediately after the line you just edited.
5. Insert the following into the new line to add the GitHub Copilot extension to the list: `"GitHub.copilot"`.

    > **NOTE:** An example of the entire **devcontainer.json** file is at the end of this exercise.

You've now defined a custom container! Whenever someone uses the codespace you defined they'll have an environment with Node.js and Mongo DB, and the GitHub Copilot extension installed. Let's use this container!

1. Select <kbd>F1</kbd> to open the command palette.
2. Type **rebuild** and select **Codespaces: Rebuild container**.
3. Select **Rebuild Container** on the dialog box. Your container now rebuilds.

> **IMPORTANT:** Rebuilding the container can take several minutes. Obviously this isn't an ideal situation for providing fast access to your developers, even if it's faster than creating everything from scratch. Fortunately you can [prebuild your codespaces](https://docs.github.com/en/codespaces/prebuilding-your-codespaces) to ensure developers can spin one up within seconds.

## Interacting with the repository

<!-- TODO: Update this to just push to main -->

Custom containers for GitHub Codespaces become part of the source code for the repository. Thus they are maintained through standard source control, and will follow the repository as it's forked in the future. This allows this definition to be shared across all developers contributing to the project.

Let's create a new branch with our code, create a pull request, mark it as completing the related issue, then merge it in. You'll use command-line tools in the codespace to complete this process.

> **NOTE:** Your codespace automatically has a token granting you access to the repository. As a result, all command-line utilities which interact with the repository will operate correctly.

1. Open the terminal window in the codespace by selecting <kbd>Ctl</kbd> + <kbd>`</kbd>.
2. Find the issue number for defining the codespace by entering the following command:

    ```bash
    gh issue list
    ```

    > **NOTE:** It will likely be #1. You'll use this number later in this exercise.

3. Type the following `git` command to create a new branch, add files, and commit them:

    ```bash
    git checkout -b define-codespace
    git add .
    git commit -m "Define custom codespace"
    ```

    > **NOTE:** If prompted, select **Allow** to enable copy/paste for the codespace.

4. Enter the following command to begin the process of creating the pull request:

    ```bash
    gh pr create
    ```

5. When prompted for **Where should we push the 'define-codespace' branch?**, ensure **\<your handle\>/pets-workshop** is highlighted and press <kbd>return</kbd> or <kbd>Enter</kbd>.
6. When prompted for **Title**, press <kbd>return</kbd> or <kbd>Enter</kbd> to select the default.
7. When prompted for **Body**, press <kbd>e</kbd> to use Visual Studio Code as the editor for the PR's body.
8. In the new editor tab, enter the following text, replacing `<issue-number>` with the number you noted earlier:

    ```
    Closes #<issue-number>
    ```

9. Close the editor tab (**NOT** the browser tab) to save the body changes.
10. When prompted for **What's next**, select **Submit**. Information about the PR you just created is displayed, including a link. You can follow the link to see the PR on GitHub.
11. Merge the PR by entering the following command, replacing `<pr-number>` with the number of the pull request (the number at the end of the URL displayed).

    ```bash
    gh pr merge <pr-number>
    ```

12. When prompted for **What merge method would you like to use**, select **Create a merge commit** and press <kbd>return</kbd> or <kbd>Enter</kbd>.
13. When prompted to **Delete the branch locally and on GitHub?**, press <kbd>Y</kbd> and press <kbd>return</kbd> or <kbd>Enter</kbd>.
14. When prompted for **What's next**, select **Submit** and press <kbd>return</kbd> or <kbd>Enter</kbd>.
15. When the command completes, enter the following to list all open issues:

    ```bash
    gh issue list
    ```

16. Note the issue for defining a codespace is no longer listed; you completed it and marked it as such with your pull request!

You just accomplished quite a bit! You created a new branch, which is typically how you'll test updates to your codebase. You then created a pull request to indicate the code you created was ready to be merged in, relating it to the issue you created earlier for defining a codespace. Finally you merged the PR into the codebase.

## Summary and next steps

### Additional resources

> **What have you learned?**
> 
> - You can customize the developer experience by having a standardized development environment by creating a [devcontainer.json](../.devcontainer/devcontainer.json) file. You can personalize to your liking using [Dotfiles](https://docs.github.com/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account) and many more things. For more information read [introduction to dev container](https://docs.github.com/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)
> - How to [work with source control](https://docs.github.com/codespaces/developing-in-codespaces/using-source-control-in-your-codespace) in your Codespace and commit changes
> How to use some basic [GitHub CLI command line](https://docs.github.com/github-cli/github-cli/about-github-cli) commands

> **Did you know?**
> 
> - The GitHub CLI commands know what repository you are in, so you don't have to specify the repository name. 
> - Also, since you are running in Codespaces, it knows who YOU are. If you create an issue using the GitHub CLI command, it will show up as created by you without having to authenticate again.

## Exercise 4 - Debugging in your Codespace

With our custom image built, let's turn our attention to the bug. Our configuration is now part of the repository, meaning anyone who wishes to contribute to our project will be able to use the same image! No more configuration headaches! Instead we can focus on the other headache - bugs 🐛.

As we saw before, our images aren't loading. Let's figure out why. We're going to follow a streamlined DevOps process by first finding the issue which relates to the bug, creating a fix, and pushing it to the main branch.

> **NOTE**
> 
> Normally you would [create a pull request](https://docs.github.com/get-started/quickstart/github-flow#create-a-pull-request) as part of the flow, but for our purposes we will push to main.

1. In the browser window with your Codespace, run the following command in the terminal window to list all issues: `gh issue list`
    > **Note** Instead of using the CLI, you can also click on the `GitHub` octocat pane icon and expand the `My Issues` dropdown to see the issues assigned to you.
1. You should see a `#2  :bug: Fix book cover images` issue. You can further examine the issue by running `gh issue view 2`
1. Next, let's run some unit tests to see if this helps us in debugging our issue. In the Terminal prompt, navigate to your unit tests folder.
    - You should be able to enter `cd src/ReadingTime6.Web.Tests.Unit/` and press return.
    - If you are stuck, this command should work also:

      `cd $CODESPACE_VSCODE_FOLDER/src/ReadingTime6.Web.Tests.Unit/`
1. Enter `dotnet test` and press return.
1. Okay, you should see **12** tests 🧪 pass :white_check_mark: and 1 test 🧪 failed :x:. Ohh, from the error message, we might have discovered our bug 🐛.
    > **Note** A tip is that you can "<kbd>⌘</kbd> - click" on macOS "<kbd>ctl</kbd> - click" on Windows on the `/workspaces/your-repository/src/ReadingTime6.Web.Tests.Unit/BookTests.cs:line 29` in the Terminal window to open the file in the editor, along with the line number where the test failed. You can then right click the `Book` on `new Book` and select `Go to Definition` to see the code where this is being defined in `Books.cs:line 25`.
1. Let's set a breakpoint in the code to see if we can further diagnose the issue.
    1. In the `Explorer` pane ![Screenshot of explorer pane](https://user-images.githubusercontent.com/19912012/200037653-48e8cb42-7967-488d-831f-1046fd439c76.png), open the `src/ReadingTime6.Web/Controllers/BookController.cs` file.
    1. Place your cursor on `line 18`, which is the line that reads `return View(bookService.Books());`.
    1. Click the `red circle` icon to the left of the line number (in the "gutter") to add a breakpoint, like so: ![Screenshot of debug break circle](https://user-images.githubusercontent.com/19912012/200049139-d7161356-aa88-486d-b69d-0b1010254293.png)
1. Start debugging!
    1. Click the `Run and Debug` ![Screenshot of icon for Run and Debug pane](https://user-images.githubusercontent.com/19912012/200047101-e4d2e6ef-6a01-4c7a-9a7c-93f814e0a1ef.png) pane
    1. Click the green `play` button ![Screenshot of play button](https://user-images.githubusercontent.com/19912012/200047608-672a2143-39fc-4da5-97c5-bb07555afe97.png) to start debugging.
1. Open the site (either by clicking on the `open in browser` notification in the lower right, or by navigating to the Ports tab and clicking the `globe icon` under the `local address` column).
1. Click on the `View Inventory` button
1. You should notice that your page loading is spinning and your Codespaces tab now has a red dot on it, indicating that it has hit a breakpoint. Re-open the Codespaces tab to take a look.
    <details>
    It should look like this:
      ![Screenshot of Codespace with breakpoint stopping code](https://user-images.githubusercontent.com/19912012/200049484-50039c0f-fe8a-431f-af10-ec291d454700.png)
    </details>
1. Hover over the `bookserver` object, and inspect one of the items in the list. See anything off? Note how the `Cover` property is using `.png` instead of `.jpg`:

      ![Screenshot of quick peek of bookService object](https://user-images.githubusercontent.com/19912012/200050402-edfa8736-e872-47ca-ba96-1fc052319eb3.png)
1. Find where the `Cover` property is being set to see if there is something erroneously setting the images to `.png` instead of `.jpg`.
    1. Open the `Search` pane ![Screenshot of search pane icon](https://user-images.githubusercontent.com/19912012/200051135-b377f4a5-48b6-4696-a710-b0d076448ad0.png)
    1. Search for: `".png"` (with the quotes)
    1. Click on the result in `Book.cs` to open the file
    1. Remove the `.Replace(".jpg",".png")` function from the line
    1. The line should now read: `Cover = cover;`
1. After making the code fix, in the debugging toolbar, click the green `restart` button to restart debugging (<kbd>⇧</kbd> + <kbd>⌘</kbd> + <kbd>F5</kbd>) in macOS or <kbd>Ctl</kbd> + <kbd> + <kbd>Shift</kbd> + <kbd>F5</kbd>` in windows).
    <details>

    This button: ![Screenshot of restart button](https://user-images.githubusercontent.com/19912012/200098170-86b980dd-25fd-431f-b627-d3654e5f1614.png)
    </details>
1. Re-open the site and select the `View Inventory` button again.
1. Your breakpoint should be hit again. Navigate back to the codespaces browser tab to continue debugging.
1. If you inspect the list items and their properties again, you should see that the cover image looks better now with a `.jpg` file extension.
1. Click the `|>` continue button (or <kdb>F5</kbd>) in the debugging toolbar to tell the debugger to continue.
    <details>

    This button: ![Screenshot of play button](https://user-images.githubusercontent.com/19912012/200098220-f92cb96e-3d97-4b93-9924-748c9e32006e.png)
    </details>
1. Navigate back to the tab with the site open - nice, images load! 🎉
1. Close the web page tab.
1. Back in your codespace, stop debugging by clicking the `red square` (<kbd>⇧</kbd> + <kbd>F5</kbd> in macOS or  + <kbd>Shift</kbd> + <kbd>F5</kbd> in Windows)
1. In the terminal window, run `dotnet test` again in the `/src/ReadingTime6.Web.Tests.Unit/` folder. You might have to push <kbd>Ctl</kbd> + <kbd>C</kbd> to exit the debugging terminal. All 13 tests 🧪 should pass now :white_check_mark:! 🎉
1. In the `Source Control` pane, commit your changes - use something like `fixing images - closes #2` as the commit message
1. Push your change by clicking on the `Sync Changes 1 ^` button
1. Verify that our issue is closed by running `gh issue list` or `gh issue view 2`
1. At this point, feel free to play around, run the unit tests, and even make "basic" code changes (don't break it you'll use it later.) When ready continue.
1. Stop the codespace for now.
    <details>

    1. Click on the `Codespaces` button ![image](https://user-images.githubusercontent.com/19912012/200068097-a8bafd12-09aa-4181-82f9-0161aaef3980.png) in the lower left-hand corner
    1. Click `Stop Current Codespace`
    </details>

> **What have you learned?**
> 
> - How to [debug using VS Code](https://code.visualstudio.com/Docs/editor/debugging#_debug-actions) in your Codespace

## Next Steps

- Move on to the next lab! :next_track_button: [Lab 3 - Copilot](./lab3.md)

## Resources

- [About Codespaces - GitHub Docs](https://docs.github.com/codespaces/overview)
- [Quickstart for GitHub Codespaces](https://docs.github.com/codespaces/getting-started/quickstart)
- [Deep Dive into Codespaces](https://docs.github.com/codespaces/getting-started/deep-dive)
- [Managing encrypted secrets for your codespaces](https://docs.github.com/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)
- [Codespaces: Configure Dev Container Configuration Features](https://docs.microsoft.com-us/visualstudio/online/reference/configuring#configure-dev-container-configuration-features)
- [Codespaces: Rebuild Container](https://docs.microsoft.com-us/visualstudio/online/reference/configuring#rebuild-container)

> **What have you learned?**
> 
> - How to [create a Codespace](https://docs.github.com/codespaces/developing-in-codespaces/creating-a-codespace?tool=webui) ready to start working in no time without any additional setup
> - How to [change the machine type](https://docs.github.com/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace) for your Codespace

> **Did you know?**
> 
> - You can [synchronize your settings](https://code.visualstudio.com/docs/editor/settings-sync) to tailor your experience to your needs and that will follow from codespace to codespace and the desktop version of VS Code as well. This can be turned on by clicking on the `settings` cog icon in the lower left-hand corner clicking and `Turn on Settings Sync...`
> - If you prefer to use VSCode Desktop to edit code, but still run the compute on the cloud, you can open the code on your machine by selecting the option `Open in VS Code Desktop` available on the menu (top left of the screen the 3 horizontal lines icon). For this lab, stay in the browser :smile:.
> - You can open a codespace directly from the command line by running `gh codespace create` with the [GitHub CLI](https://cli.github.com) tool? The same command line even allows you to SSH into your codespace.