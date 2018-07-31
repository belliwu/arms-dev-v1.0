# arms-dev-v1.0

> Assisted Reproductive Management System for TMUH

---

## Devlopement Setup

````bash
# Initial vue webpack arms-dev-v1.0
vue init webpack arms-dev-v1.0

# Install bootstrap 4 package
npm install bootstrap --save
npm install jquery --save-dev
npm install popper.js --save-dev
npm install sass-loader node-sass --save-dev

# Import below package or library in /build/webpack.base.conf.js
1. let webpack = require('webpack')
2  module.exports = {
    entry: {},
    output: {},
    resolve: {},
    module: {},
    plugins:
    [
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
             $: 'jquery',
        jquery: 'jquery'
      })
    ]
  }

# Import below package or library in main.js
1. import 'bootstrap/scss/bootstrap.scss'
2 import 'bootstrap'

# Install font-awesome package
1.Version 4.7:
npm install font-awesome@4.7.0 --save

2.Version 5.2: (free version)
npm install --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/vue-fontawesome

# Registers font-awesome in main.js of Vue
1. Version 4.7:
import 'font-awesome/css/font-awesome.min.css'

2.Version 5.2: (free version)
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee) --> choose coffee icons

Vue.component('font-awesome-icon', FontAwesomeIcon)

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
````

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
