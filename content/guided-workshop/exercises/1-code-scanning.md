# Securing the development pipeline

Ensuring code security is imperative in today's environment. When we think about how we create code today, there's three main areas to focus on:

- The code we write
- The code we use through libraries and packages
- The credentials needed to access services

To help support developers and security teams, [GitHub Advanced Security](https://github.com/features/security) provides a suite of tools which cover these focus areas. Code Scanning will check the code you write, Dependabot ensures the libraries you use are secure, and Secret Scanning looks for any keys or tokens which are checked into code.

Let's explore each of these, and enable them on our repository. We'll see them in action when we create a pull request with new code later in the workshop.

## Dependabot

Most projects take dependencies on open source and other external libraries. While modern development would seemingly be impossible without these resources, we always need to ensure the dependencies we take are secure. [Dependabot](https://docs.github.com/en/code-security/getting-started/dependabot-quickstart-guide) will look at the dependencies your repository has and raise alerts or even create [pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) to update your dependencies to a secure version.

### Configuring Dependabot

Let's enable Dependabot for your repository. We'll setup alerts to be raised for potential insecure libraries and have pull requests automatically created when an insecure version is detected.

1. Navigate to the repository you created for this workshop.
2. Select the **Security** tab.
3. Select **Enable Dependabot alerts**.
4. Next to **Dependabot alerts**, select **Enable**.
5. Next to **Dependabot security updates**, select **Enable**.

You have now enabled Dependabot alerts and security updates! Should an insecure library be detected, you will both receive an alert, and Dependabot will create a new pull request to update the version number to a secure version of the library.

## Secret scanning

Many developers have checked in code with a token or username and passwords. Sometimes this is because the developer was trying to take a shortcut, sometimes it was because they didn't know the proper mechanism to secure the key, and sometimes it was done under the assumption they'll clean it up later but never do.

Regardless of the reason, even seemingly innocuous tokens can create a security issue. We always want to take care to not publish tokens and keys, and detect any issues as quickly as possible. Secret scanning is built to do exactly this. When a token is detected in your source code, an alert will be raised. You can even enable push protection, ensuring any code with a [supported secret](https://docs.github.com/en/code-security/secret-scanning/secret-scanning-patterns#supported-secrets) can't be pushed to your repository.

### Enabling secret scanning

Let's enable Secret scanning to detect any potential keys.

1. Navigate to the repository you created for this workshop.
2. Select the **Security** tab.
3. In the **Secret scanning alerts** section, select **Enable in settings**.
4. All the way at the bottom, in the **Secret scanning** section, select **Enable**.
5. Next to **Push protection, select **Enable**.

You've now enabled secret scanning and push protection. This helps you both block keys from being pushed to your repository and quickly detect when a key has been added to your source code.

## Code scanning

There is a direct relationship between the amount of code an organization creates and potential attack vectors. We always want to check our source code for vulnerabilities. [Code scanning](https://docs.github.com/en/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning) checks your source code for known vulnerabilities. When an issue is detected on a pull request, a new comment is added highlighting the line of source code providing contextual information for the developer. This allows for the issue to be quickly resolved.

> **NOTE**: Code scanning is built atop [GitHub Actions](https://github.com/features/actions), the automation platform for GitHub. We'll explore the specifics of GitHub Actions later in this workshop and create our own workflows.

### Enabling code scanning

Let's enable Code scanning to detect vulnerabilities in our source code.

1. Navigate to the repository you created for this workshop.
2. Select the **Security** tab.
3. Select **Setup code scanning**.
4. Under **Code scanning**, in the **Tools** section, select **Set up** > **Default**.
5. On the dialog box, select **Enable CodeQL**.

You have now enabled code scanning for your repository!

## Summary and next steps

Throughout the course of these exercises you enabled GitHub Advanced Security. You enabled Dependabot to check the libraries your project takes dependencies on, secret scanning to look for keys and tokens, and code scanning to examine your source code. These tools help ensure your application is secure. Next it's time to [file an issue](2-issues.md) to add feature requests.
