# Index
[TOC]
## JSON schemas
- Jest [https://github.com/askirmas//jest.schema.json](https://github.com/askirmas//jest.schema.json)
- More at [template repo](https://github.com/askirmas/template/blob/master/.vscode/settings.json)
## Repositories overview

### template

https://github.com/askirmas/template

The purpose is to have a single source of configurations and stack extensions, applicable as here https://github.com/askirmas/test-/blob/master/package.json#L39-L41 for fast deployment/instantiation. 

### git-hooks-wrapper

https://github.com/askirmas/git-hooks-wrapper

Alternative to [husky](https://github.com/typicode/husky) with huge differences. 

### postcss-plugin-d-ts

https://github.com/askirmas/postcss-plugin-d-ts/

Solves the common issue of importing any CSS into Typescript (critical with CSS-modules) in a very strict and declarative way.

### ts-swiss

https://github.com/askirmas/ts-swiss

Fix typescript lib's issues and has many useful generics - much more than [utility-types](https://github.com/piotrwitek/utility-types)

### render-on-demand

https://github.com/askirmas/render-on-demand

DOM optimization: Render/Mount/Construct on demand via IntersectionObserver. One of useful scenarios – many tabs with thousands children in each as uncontrolled elements only.

### no-js

PureCss as KISS principle https://github.com/askirmas/no-js/

#### Resize bar

https://github.com/askirmas/no-js/tree/master/resizebar

Easy applicable and with information hiding ([don't intercharge with encapsulation](https://en.wikipedia.org/wiki/Information_hiding#Overview)) in case of events because resolved by browser. 

Demo for Chrome: https://askirmas.github.io/no-js/resizebar/demo.html. Firefox TBD

#### Minimal Material

https://github.com/askirmas/no-js/tree/master/minimal-material

I started recompiling Google's SASS implementation of Material Design to make it much easier to apply by pseudo-elements usage.

##### Material Ripple Effect

https://askirmas.github.io/no-js/minimal-material/sandbox/rippling.html

2nd and 3rd `<div> ` has the same CSS and with help of 1-line JS handler the 3rd has 'positioned' ripple effect.

### contracts

https://github.com/askirmas/contracts

Sort out in 1 place all known modellers like JsonSchema, TypeScript, MySQL, MongoDB, etc. Later, collect mapping tools.

# Further

- [Schema as Meta-programming](./schema-as-meta)

# Links (outdated)

| name | url  | Side | Keys |
| ---- | ---- | ---- | ---- |
|git-shell-scripts|https://github.com/askirmas/git-shell-scripts|cli|git|
|IDEs-scheming|https://github.com/askirmas/IDEs-scheming|cli|Schema|
|sandbox-json-css-ts|https://github.com/askirmas/sandbox-json-css-ts|front|sandbox|
|unit-test-json|https://github.com/askirmas/unit-test-json|cli|Metaprogramming|
|stateful-dom|https://github.com/askirmas/stateful-dom|front|Html Css|
|no-js|https://github.com/askirmas/no-js|front|Html Css|
|sandbox-js|https://github.com/askirmas/sandbox-js|module|sandbox|
|subscribers|https://github.com/askirmas/subscribers|full|sandbox|
|assoc|https://github.com/askirmas/assoc|module|Utils|
|ips_dashboard|https://github.com/askirmas/ips_dashboard|full|sandbox|
|json-program|https://github.com/askirmas/json-program|module|Metaprogramming|
|exchange|https://github.com/askirmas/exchange|server||
|json2react-project|https://github.com/askirmas/json2react-project|front|Metaprogramming|
|chat|https://github.com/askirmas/chat|full|sandbox|
|tab_manager|https://github.com/askirmas/tab_manager|front|Browser extension|
|workspaces|https://github.com/askirmas/workspaces|front|Browser extension|
|surfer_manager|https://github.com/askirmas/surfer_manager|front|Browser extension|
|marker|https://github.com/askirmas/marker|front|Browser extension|
