# Automation

Chances are you've heard the abbreviation CI/CD, which stands for continuous integration and continuous delivery (or sometimes continuous deployment). This has become the most focused upon component of DevOps. But exactly what is CI/CD? Why the heavy investment in CI/CD? Is this all there is to DevOps and automation?

As it turns out, there's a lot more to managing code and streamlining the development process than ensuring our code builds, our tests pass, and we're able to push to production. Teams benefit from automating as much of the development process as possible and eliminating manual operations. By introducing integrated automation you help keep your developers in the flow, reduce the number of tools which need to be managed, and limit the chances processes will be skipped.

## Introducing CI/CD

> Having a good CI/CD pipeline is key to the success of an organization's DevOps processes. It just doesn't start and stop with CI/CD.

If you're not already familiar with CI/CD, it stands for, as mentioned above, continuous integration and continuous delivery. While the two terms are oftentimes used interchangeably, they are two separate parts of a closely related process.

CI involves incorporating new code into the existing codebase. Since new code can introduce new bugs or errors, you need to ensure the existing code isn't impacted and the new code behaves as expected. This is done by creating an automated build process with a robust set of tests, which will prevent the merging of code which fails.

CD is the next step, when the updated code is pushed to a release branch and in turn deployed to staging or production. By automating the CD process you are able to push updates faster, allowing your organization to be more nimble in responding to customer requests. A good CD process will involve running validation tests on production, allowing for quick rollback in the event of errors, and reducing downtime as updates are pushed.

## The importance of automation

Studies have shown it takes over 20 minutes for a developer to get back in the groove after an interruption, and can be far greater for someone who's neurodiverse. Development in today's world doesn't solely involve a code editor and a build process. There may be machine learning models to validate, images to resize and generate thumbnails for, and issues to be updated as changes are made.

Well designed automation can reduce the number of manual tasks required of developers. This improves productivity and happiness, reduces the number of tools one needs to learn, and mitigates the possibility of errors or bypassed processes.

## GitHub Actions and workflows

[GitHub Actions](https://github.com/features/actions) is built into GitHub, and allows you to create workflows to automate any process involved in your development lifecycle. You can use GitHub Actions to resize images when pushed into a repository, run your build and test process, deploy your code to production, update issues, and a near limitless set of tasks.

You define the process to be automated by creating a [workflow](https://docs.github.com/actions/using-workflows/about-workflows). A workflow can run a series of tests, call a web service, or perform other tasks, either through the use of a [GitHub Action](https://docs.github.com/actions) or a custom script. Workflows run in response to a host of [triggers](https://docs.github.com/actions/using-workflows/triggering-a-workflow) which can include the creation of a PR, the closing of an issue, a new commit being pushed to a branch, manually or on a schedule.

A workflow consists of one or more [jobs](https://docs.github.com/actions/using-jobs/using-jobs-in-a-workflow) which indicate the steps or scripts to run as part of the workflow. Steps identify the action or script to run. Steps inside of a job are run sequentially, while jobs are run in parallel. You can create dependencies between jobs to ensure jobs are run in the correct order. Jobs also support variables and conditional logic to make them dynamic.

Each step performs the desired operations. This could be calling an action from the [Actions marketplace](https://github.com/marketplace?type=actions), a [script defined in the workflow](https://github.com/marketplace/actions/github-script), or a [custom action](https://docs.github.com/actions/creating-actions) your team creates.

As highlighted earlier, workflows are able to perform any tasks necessary to your repository. Updates can be made to the repository, issues can be created, PRs updated, web services called, or other external operations.

## How workflows are structured

Workflows are defined in a special folder `.github/workflows`, and are defined as [YML](https://en.wikipedia.org/wiki/YAML) files. They become just as much of the repository as code files or other resources. This means all the version management and branch protection rules apply to the definitions of your workflows as they would any other file. This allows changes and updates to be tracked, and testing to be performed on development branches before being merged into the default or main branch.

> Storing the workflow definitions as part of the repository is commonly referred to as "config-as-code". Config-as-code ensures regardless of where your repository is cloned or forked to in the future it will retain the same configuration, which offers consistency and accountability across a project's lifetime.

### Workflow definitions

> **NOTE** The syntax for GitHub workflows is flexible; there are often multiple ways to define the same triggers or other configuration options. This provides teams additional control over their workflows. The syntax used below is just one way you could define a workflow.

As highlighted before, workflows are defined in YML files created in the `.github/workflows` folder. While workflow YML files have no name restrictions, it's best to use a name which defines tasks the workflow will perform.

A workflow's YML file starts with the following:

```yml
name: name-of-the-workflow
```

`name` defines the name of the trigger, and will appear in the logs and Actions screen for your repository.

### Triggers

The `on` section of a workflow definition lists the triggers which will cause the workflow to run. A workflow can run for an unfiltered single event such as a **push**:

```yml
on: push
```

Or for **push** and **fork**:

```yml
on: [push, fork]
```

However, these types of triggers are typically too vague. You will often want to limit a workflow's execution to specific branches or types of assets. One of the most common triggers is to run a deployment script for CD when a push takes place on the default or main branch. You can create this trigger by using the following syntax:

```yml
on:
  push:
    branches:
      - main
```

Notice the YML syntax lists `branches` as a child of `push`. The workflow will now only run for a push on the listed branches. There are several [filters](https://docs.github.com/actions/using-workflows/triggering-a-workflow#using-filters) available to ensure workflows only run when desired.

> **NOTE** There are [numerous triggers available](https://docs.github.com/actions/using-workflows/events-that-trigger-workflows) for defining when a workflow will run flexible. This allows your team to ensure workflows are run at the correct time.

#### Jobs

The unit of work in a workflow is a job. The job identifies [where the tasks will be run](https://docs.github.com/actions/using-jobs/choosing-the-runner-for-a-job) and the tasks to be performed. By default jobs run in parallel, meaning they run at the same time. If you need to define the order of jobs you can create dependencies to ensure execution is done in serial.

Each job has a name, which as you might expect defines the name of the job. Also as you might expect, it's always best to use names which clearly define what the job will do.

```yml
jobs:
  job-name:
  another-job-name:
```

If one job depends on another, [define relationships](https://docs.github.com/actions/using-jobs/using-jobs-in-a-workflow) with the keyword `needs`. `needs` creates a dependency chain, ensuring jobs are run in the correct order.

```yml
jobs:
  job-name:
  another-job-name:
    needs: job-name
```

#### Runners

Each job has a runner, which is the container or machine on which they will execute. While you are free to [host your own runners](https://docs.github.com/actions/hosting-your-own-runners/about-self-hosted-runners), most organizations use [GitHub hosted runners](https://docs.github.com/actions/using-github-hosted-runners/about-github-hosted-runners). The advantage to a GitHub hosted runner is GitHub maintains the environment allowing your organization to focus on creating applications. GitHub hosted runners support multiple versions of Ubuntu, Windows Server and macOS Server. You define the runner you wish to use with `runs-on`.

```yml
jobs:
  job-name:
    runs-on: ubuntu-latest
```

#### Steps

`steps` defines the, well, steps the job will perform. Each step has a name and a definition which configures the task to be performed. Each step can run shell commands or call actions, such as those from the [marketplace](https://github.com/marketplace?type=actions) or ones created by your organization.

The `uses` option identifies the action a step should call. The action is identified by `vender/name@version`.

> **IMPORTANT** The version allows you to "pin" your workflow to a specific version of an action. This ensures the action code which is run is the code you expect.

One of the most common steps in a job is `actions/checkout`, which checks out the code. This would be the first step before running unit tests, installing packages, or deploying your project.

```yml
steps:
- name: Checkout code
  uses: actions/checkout@v3
```

Steps can also run scripts or other commands by using `run`. For example, you could run `npm install` after setting up Node. Fortunately, there's an action already built-in for setting up node, which you can call with `uses`!

```yml
steps:
- name: Checkout code
  uses: actions/checkout@v3
- name: Setup node
  uses: actions/setup-node@v3
  with:
    node-version: 14
- name: Install packages
  run: npm install
```

### Variables and parameters

The last example introduced a new keyword: `with`. `with` allows the passing of parameters to an action. This could be a version number (such as the version of node in the prior example), credentials to be used to perform a task, or other configuration. As demonstrated, `with` can use literals such as numbers and strings, or you can pass in variables.

There are a set of [built-in environment variables](https://docs.github.com/actions/learn-github-actions/environment-variables#default-environment-variables) which provide information about the repository. Workflow specific variables can be defined under the `env` heading in the YML.

Referencing variables is done by using `${{ env.NAME }}`.

```yml
on:
  push:
    branches:
      - main

env:
  NODE_VERSION: 14

jobs:
  install:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout code
      uses: actions/checkout@v3
    - name: Setup node
      uses: actions/setup-node@v3
      with:
        node-version: ${{ env.NODE_VERSION }}
    - name: Install packages
      run: npm install
    - name: Run tests
      run: npm run test
```

#### Managing sensitive information with secrets

Environment variables are stored as part of the YML file, meaning they are in clear text as part of the repository. As you might suspect, storing sensitive values in clear text isn't a good idea.

To  manage sensitive values you can create [secrets](https://docs.github.com/actions/security-guides/encrypted-secrets). Secrets can be used for tokens to access external services or connection strings. Secrets are stored as write-only in the GitHub interface, meaning the value can be changed but not read.

Every repository has one [predefined secret called `GITHUB_TOKEN`](https://docs.github.com/actions/security-guides/automatic-token-authentication). `GITHUB_TOKEN` is used to provide access to the repository, and can be required by actions which need to update or modify the repository.

Referencing variables is done by using `${{ secrets.NAME }}`, where `NAME` is the name of the secret you create.

> **NOTE** Secrets can be used to store personal access tokens (PATs) for deploying to cloud providers or other hosts. However, managing PATs can introduce additional overhead, especially if a key is leaked. When configuring deployment you should consider using [OpenID Connect](https://docs.github.com/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)

### Matrix strategy

It's common to need to perform operations against multiple operating systems or framework versions to ensure compatibility. This can be done by [using a matrix](https://docs.github.com/actions/using-jobs/using-a-matrix-for-your-jobs). A matrix is an array defined in the workflow under the `strategy` heading, and tells the step to perform once for each option.

```yml
on:
  push:
    branches:
      - main

jobs:
  install:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [10.x, 12.x, 14.x, 15.x]

    steps:
    - name: Checkout code
      uses: actions/checkout@v3
    - name: Setup node
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
    - name: Install packages
      run: npm install
    - name: Run tests
      run: npm run test
```

## Common scenarios

Actions can be used to automate any process. Certainly the most common is testing and deployment, but you can create actions to validate ML models, resize images or perform other tasks.

### Build and test

- [Node.js](https://docs.github.com/actions/automating-builds-and-tests/building-and-testing-nodejs)
- [Python](https://docs.github.com/actions/automating-builds-and-tests/building-and-testing-python)
- [.NET](https://docs.github.com/actions/automating-builds-and-tests/building-and-testing-net)
- [Java with Maven](https://docs.github.com/actions/automating-builds-and-tests/building-and-testing-java-with-maven)

### Deployment

- [Amazon ECS](https://docs.github.com/actions/deployment/deploying-to-your-cloud-provider/deploying-to-amazon-elastic-container-service)
- [Azure](https://docs.github.com/actions/deployment/deploying-to-your-cloud-provider/deploying-to-azure)
- [Google Kubernetes Engine](https://docs.github.com/actions/deployment/deploying-to-your-cloud-provider/deploying-to-google-kubernetes-engine)

## Next steps

GitHub Actions is both powerful and flexible, enabling automation across your organization's development lifecycle. A [marketplace of over 14,000 exists](https://github.com/marketplace?type=actions), providing a set of ready-made resources for constructing your own workflows. [Reusable workflows](https://docs.github.com/actions/using-workflows/reusing-workflows) can be created to enable reuse. Any operation which can be automated should be, as it keeps your developers in the flow, ensures compliance with regulations, reduces errors and enhances productivity.
