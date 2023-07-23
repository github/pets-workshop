# Coding with GitHub Copilot as your AI pair programmer

Over the last several years we've seen the introduction of more powerful frameworks which allow us to create applications quickly and efficiently while programming has arguably become more complicated. We're deploying to complex environments. There's an increased learning curve for each new framework and language, with a growing collection of syntax we need to remember. And all of this while deadlines continue to shrink and requirements grow. It can be difficult to keep up as a developer, to stay in the zone, to be able to focus on what we love to do - create elegant solutions to difficult problems. GitHub Copilot is built to support us, to allow us to offload tedious tasks so we can pay attention to the bigger issues.

GitHub Copilot is a generative AI service trained on billions of lines of publicly available code and text. It synthesizes natural language prompts and code to generate suggestions of the next line or block of code, the next class or function you're hoping to implement. These suggestions are offered inline in the editor you're using allowing you to stay in the zone and be more efficient as a developer.

## Scenario

The shelter wants to add their hours to the webpage for the current day so people know when they can stop by to visit on that day. As this is something which could appear on multiple pages, it's best to create this as a [component](https://nextjs.org/learn/foundations/from-javascript-to-react/building-ui-with-components). For the time being, the component will be displayed solely on the homepage. To support the test, the output will be displayed in a `div` element with an id of `hours`.

> **IMPORTANT:** You do not need to have experience with Next.js to complete this exercise. A [solution file](../resources/solutions/Hours.js) is provided for you to use as a model or to simply copy.

### Store hours

| Day       | Hours         |
| --------- | ------------- |
| Monday    | 10:00 - 16:00 |
| Tuesday   | 10:00 - 16:00 |
| Wednesday | 10:00 - 16:00 |
| Thursday  | 10:00 - 16:00 |
| Friday    | 10:00 - 16:00 |
| Saturday  | 09:00 - 20:00 |
| Sunday    | 09:00 - 20:00 |

## Getting started with GitHub Copilot

GitHub Copilot is a cloud-based service offered for both individuals and businesses. As an individual, you can [sign up for a free trial](https://github.com/github-copilot/signup) of the service. After enrolling you will typically install the extension for your IDE, which is available for [Visual Studio](https://marketplace.visualstudio.com/items?itemName=GitHub.copilotvs), [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot), [NeoVIM](https://github.com/github/copilot.vim#getting-started) and the [JetBrains IDEs](https://plugins.jetbrains.com/plugin/17718-github-copilot). Because we'll be using the [codespace](./3-codespaces.md) you defined in the previous exercise, you won't need to manually install the extension - you did that when you configured the dev container!

> **IMPORTANT:** You can complete this exercise without GitHub Copilot by manually writing the code, or copying and pasting from the [provided solution](./resources/solutions/hours.js).

1. If you don't already have access to GitHub Copilot, [sign up for a free trial](https://github.com/github-copilot/signup).
1. In the [previous exercise](./3-codespaces.md) you configured your [devcontainer](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers) to automatically install the extension for GitHub Copilot, so you're all set and ready to go!

## Creating the component

In our scenario, we want to display the hours for the shop. While this might typically be pulled from a database, in our example we'll hard-code it. You'll start by creating the component, then adding it to the homepage. Let's explore how GitHub Copilot can help streamline the process.

GitHub Copilot makes suggestions based on the comments and code you add. You can describe what you want to build in a comment or begin creating the code, and GitHub Copilot can offer a potential solution or the next line(s) of code. Because GitHub Copilot is AI, it is probabilistic rather than deterministic, meaning you may notice you will see different suggestions at different times. The first big tip for working with GitHub Copilot is to be flexible; if you don't see what you'd expect the first time, update the comment or code to provide more context.

### Component structure

React/Next.js components are created by first importing `React` from the React library. They're then typically created as a function exported at the end of the file:

```jsx
import React from "react";

const ComponentName = () => {
    // logic

    return (
        <div>
            HTML content
        </div>
    )
}

export default ComponentName;
```

### The logic

As we'll be hard-coding the hours, it'll be best to store these as an array of objects. Each object can have the name of the day (a property called `day`), and properties called `open` and `close` to store the opening and closing hours respectively. This could be stored as a variable named `shelterHours`.

After creating the array, we'll need code to store the name of current day, stored in a variable named `today`. Then we can find the current day's hours from `shelterHours`, storing it in a variable named `todayHours`. Finally, we can return some HTML displaying the open and close hours.

## Creating the component with GitHub Copilot

Let's see how GitHub Copilot can help us quickly create the component.

1. Return to your open codespace. If you closed the browser window, return to your repository and select **Code** then your codespace.
1. In the **Explorer** window, navigate to **src** > **components**.
1. Open the existing **Hours.js** file.
1. Below the existing comment, add the code to import `React` from React and create a new component named Hours:

    ```javascript
    import React from "react";

    const Hours = () => {
        // add logic

    }

    export default Hours;
    ```

1. Below the comment you added `// add logic`, begin describing the array you wish to create using natural language. You could add a comment which looks like this:

    ```javascript
    // create an array called shelterHours with objects for shop hours
    // each object has a day for the day, open for opening and close for closing
    // the hours are Monday - Friday 10:00 to 16:00, and Saturday - Sunday 09:00 to 20:00
    ```

1. GitHub Copilot **should** begin making code suggestions. These will appear as grey italicized text similar to IntelliSense. To accept the suggestions, you can hit <kbd>Tab</kbd> on your keyboard. Continue to press <kbd>Tab</kbd> until you see the following code generated:

    ```javascript
    const shelterHours = [
        { day: "Monday", open: "10:00", close: "16:00" },
        { day: "Tuesday", open: "10:00", close: "16:00" },
        { day: "Wednesday", open: "10:00", close: "16:00" },
        { day: "Thursday", open: "10:00", close: "16:00" },
        { day: "Friday", open: "10:00", close: "16:00" },
        { day: "Saturday", open: "09:00", close: "20:00" },
        { day: "Sunday", open: "09:00", close: "20:00" }
    ];
    ```

    > **IMPORTANT:** As highlighted earlier, GitHub Copilot is AI, meaning it is probabilistic rather than deterministic. The code generated may be different than what appears here. You can make modifications as appropriate, such as adding more information to the comment to describe what you are looking to have created, or updating the generated code.

1. Immediately below the newly created array, add a comment to describe the creation of a variable named `today` to store the long name of today's date:

    ```javascript
    // get the long day name and store it in a variable named today
    ```

1. GitHub Copilot will likely suggest the following code, which you can accept by pressing <kbd>Tab</kbd>:

    ```javascript
    const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
    ```

1. Now that you have today's date, let's get the hours for today by asking GitHub Copilot to get them for us by adding a comment immediately below the newly created code:

    ```javascript
    // get today's hours
    ```

1. GitHub Copilot will likely suggest the following code, which you can accept by pressing <kbd>Tab</kbd>:

    ```javascript
    const todayHours = shelterHours.find(day => day.day === today);
    ```

1. Finally, ask GitHub Copilot to display today's hours:

    ```javascript
    // display todays hours in a div container with an id of hours
    ```

1. GitHub Copilot will likely suggest the following code line-by-line, which you can accept by pressing <kbd>Tab</kbd>:

    ```jsx
    return (
        <div id="hours">
            <h2>Today's Hours</h2>
            <p>{todayHours.day}: {todayHours.open} to {todayHours.close}</p>
        </div>
    );
    ```

1. You can now make any updates you might like to the resulting code. For example, you might want to update `<h1>` to be `<h2>` instead.

> **NOTE:** As highlighted, an example solution is provided for the [Hours.js](../resources/solutions/Hours.js) component.

## Add the Hours component to index.js

Let's finish out our coding by displaying the `Hours` component to **index.js**, which is the homepage.

1. In **Explorer**, open **src** > **pages** > **index.js**.
1. Under the comment which reads `// TODO: Import Hours component`, add the following code to import the `Hours` component:

    ```javascript
    import Hours from "../components/Hours";
    ```
    
    > **NOTE:** GitHub Copilot will likely make this suggestion automatically for you!

1. Under the comment which reads `{/* TODO: Display Hours component */}`, add the following code to display `Hours`:

    ```jsx
    <Hours />
    ```

Congratulations! You've now created a new component and added the code to the landing page to display it.

## Summary and next steps

All developers write code with some form of assistance. This might come from a human pair programmer, copying/pasting code from a developer forum or documentation, or, in our case, and AI pair programer - GitHub Copilot. With GitHub Copilot, developers are able to focus on the bigger tasks while GitHub Copilot provides suggestions and generates code.

With the code added, it's time to use the GitHub flow to [incorporate your changes into the code base](./6-github-flow.md).

## Resources
