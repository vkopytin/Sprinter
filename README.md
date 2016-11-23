# Sprinter
Rendering engine for runners

Before start with this repo you need to install:
```
$ npm install -g typescript webpack

```
npm install typings --global
npm install -g tslint

After installation please link global TypeScript to your project

```
$ npm link typescript
```

for code editing we are using visual studio code (it's free)
some extensions you could found useful
* vscode-todo-parser - to parse TODO's from code files
* tslint - for obvious reason :)


#Build your app
it's primitive way, yes, but it works fine for now
```
$ webpack --progress --config config/webpack/index.js
$ webpack --progress --config config/webpack/server.js
$ DEBUG=express: * node ./build/server.js
```