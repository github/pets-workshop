# Code snippets

## Testing action

```yml
name: End-to-end tests
on:
  push:
    branches: ["main"]
  pull_request:
    branches: ["main"]
jobs:
  cypress-run:
    runs-on: ubuntu-20.04
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      # Install NPM dependencies, cache them correctly
      # and run all Cypress tests
      - name: Cypress run
        uses: cypress-io/github-action@v5
        with:
          build: npm run build
          start: npm run start
          project: ./src
        env:
          MONGODB_URI: test
```

## Custom action

## package.json

```json
{
  "dependencies": {
    "@actions/core": "^1.9.1",
    "@actions/github": "^5.0.3"
  },
  "devDependencies": {
    "@vercel/ncc": "^0.34.0"
  },
  "scripts": {
    "build": "ncc build index.js --license licenses.txt"
  }
}
```

## Logic index.js

```javascript
const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  try {
    // get GitHub token
    const token = core.getInput("repo-token", { required: true });
    const octokit = github.getOctokit(token);
    const { context } = github;

    // get the current pr
    const pr = context.payload.pull_request;
    console.log(pr.title);
    
    // create an issue for pr
    console.log("Creating issue for PR");
    const issue = await octokit.rest.issues.create({
      owner: context.repo.owner,
      repo: context.repo.repo,
      title: pr.title,
      body: pr.body,
    });
    // add comment to PR
    console.log("Adding comment to PR");
    await octokit.rest.issues.createComment({
      owner: context.repo.owner,
      repo: context.repo.repo,
      issue_number: pr.number,
      body: `Issue created: ${issue.data.html_url}`,
    });
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
```

## action.yml

```yml
name: 'Create issue'
description: 'Greet someone and record the time'
inputs:
  repo-token:
    description: 'GitHub Token'
    required: true
runs:
  using: 'node16'
  main: 'dist/index.js'
```

## .gitignore

```bash
node_modules
```

## Script to build and deploy

```bash
npm run build
git add .
git commit -m "Initial commit"
git tag -a -m "My first action release" v1.0
git push --follow-tags
```

## Use the workflow

```yml
on: [pull_request]

jobs:
  create_issue:
    runs-on: ubuntu-latest
    name: Create issue
    steps:
      # To use this repository's private action,
      # you must check out the repository
      - name: Checkout
        uses: actions/checkout@v3
      - name: Create issue
        uses: <YOUR_HANDLE>/<YOUR_REPOSITORY>@v1.0 # Uses an action in the root directory
        id: create-issue
        with:
          repo-token: ${{ secrets.GITHUB_TOKEN }}
```
