- node.js => Javascript runtime engine (v8 engine)
- express => web framework for node.js
- typescript => language

Steps:

Reference: https://blog.logrocket.com/how-to-set-up-node-typescript-express/

1. Create a directory for the project
2. Go to the directory and run `npm init --yes`
3. `npm install express`
4. Create the file `index.js` and write the sample express code
5. Run `node index.js` to start the server. Stop the server after ensuring the ip:post is accessible in the browser.
6. Install `npm i -D typescript @types/node @types/express`
7. `npx tsc --init`
7. Change the require to import statement.
   `import express, { Express, Request, Response } from 'express';
8. Run this command to start the server : `npx ts-node index.ts`
