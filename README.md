- node.js => Javascript runtime engine (v8 engine)
- express => web framework for node.js
- typescript => language

Steps:

Reference: https://blog.logrocket.com/how-to-set-up-node-typescript-express/

- Create a directory for the project
- Go to the directory and run `npm init --yes`
- `npm install express`
- Create the file `index.js` and write the sample express code.
You can copy the sample code from https://github.com/nascarsayan/task-api/blob/e17a9373f4df38ae3f538756854564580d55cd92/index.js
- Run `node index.js` to start the server. Stop the server after ensuring the http://localhost:3000/ is accessible in the browser.
- Install

    `npm i -D typescript @types/node @types/express`
- `npx tsc --init`
- Change the require to import statement.
   `import express, { Express, Request, Response } from 'express';
- Run this command to start the server : `npx ts-node index.ts`
- Install 2 packages: `nodemon` and `concurrently`:
    `npm install -D nodemon concurrently`
- Update package.json.
    Change the "main" to "dist/index.js".
    Add all the "scripts": { ... }.

- Run `npm run dev` to start the server.
