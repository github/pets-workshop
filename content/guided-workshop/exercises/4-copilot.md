# GitHub Copilot as your AI pair programmer

Over the last several years we've seen the introduction of more powerful frameworks which allow us to create applications quickly and efficiently while programming has arguably become more complicated. We're deploying to complex environments. There's an increased learning curve for each new framework and language, with a growing collection of syntax we need to remember. And all of this while deadlines continue to shrink and requirements grow. It can be difficult to keep up as a developer, to stay in the zone, to be able to focus on what we love to do - create elegant solutions to difficult problems. GitHub Copilot is built to support us, to allow us to offload tedious tasks so we can pay attention to the bigger issues.

GitHub Copilot is a generative AI service trained on billions of lines of publicly available code and text. It synthesizes natural language prompts and code to generate suggestions of the next line or block of code, the next class or function you're hoping to implement. These suggestions are offered inline in the editor you're using allowing you to stay in the zone and be more efficient as a developer.

As highlighted earlier, we want to update the application to add a new component to display the shelter's hours. Let's see how we can get support from GitHub Copilot to quickly implement the updates.

## Getting started with GitHub Copilot

GitHub Copilot is a cloud-based service offered for both individuals and businesses. As an individual, you can [sign up for a free trial](https://github.com/github-copilot/signup) of the service. After enrolling you will typically install the extension for your IDE, which is available for Visual Studio, Visual Studio Code, NeoVIM and the JetBrains IDEs. Because we'll be using the [codespace](./3-codespaces.md) you defined in the previous exercise, you won't need to manually install the extension - you did that when you configured the dev container!

> **IMPORTANT:** You can complete this exercise without GitHub Copilot by manually writing the code, or copying and pasting from the [provided solution](./resources/solutions/hours.js)

1. If you don't already have access to GitHub Copilot, [sign up for a free trial](https://github.com/github-copilot/signup).

## Creating the component

GitHub Copilot makes suggestions based on the comments and code you add. You can describe what you are looking to build in a comment, and GitHub Copilot can offer a potential solution. Because GitHub Copilot is AI, it is probabilistic rather than deterministic, meaning you may notice you will see different suggestions at different times. The first big tip for working with GitHub Copilot is to be flexible; if you don't see what you'd expect the first time, update the comment or code to provide more context.

In our scenario, we want to display the hours for the shop. While this might typically be pulled from a database, in our example we'll hard-code it.