# Sprinter
Rendering engine for runners

Before start with this repo you need to install:
```
$ npm install -g typescript webpack express typings tslint
```

After installation please link global TypeScript to your project

```
$ npm link typescript
```

then
```
$ npm install
```

# Build your app
it's primitive way, yes, but it works fine for now
```
$ webpack --progress --config config/webpack/index.js
$ webpack --progress --config config/webpack/server.js
$ DEBUG=express:* node ./build/server.js
```
Or you can use short commands via npm run:
```
$ npm run rebuild
$ npm run start:server
```

After that you can see your Application by this URL: http://localhost:8889

For code editing we are using [visual studio code](https://code.visualstudio.com/) (it's free)
some extensions you could found useful:
* vscode-todo-parser - to parse TODO's from code files
* tslint - for obvious reason :)
