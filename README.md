# Outpost design system

**NB this is a mono-repo!**

## Ports

| package               | command | port |
| --------------------- | ------- | ---- |
| `outpost--docs`       |         | 6001 |
| `outpost--primitives` |         | 6002 |
| `outpost--css`        |         | 6003 |
| `outpost--react`      |         | 6004 |
|                       |         |      |

## /packages/outpost--docs

The one that brings it all together

## /packages/outpost--primitives

This package contains a bunch of json files and assets to be exported and imported into all the other packages.

As a bonus it also includes a storybook with a docsPage detailing all the information to be imported into the mega storybook - to make our lives easier!

### Contents:

- [Eleventy](https://www.11ty.dev/docs/getting-started/) page
- [Design tokens](<https://www.figma.com/file/tVVtW6tHgghun8aY261M5z/Outpost-platform-(and-Scout-etc)?node-id=102%3A998>)

### TODO

- [ ] export `custom-viewports.js` file from here and use in the other storybooks

---

## /packages/outpost--css

Contains all the UI/UX and static views for the components, if you're needing plain HTML for components you'd go here.

### Contents:

- CSS styles
- [Storybook](https://storybook.js.org/)
- [Create a New React App – React](https://reactjs.org/docs/create-a-new-react-app.html) as a necessity to get storybook to behave!

### TODO

- [ ] Import Design tokens
- [ ] Get the scss working!!!
- [ ] export the css

---

## /packages/outpost--react

This is the react versions of the components

### Contents:

- CSS styles
- [Storybook](https://storybook.js.org/)
- [Create a New React App – React](https://reactjs.org/docs/create-a-new-react-app.html) as a necessity to get storybook to behave!

### TODO

- [ ] match the markup from `outpost--css`
- [ ] import the CSS
- [ ] standardise on storybook setups for the same components

---

## /packages/outpost--view-components

Might be an option? [Overview - ViewComponent](https://viewcomponent.org/)

---

## /packages/outpost--web-components

Just a thought!

---

### How tos

#### Create a new package

Dont for get to add it to the `package.json` under `workspaces` at the top of this repo.

```sh
mkdir outpost--x
cd outpost--x
yarn init
```

This will create a new storybook setup for basic html

```sh
npx sb init --type html
```

If you need javascript

```sh
npx create-react-app outpost--x
cd outpost--x
npx sb init --type react
```

#### Testing

WIP but my current thinking is that since the `outpost--css` package contains the css and a 'template.html' that we could keep the `semantic` `ui`, `ux` and any `accessibilty` tests in there.

Tests in `outpost--css` would be things like:

- the default top level component is a `div` with the classes `x`, `y` and `z` and the child nodes ones are `a`, `b`, `c`
- is this accessible in all its states
- what are all the possible options for this component

The tests defined in `outpost-css` should be able to run over every other library, meaning all we need to do is find a way to setup core interaction tests that we run over each version

**Pros**

- we can be super prescriptive about which selectors we're using, eg you must use h1 with this component
- keeping the tests in `outpost--css` means we can rapidly prototype and test, all html and nothing fancy

**Cons**

- there is no javascript in `outpost--css`, the html components are just there for validation.

### TODO's

- [ ] Export everything to npm packages!
- [ ] Linting
- [ ] Testing
- [ ] Theres a few storybook errors that have been copied accross while putting this together
- [ ] Need to make sure each storybook is standardised!
- [ ] get tmux script to load docs last
- [ ] setup allll the chromatics!

### Links

- [How Ruby and Web Components Can Work Together | Fullstack Ruby](https://www.fullstackruby.dev/fullstack-development/2022/01/04/how-ruby-web-components-work-together/)
- [When To Use React Instead Of Hotwire In Rails 7? - YouTube](https://www.youtube.com/watch?v=kgEX_GOGhYA)
- [How to Create and Export Web Components From a React Application](https://spin.atomicobject.com/2022/04/11/export-web-components/)
- [React vs. web components - LogRocket Blog](https://blog.logrocket.com/react-vs-web-components/)
- [Is there a tool for creating a UI Pattern Library in multiple frameworks? - DEV Community 👩‍💻👨‍💻](https://dev.to/ekafyi/is-there-a-tool-for-creating-a-ui-pattern-library-in-multiple-frameworks-3bk6)
- [Support Multiple Frameworks in a Monorepo - CSS-Tricks](https://css-tricks.com/make-a-component-multiple-frameworks-in-a-monorepo/)
