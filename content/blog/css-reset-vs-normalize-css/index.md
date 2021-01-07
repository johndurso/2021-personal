---
title: CSS Reset vs. Normalize CSS
date: "2020-12-16"
description: When starting a website or application build, it's best practice to bring in a "pre-built" stylesheet that will allow you to start building your own stylesheets without any interference from styling defaults across each browser. There's a difference between Normalize and Reset, so which choice is best for your case?
---

<img src="dog-icon.png">

## What does CSS Reset/Normalize CSS do?

[CSS Reset](http://meyerweb.com/eric/tools/css/reset/) and [Normalize CSS](https://necolas.github.io/normalize.css/) remove all of the default styling applied to [block elements](https://www.w3schools.com/htmL/html_blocks.asp) so there are no inconsistencies across browsers. You cannot go wrong using either, but let's dive deeper into each resource and identify the difference between the two.

### CSS Reset

CSS Reset was [created by a wonderful person named Eric Meyer](http://meyerweb.com/eric/thoughts/2007/04/18/reset-reasoning/) back in 2007. Since then, it has been featured in many CSS frameworks including Google's own [BlueprintCSS](http://www.blueprintcss.org/). It is *very* basic, spanning only 42 lines of code before being [minified](https://cssminifier.com/). CSS Reset removes **all** padding, margin, border, and list styles from all block elements. It also reduces the `font-size` back to the default size of 16px (or 1em). That's it! While CSS Reset is great, it was built over a decade ago and stop receiving updates in 2013. Normalize CSS has a more *modern* solution to browser inconsistencies.

### Normalize CSS

Right out of the gate, you will notice that [Normalize CSS](https://necolas.github.io/normalize.css/latest/normalize.css) has more than 4x the amount of code than CSS Reset (179 lines of code vs. CSS Reset's 42). That's not a bad thing in this case. The file size may be *slightly* larger, but that's because Normalize CSS does more work and produces better results. Normalize CSS does all of the things that CSS Reset does, except you don't have to start from scratch! It will fix any browser inconsistencies, while still maintaining useful element styling. On top of doing a more thorough job, Normalize CSS's author [Nicolas Gallagher](https://github.com/necolas) did a wonderful job including detailed comments in the documentation.

**Helpeful tip: you can install Normalize CSS for any of your projects using `npm install normalize.css`.**

### So what do I use?

First, I'd like to ask you what your use case is -- are you building your own CSS framework, or are you building an application for a client? If you're building your own CSS framework, it is safe to go with either. CSS Reset will provide you with a truly barebones start so you can make your stylesheets your own.

If you're building an application for a client, or even yourself, go with Normalize! Don't reinvent the wheel. Normalize shaves away time that you would spend getting things *just* right in each browser.

### Moving forward

First came CSS Reset.<br>
Then came Normalize CSS.<br>
**Next up is [CSS Remedy](https://github.com/jensimmons/cssremedy).**

Brought to you by the wonderful folks on the Mozilla Developer team, CSS Remedy focuses on overriding a browser's [User Agent Stylesheet](https://meiert.com/en/blog/user-agent-style-sheets/) if CSS were written in the modern era. Unfortunately at this time, CSS Remedy isn't quite ready for mass implementation. Additionally, there will be no support for IE10 or lower.