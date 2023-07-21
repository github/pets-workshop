# Modern DevOps with GitHub

This workshop is built to help guide you through some of the most common DevOps tasks on GitHub. You'll explore:

- Managing projects with [GitHub Issues](https://github.com/features/issues)
- Creating a development environment with [GitHub Codespaces](https://github.com/features/codespaces)
- Using [GitHub Copilot](https://github.com/features/copilot) as your AI pair programmer
- Securing the development pipeline with [GitHub Advanced Security](https://github.com/features/security)
- Automating provisioning and deployment with [GitHub Actions](https://github.com/features/actions)

## Required resources

To complete this workshop, you will need the following:

- A [GitHub account](https://github.com/join)
- An [Azure account](https://azure.microsoft.com/en-us/free/) if you wish to deploy your project

### Cloud consumption

This workshop does use both GitHub and Azure cloud services. Below is the information you will need about potential costs:

- GitHub Advanced Security and GitHub Actions are free for public repositories.
- When using GitHub Codespaces, you have 60 free core hours available which will be more than sufficient for most learners.
- GitHub Copilot does require a subscription, however a [free trial for GitHub Copilot](https://docs.github.com/en/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot#about-billing-for-github-copilot) is available.
- If you choose to deploy to Azure (the last two exercises), there is a cost of around $6US. This amount is covered by creating a new [Azure account](https://azure.microsoft.com/en-us/free/).

## Getting started

Ready to get started? Let's go! The workshop scenario imagines you as a developer volunteering your time for a pet adoption center. You will work through the process of creating a development environment, creating code, enabling security, automating processes, and finally deploying the project.

0. [Setup your environment](exercises/0-setup.md) for the workshop
1. [Enable Code Scanning](exercises/1-code-scanning.md) to ensure new code is secure
2. [Create an issue](exercises/2-issues.md) to document a feature request
3. [Create a codespace](exercises/3-codespaces.md) to start writing code
4. [Implement testing](exercises/4-testing.md) to supplement continuous integration
5. [Add a new feature](exercises/5-coding.md) to implement the feature
6. [Create a pull request](exercises/6-pull-request.md) to begin a code review
7. [Add automation](exercises/7-automation.md) to create a deployment environment
8. [Deploy your project](exercises/8-deployment.md) to publish your project to the cloud
