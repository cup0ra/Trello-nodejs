# RS School REST service

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone {repository URL}
```

## Installing NPM modules

```
npm install
```

## Running application

```
npm start
```

After starting the app on port (4000 as default) you can open
in your browser OpenAPI documentation by typing http://localhost:4000/doc/.
For more information about OpenAPI/Swagger please visit https://swagger.io/.

## Testing

After application running open new terminal and enter:

To run all tests without authorization

```
npm test
```

To run only one of all test suites (users, boards or tasks)

```
npm test <suite name>
```

To run all test with authorization

```
npm run test:auth
```

To run only specific test suite with authorization (users, boards or tasks)

```
npm run test:auth <suite name>
```

## Development

If you're using VSCode, you can get a better developer experience from integration with [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions.

### Auto-fix and format

```
npm run lint
```

### Debugging in VSCode

Press <kbd>F5</kbd> to debug.

For more information, visit: https://code.visualstudio.com/docs/editor/debugging


### FASTIFY

```
  Scenarios launched:  249
  Scenarios completed: 249
  Requests completed:  1245
  Mean response/sec: 40.78
  Response time (msec):
    min: 7
    max: 340
    median: 15
    p95: 132.3
    p99: 199
  Scenario counts:
    Users module: 249 (100%)
  Codes:
    200: 996
    201: 249
   ```
   
   ### EXPRESS
   
   ```
     Scenarios launched:  246
  Scenarios completed: 246
  Requests completed:  1230
  Mean response/sec: 40.29
  Response time (msec):
    min: 7
    max: 403
    median: 16
    p95: 134
    p99: 257.4
  Scenario counts:
    Users module: 246 (100%)
  Codes:
    200: 984
    201: 246
   ```
