# Dnd Battle App
This small application has been build in order to better understand the concepts behing Angular JS 1.8.

_**Disclaimer:** I am well aware that Angular JS is no longer supported (2022)._

**Two main links have been followed:**
- [Official angular JS documentation](https://docs.angularjs.org/guide/services)
- [Extended tutorial](https://docs.angularjs.org/tutorial) within the documentation

Note that this next link was pretty usefull to understand [bindings](https://blog.krawaller.se/posts/dissecting-bindings-in-angularjs/)

## Start the app locally
Download the repo.
Make sure you have node JS installed (V6.17)
Two commands are needed to start the project.

`npm i`
Will install every packages + boostrap the application (creating the `app/lib` folders)

`npm start`
Will start the application and make it usable here: `http://localhost:8000/index.html`

## What could be better ? 
### Bootstrapping
Boostrapping of the application is probably legacy. An effort could be made there to avoid using that old method (found using the tutorial mentioned above).

For exemple: boostrapping still install old version of the framework Bootstrap while I decided to use the newest version using a CDN (see `index.html`). It will also install JQuery while I no use of it at the moment writting those lines.

_**Disclaimer:** again, idea behind this project was to go quick on angular JS principles. Angular JS being legacy, I did not wanted to lose too much time on its correct implementation._

### Code
#### Utility functions
Some functions could have been centralized as utility functions ( see `getColor() or getClasses()`).
I thought Angular JS services was the correct way to do it but did not succeed on implementing it.
#### Templating
Templating of the "Characters" page could have been more atomic but I was afraid of losing myself within scopes.
#### File oragnization
I tried to follow the idea of feature related folders while keeping flexibility of that small app. 
For example: centralize components as in `common.components.js` is probably not a good practice in modern Angular project but I found it convenient here to quickly understand how one module can be used accross the application (especially through the use of `<history />`)