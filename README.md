# arms-dev-v1.0

> Assisted Reproductive Management System for TMUH

## Develope Environment Setup
# Initial vue webpack arms-dev-v1.0
vue init webpack  arms-dev-v1.0

# Install bootstrap 4 package
npm install bootstrap --save
npm install jquery --save-dev
npm install popper.js --save-dev

# Import below package or library in main.js
//---------- Import bootstrap4 -----------------
global.jQuery = jQuery
import jQuery from "jquery"
let bootstrap = require("bootstrap")
import "bootstrap/dist/css/bootstrap.css"
//---------- End for bootstrap4 -----------------

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
