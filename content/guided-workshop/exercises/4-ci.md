# Continuous integration and testing

Chances are you've heard the abbreviation CI/CD, which stands for continuous integration and continuous delivery (or sometimes continuous deployment). This is probably the most focused upon component of DevOps. But exactly what is CI/CD? Why the heavy investment in CI/CD? Is this all there is to DevOps and automation?

As it turns out, there's a lot more to managing code and streamlining the development process than ensuring our code builds, our tests pass, and we're able to push to production. Teams benefit from automating as much of the development process as possible and eliminating manual operations. By introducing integrated automation you help keep your developers in the flow, reduce the number of tools which need to be managed, and limit the chances processes will be skipped.

## Introducing CI/CD

> Having a good CI/CD pipeline is key to the success of an organization's DevOps processes. It just doesn't start and stop with CI/CD.

If you're not already familiar with CI/CD, it stands for, as mentioned above, continuous integration and continuous delivery. While the two terms are oftentimes used interchangeably, they are two separate parts of a closely related process.

CI involves incorporating new code into the existing codebase. Since new code can introduce new bugs or errors, you need to ensure the existing code isn't impacted and the new code behaves as expected. This is done by creating an automated build process with a robust set of tests, which will prevent the merging of code which fails.

CD is the next step, when the updated code is pushed to a release branch and in turn deployed to staging or production. By automating the CD process you are able to push updates faster, allowing your organization to be more nimble in responding to customer requests. A good CD process will involve running validation tests on production, allowing for quick rollback in the event of errors, and reducing downtime as updates are pushed.