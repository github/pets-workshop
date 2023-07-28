# Project management with GitHub Issues

"URL or it didn't happen" is a common mantra at GitHub, which is used to highlight the importance of documenting the development process. Feature requests should have a history; who made the request, what was the rationale, who was involved in the process, what decisions were made, why were they made, was the feature implemented, how was it implemented... All of this information helps provide context to both drive future decisions and avoid repeating old mistakes.

GitHub provides various features to enable collaboration and project management, including [GitHub Discussions](https://github.com/features/discussions), [wikis](https://docs.github.com/en/communities/documenting-your-project-with-wikis/about-wikis), [pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) and [GitHub Issues](https://github.com/features/issues). Each of these can help your organization drive the creation process. We're going to focus on GitHub Issues, which is the foundation of project management on GitHub.

At their core, issues document some form of an action. They can be a request for a feature, a bug report, or another operation taken by the team. There's no prescribed methodology for using GitHub Issues, allowing your team to determine the best way to manage and drive your projects. A common flow teams will implement on issues is:

1. File an issue to request a new feature or file a bug report.
1. Discuss the issue, and determine the correct people and mechanism to resolve the request.
1. Create a pull request with a proposed implementation of the request.
1. Further discuss and review the pull request.
1. Once everyone is satisfied and has signed off, merge the pull request and close the issue.

## Scenario

The shelter wants to begin pushing new features to the website. They want to start by displaying the hours for the current day on the landing page. There's also a need to make updates to help support development and DevOps for both current and future updates. You want to track these updates to document the work being done. You'll do this by creating issues in the repository.

## Creating issues to manage feature requests

Our project needs two main updates. We want to make the updates to support development for our project, and add a new component to the website to display the shelter's hours. Let's create the issues for each of these. In the next few exercises we'll begin making the appropriate updates to our project to resolve these requests.

1. Return to the repository you created at the beginning of this workshop.
1. Select the **Issues** tab.
1. Select **New issue**.
1. Create new issues by adding the information indicated in the table below, selecting **Submit new issue** after creating each one (and using **New issue** to create a new one):

    | Title                          | Description                                                                    |
    | ------------------------------ | ------------------------------------------------------------------------------ |
    | Define codespace               | Create the necessary definitions for the codespace to enable cloud development |
    | Implement testing              | Create a workflow to automate testing for continuous integration               |
    | Add component to display hours | Create a new component for the project to display the shelter's hours          |
    | Create deployment environment  | Create a workflow to create deployment environment                             |
    | Implement automated deployment | Create a workflow to automate deployment for continuous delivery               |

    > **TIP:** You can also save an issue by pressing <kbd>Ctl</kbd> - <kbd>Enter</kbd> (or <kbd>Cmd</kbd> - <kbd>Return</kbd> on a Mac) in the title or description fields.

You've now defined all the issues for the workshop! You'll use these issues to help guide your progress through the workshop.

## Summary and next steps

GitHub Issues are the core to project management on GitHub. Their flexibility allows your organization to determine the best course of action to support your development lifecycle's methodology. With your issues created, it's time to turn your attention to the first big change to the project, [defining a codespace](3-codespaces.md).

## Resources

- [GitHub Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues)
- [Communicate using markdown](https://github.com/skills/communicate-using-markdown)
- [GitHub Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/quickstart-for-projects)
