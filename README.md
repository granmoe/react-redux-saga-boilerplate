Deployed at: http://boring-leakey-fc2cb2.netlify.com
# React, Styled-Components, Redux-Little-Router, Redux, Redux Saga, Babel, Webpack HMR boilerplate

## Features
* Webpack Hot Module Reloading (HMR)
* Optional Webpack Dashboard for useful terminal output while developing
* A fairly production-ready webpack config (dll, uglify, minify, image compression, image inlining) (tailor it further based on the needs of your project)

## Installation
* clone the repo
* npm install
* npm start to run dev server

## Webpack DLL
* this plugin caches vendor dependencies so they're not rebuilt on every hot reload!
* by default, the cache is **not** updated when you update a dependencies, so the old version will be served until you update the cache.
* to update the cache, run `npm run build:dll`
* if you want to add a new dependency to the cache, add it to dll.webpack.config.js
