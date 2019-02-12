# - react pose w/ express
### react-pose,express, react, babel, webpack
according to the tutorial on [qiita](https://qiita.com/akirakudo/items/77c3cd49e2bf39da79dd).
- install
```js
npm i -S @babel/core babel-loader @babel/preset-env @babel/preset-react @babel/register
npm i -S react react-dom
```
- web.config.js
```js
require('@babel/register'); // development.jsでES6を使えるようにする
module.exports = require('./dev');
```
- dev.js
```js
import path from 'path'

const src  = path.resolve(__dirname, 'public/src')
const dist = path.resolve(__dirname, 'public/js')

export default {
mode: 'development',

entry: src + '/act.jsx',
output: {
path: dist,
filename: 'act.js'
},

module: {
rules: [{
// test: /\.jsx$/,
exclude: /node_modules/,
loader: 'babel-loader'
}]
},

resolve: {
extensions: ['.js', '.jsx']
},
plugins: [  ]
}//def

```
