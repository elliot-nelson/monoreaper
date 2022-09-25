---
title: Standardization
sidebar_position: 3
---
<img src="/img/venn-standardization.png" border="0" width="400px" style={{float:"right"}} />

The third pillar of a successful monorepo is _standardization_.

A little more introductory text could go here.

<div style={{clear:"both"}}></div>

## How?

How do we achieve standardization in a monorepo? Here are some concrete actions to take.

### Collapse dependency versions

Wherever possible, pick a _single version_ of each external dependency that exists in your monorepo, and have all projects in the repo use that version. When upgrading, upgrade all projects to the new version at the same time.

:::info Example
In a TypeScript monorepo, you might have multiple projects using Jest, but at several different versions.

You can increase standardization by consolidating on a single version, and then ensuring that future upgrades are applied to the entire monorepo at once, instead of one project at a time.
:::

### Pick one tool for each purpose

Watch for situations where each project is using a different test framework, or a different linter, or a different code formatter. In each category, choose one tool that will meet the needs of all projects in the monorepo, and then make that tool the standard.

:::info Example
In a TypeScript monorepo, you might find that most projects are using Jest for unit testing, but a couple projects are using Mocha, and one is using tape.

You can increase standardization by choosing one tool that meets the needs of all projects (in this case, probably Jest), and then converting all projects to use this tool.
:::

### Eliminate competing libraries

Within the projects in your monorepo, it's easy to end up with different external dependencies that serve the same purpose. Encourage developers in the monorepo to pick a single library and use that library for all projects.

:::info Example
In a Kotlin monorepo, you might have several projects that read and write JSON files, but half of them use `kotlinx.serialization` and half of them use `jackson`.

You can increase standardization by evaluating both options and choosing one, then converting all projects to use that library.
:::

## Why?

Standardization provides key benefits for monorepo maintainers and contributors. Let's take a look.

### Decreased friction

A truism in software engineering is that _writing code_ is fun and easy, but _reading and understanding code_ is hard. Building and maintaining a product requires more reading than it does writing, which means -- perhaps unintuitively -- focusing on the long-term _ease of reading_ of your code actually decreases friction and increases productivity for developers more than focusing on the short-term _ease of writing_ your code.

Standardization is a key way to increase readability:

 * When your projects use the same test framework, developers encountering a test failure in a project they haven't worked on can focus on the assertion being tested, instead of struggling with an unfamiliar test syntax.

 * When your projects use the same libraries (such as your json parser, or input schema validation, or image manipulation library), developers can carry their previous experiences with those libraries from project to project, instead of wasting time on new corner cases or porting code to use a different API.

 * When your projects have normalized on a single version of your linting tool and one set of linting rules, it's easier for developers to copy and paste useful snippets of code between projects. Cognitive load is reduced because you aren't constantly adjusting to a slightly different coding style in each project folder.

### Decreased maintenance cost

Once your monorepo is standardized, you can upgrade tools, frameworks, and libraries across the entire monorepo at once, instead of one project a time.

At first glance, it might seem like forcing a developer to upgrade Jest across 200 different projects, instead of just their project, is a very expensive and cumbersome operation. But, perhaps unintuitively, this approach can save days or _weeks_ of wasted developer time across your organization.

In a traditional microrepo model, each team would be responsible for upgrading their own projects, which takes perhaps 2-3 hours per project. Any issues, corner cases, and new patterns to implement are discovered anew on each team, and they'll each upgrade on their own timetable, which means engineers end up bouncing around between projects that are on the old and new version, requiring them to hold both sets of patterns in their head.

By contrast, in a monorepo, after a single engineer takes the time to convert a couple projects to a new version, they'll quickly discover all of the ins and outs of new patterns and corner cases. The time to upgrade a project drops from 2 hours to 30 minutes, then from 30 minutes to 5 minutes. Often, you can extrapolate an entire class of problem and fix them across all projects with a single codemod or search and replace.

Upgrading every project in a monorepo, getting it reviewed, and merging it, _does_ require more work than upgrading a single project; but, a single engineer can accomplish in 3 days what would otherwise take 20x the hours spread across months. All that extra time is spent doing real, productive work instead.

:::info Concepts
This is an example of [Pay your costs up front](../concepts/costs-up-front) in action.
:::
