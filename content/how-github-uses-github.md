# How GitHub uses GitHub

GitHub is built on GitHub. We use our own tools to create new tools, features and products. This has driven us to take a developer-first approach to everything we do, to ensure our products aid productivity and the development lifecycle.

As your organization is getting started with GitHub, and potentially DevOps, it's best to start with a good foundation. It's best to adapt and modify for your organization's specific needs once you have established a base. While some of this might be review, the goal is to provide insights into how to manage your processes and practices by exploring how we at GitHub use GitHub.

## Core DevOps

DevOps is "the union of people, processes, and products to enable the continuous delivery of value to our end users." The goal is to build the right things the right way for the right reasons.

A typically DevOps flow is broken into five main stages:

1. Plan: Determine what is to be built, by whom, and on what timeline.
2. Develop: Build the features to be built.
3. Collaborate: Review the newly built features.
4. Deliver: Release the newly built features.
5. Operate: Monitor the newly built features and identify new features to be built.

GitHub offers solutions for all stages of the DevOps lifecycle, with tools to integrate and streamline the process, and make it continuous.

## Breaking down the DevOps lifecycle

### Plan

In GitHub, new features typically start with a [discussion](https://docs.github.com/discussions). Discussions are a great place for open conversations about new features, what should be built, and why. More importantly, they provide an archive of the decisions made and how they were reached. We have a saying at GitHub: "URL or it didn't happen." Having robust discussions documented allows teams to learn from the past and hopefully avoid repeating a mistake.

From there, [issues](https://docs.github.com/issues/tracking-your-work-with-issues/about-issues) are created. Each issue identifies what's to be build and by whom. They are typically linked to a [branch](https://docs.github.com/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches) and eventually a [pull request](https://docs.github.com/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests).

Issues are planned and managed in [projects](https://docs.github.com/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects). Projects allow teams to identify backlogs and schedules, and to track progress. When doing daily stand-ups, a best practice is to "walk the board" to identify the current state of each issue.

### Develop

Every popular IDE has plugins for GitHub, allowing developers to quickly [clone repositories](https://docs.github.com/repositories/creating-and-managing-repositories/cloning-a-repository), [pull](https://github.com/git-guides/git-pull) and [push](https://github.com/git-guides/git-push) updates to code.

However, the development process isn't limited to solely writing and managing code. Developers need to install various packages and ensure a consistent environment to avoid "it runs on my machine" situations. [GitHub Codespaces](https://docs.github.com/codespaces/overview) provides teams the ability to define a container which runs in the cloud for developers to use. Devs can connect to the container using a browser-based version of Visual Studio Code, the desktop version of Visual Studio Code, Visual Studio and JetBrains.

> GitHub developers use GitHub Codespaces regularly. Through the use of [prebuilds](https://docs.github.com/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds) the GitHub.com monolith spins up in 30 seconds

### Collaborate

The [pull request (PR)](https://docs.github.com/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) is part of the way of life at GitHub. Everyone is encourage to not just file issues or suggest changes for their own team's projects, but for projects across the enterprise. The PR is the center of this philosophy.

When a PR is filed teams are encouraged to [review the updates and provide feedback](https://docs.github.com/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews). You can create PR templates to ensure the proper information is provided with a PR, such as a link to an issue or steps which need to be followed. [Status checks](https://docs.github.com/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks) can be defined to ensure tests pass and other quality metrics are met before changes are merged into your codebase.

### Deliver

CI/CD is a popular buzzword in DevOps. CI/CD is focused around continually updating and improving your products. Continuous Integration (CI) is focused on bringing updates into your codebase while Continuous Deployment targets deploying new features. The key to a successful CI/CD implementation is validation and automation.

Validation is part of the PR lifecycle, and is managed by the status checks defined. Automation ensures the processes required for status checks, deployments and other tasks are executed without developer intervention. When a developer needs to open a different tool or manually run a process it takes them out of the flow, meaning lost productivity and the possibility tasks will be skipped.

[GitHub Actions](https://docs.github.com/actions) allows you to define workflows which execute in response to various triggers, including a PR being created, code being committed, or an issue being filed. GitHub Actions can run tests, perform different operations, and deploy your code.

### Operate

Once a feature is deployed, your team will use various tools to monitor your applications to detected problems. You can use [GitHub's APIs](https://docs.github.com/rest) to create issues should problems arise. Additionally, GitHub Actions can run in response to webhooks, allowing you to flag bugs or identify failed deployments.

## Lessons from the Open Source community

Most Open Source Software (OSS) OSS projects are maintained by a set of contributors with various backgrounds and skill-levels, and are geographically distributed. Many contributions come from people who view OSS as a side project. The practices developed by the OSS community to support contributors can be applied to internal development as well. This process is typically referred to as InnerSource.

While a full conversation about InnerSource is beyond the scope of this session, InnerSource places an emphasis on:

- asynchronous communication as the default.
- filing PRs for changes for all projects.
- filing PRs early and often, keeping PRs small.
- searching for code to reuse before creating new code.
- making repositories public by default.
- encouraging collaboration across teams.

GitHub follows these practices internally. This helps avoid group-think, ensures developers have the flexibility to contribute on a schedule which works best for them, and offers everyone the opportunity to contribute.

## Getting started with GitHub Enterprise

GitHub Enterprise includes the core features of GitHub like repositories and issues, and a suite of other tools for companies and enterprises. This is the kickoff of a series of engagements where we will explore GitHub. As a result, our focus for today will be your organization's first steps with GitHub.

### Managing users and permissions

As you might expect, to access GitHub a user needs an account. There are two main ways to create and manage accounts on GitHub: SAML single sign-on (SSO) and Enterprise Managed Users (EMUs). With SSO accounts, users use their normal GitHub accounts which are then linked to a company account using an identity provider (IdP) such as Okta or Azure Active Directory (AAD). Enterprise Managed Accounts are new accounts created for users tied directly to their company accounts.

EMUs have [several restrictions](https://docs.github.com/enterprise-cloud@latest/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users#abilities-and-restrictions-of-managed-user-accounts), such as not being able to contribute to projects outside of their enterprise. However EMUs offer greater security by creating a walled garden for your GitHub Enterprise (GHE) cloud and tying permissions directly to your users' company accounts. The choice between SSO and EMU depends on the sensitivity of the projects you're creating and the desire for users to contribute to projects outside of your company.

Applying permissions to individual users is leads to increased management overhead. GitHub allows you to group together users through the use of [teams](https://docs.github.com/organizations/organizing-members-into-teams/about-teams). A team is a group of users, and can be used to provide access to resources.

Access to repositories is managed through [roles](https://docs.github.com/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization). These roles range from Read, which allows users only to read the contents of a repository, to Admin, which can perform all actions on a repository including deleting it! When using GitHub Enterprise you also have the option to create [custom roles](https://docs.github.com/enterprise-cloud@latest/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization) depending on the level of permissions required.

#### How GitHub manages accounts

- Multi-factor authentication (MFA or 2FA) is **required** for all accounts.
- Use teams rather than granting permissions to individual accounts.
- GitHub uses SSO for most projects, while deploying EMUs for ones of greater sensitivity.
- Apply the principle of [least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege).

### Repositories

A [repository](https://docs.github.com/repositories/creating-and-managing-repositories/about-repositories) contains the files, metadata and history of a project. More than just a location for files, repositories have [issues](https://docs.github.com/issues/tracking-your-work-with-issues/about-issues) and [projects](https://docs.github.com/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) for managing work items and documenting changes, [discussions](https://docs.github.com/discussions) for providing commentary about the direction of the project, and all versions of all files both past and present.

> There's a saying inside GitHub, "URL or it didn't happen." Having a robust history in issues, discussions and PRs allows teams to see where a project was and where it's going. It serves as a guide of what's been tried, what hasn't been tried, and why those decisions were made. The answers provided by this archive can help ensure past mistakes aren't repeated and an understanding of how a project arrived at its current state.

#### How GitHub manages repositories

- As a general rule, mono-repositories should be avoided. Large repositories become unwieldy to manage over time.
- Because permissions can only be granted to a repository and not individual folders or files, repositories should be created based around security requirements.
- Defaulting a repository to being available to your entire organization rather than an individual team encourages discovery, collaboration and code reuse.
- Automate as many tasks as possible.

> There are numerous ways in which repositories can be structured, and there isn't necessarily one "right way". Different teams will use different techniques based on what they're building, their team's culture and approach, and how projects will be deployed.

### Project management in GitHub

> A full conversation about project management is beyond the scope of this workshop. This section is designed to serve as an introduction to the functionality available in GitHub. How your organization chooses to use the features will vary.

[GitHub Projects](https://docs.github.com/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) allows teams to track, manage and plan projects. You can identify sprints, manage the backlog and status of issues, assign work, and view reports.

Projects can span multiple repositories. As a result, you can manage projects at a higher level, and structure your repositories to best support your team and what is being built. GitHub Projects are lightweight, offering you the flexibility to use them as your team sees fit.

Issues are created in a repository. You can create [issue templates](https://docs.github.com/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository) to provide structure to issues and ensure the required information is documented.

Issues can be tagged with [labels](https://docs.github.com/issues/using-labels-and-milestones-to-track-work/managing-labels), which allows for ad-hoc grouping. Labels can be used to identify features, projects, or other categorizations. Labels can then be used for quick filtering and searching, and to create views. Because search criteria is part of the query string, you can bookmark and share filtered views.

#### How GitHub uses Projects to manage projects

- Use the README to document the project.
- Create an issue for every suggested change to a repository. This provides a better history and enables project management.
- Encourage all developers and other contributors to provide as much information as possible in an issue. There's no such thing as "too much documentation."
- Have a single source of truth. If you are using other tools for project management, settle on one.
- Automate projects and issue management. Automation can apply labels, manage states, or transition issues.
- Use labels to tag not just the type of work being done but other metadata such as, "Good first issue", "Documentation", "Urgent", and "Nice to have". This helps developers from other teams understand what issues need attention or would be good first items to work on.

### Forks and branches

A [branch](https://docs.github.com/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches) is a version of a codebase. All repositories have one default branch, typically called **main**. New branches are created as new versions are required to introduce and test changes before merging them back into another branch or into the default branch. Branches exist in the repository in which they are created.

A [fork](https://docs.github.com/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks) is a point-in-time copy of an entire repository into a different account or organization, such as the developer's user account. By creating a fork a developer or set of developers are able to make changes without impacting the original source code. Changes can be merged back into the original repository through the use of a pull request.

#### How GitHub uses forks and branches

- Always start by creating a branch or a fork; never edit or push directly to main.
- Forks are great for individual exploration or inviting external collaborators.
- Branches are great for collaboration and exploration by the current project team.

### Pull requests

A pull request (PR) is a request for someone to pull your changes into a repository. The PR is the core to collaboration in GitHub. The normal workflow for modifying content of a repository is as follows:

1. Create an issue to document the desired changes you wish to see.
2. Create a fork or branch to use for adding or modifying the necessary code.
3. Create a pull request from the fork or branch into the original branch.
4. Request code reviews, and make updates as needed.
5. Automated tests, security checks and other validators run as part of the [Actions](https://docs.github.com/actions) you associate with the repository.
6. Once all checks are completed and everyone signs off on the changes, the pull request is merged into the original repository.

The PR acts as a complete archive of the change. It includes the changes made, feedback provided by reviewers, and the results of validation and other automated jobs. PRs provide a history of all changes, and offer teams the ability to determine when and why changes were made. They also streamline reverting back to previous versions when necessary.

#### How GitHub uses pull requests

- Your PR history provides a great archive of your project.
- PR the change you want to see! If a package or project doesn't behave the way it should, create a PR with the necessary updates.
- Keep PRs small and frequent. It's far easier to manage and merge in smaller PRs than larger ones. Larger PRs are also susceptible to scope creep.
- It's OK not to accept a PR. Sometimes the goal of a PR is to explore alternate routes. Sometimes the changes requested aren't appropriate for the project.
- Automate as much of your process as possible with [GitHub Actions](https://docs.github.com/actions).

### Protected branches

Submitting a PR typically has a set of requirements which must be met before the code can be merged. Enforcing these rules is handled through a [protected branch](https://docs.github.com/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches). A protected branch can identify several requirements, including at least one reviewer has signed-off on the changes, specific validations have run, and if the rules apply to administrators.

> GitHub uses protected branches internally for the main or central branch of almost every repository.

#### How GitHub uses protected branches

- Almost every repository's central or main branch is protected.
- Rules such as code coverage, tests passing, and other validations are implemented through protected branches and GitHub Actions.

## Next steps

The best time to get started with the new tools available to you is now! Begin by creating and configuring accounts for your users. Create a project to manage the development process. Determine the structure for your repositories and begin creating them. Define the rules for PRs and configure protected branches.

As your team begins using GitHub you'll learn more about what's available and have more questions. This is the first of a series of onboarding events to help you get the most out of GitHub and improve the productivity of your developers. You can reach out to your representative with questions, and join us for our next event to dig deeper into everything GitHub has to offer.
