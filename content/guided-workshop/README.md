# Modern DevOps with GitHub

[DevOps](https://en.wikipedia.org/wiki/DevOps) is a [portmanteau](https://www.merriam-webster.com/dictionary/portmanteau) of **development** and **operations**. At its core is a desire to bring development practices more inline with operations, and operations practices more inline with development. This fosters better communication and collaboration between teams, breaks down barriers, and gives everyone an investment in ensuring customers are delighted by the software we ship.

This workshop is built to help guide you through some of the most common DevOps tasks on GitHub. You'll explore:

- Managing projects with [GitHub Issues](https://github.com/features/issues)
- Creating a development environment with [GitHub Codespaces](https://github.com/features/codespaces)
- Using [GitHub Copilot](https://github.com/features/copilot) as your AI pair programmer
- Securing the development pipeline with [GitHub Advanced Security](https://github.com/features/security)
- Automating provisioning and deployment with [GitHub Actions](https://github.com/features/actions)

## Prerequisites

This workshop assumes you are familiar with:

- development, however strong coding skills are not required (solution files are provided).
- the cloud, and how resources can be hosted by different providers.

## Required resources

To complete this workshop, you will need the following:

- A [GitHub account](https://github.com/join)
- An [Azure account](https://azure.microsoft.com/en-us/free/) if you wish to deploy your project

### Cloud consumption

This workshop does use both GitHub and (optionally) Azure cloud services. Below is the information you will need about potential costs:

- The GitHub Security and GitHub Actions features used during this workshop are at levels which are free for public repositories.
- When using GitHub Codespaces, you have 60 free core hours available which will be more than sufficient for most learners.
- GitHub Copilot does require a subscription, however a [free trial for GitHub Copilot](https://docs.github.com/en/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot#about-billing-for-github-copilot) is available. The coding exercise does not require the use of GitHub Copilot.
- If you choose to deploy to Azure (the last two exercises), there is a cost of around $6 US. This amount is covered by creating a new [Azure account](https://azure.microsoft.com/en-us/free/).

## Getting started

Ready to get started? Let's go! The workshop scenario imagines you as a developer volunteering your time for a pet adoption center. You will work through the process of creating a development environment, creating code, enabling security, automating processes, and optionally deploying the project.

0. [Setup your environment](exercises/0-setup.md) for the workshop
1. [Enable Code Scanning](exercises/1-code-scanning.md) to ensure new code is secure
2. [Create an issue](exercises/2-issues.md) to document a feature request
3. [Create a codespace](exercises/3-codespaces.md) to start writing code
4. [Implement testing](exercises/4-testing.md) to supplement continuous integration
5. [Add code with the help of GitHub Copilot](exercises/5-coding.md) to implement the feature
6. [Use the GitHub flow](exercises/6-github-flow.md) to incorporate changes

If you wish, you can also close out your DevOps learning journey by deploying to the cloud. For purposes of this workshop, Azure is used, however the concepts are applicable to any cloud provider.

> **NOTE:** When deploying to a cloud environment, some charges may be incurred. For this workshop, when deploying to Azure and deleting the resources upon completion of the exercises, the charge should be less than $6 US.

7. [Add automation](exercises/7-automation.md) to create a deployment environment
8. [Deploy your project](exercises/8-deployment.md) to publish your project to the cloud
