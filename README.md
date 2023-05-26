- node.js => Javascript runtime engine (v8 engine)
- express => web framework for node.js
- typescript => language

** After cloning the repository (either frontend repository or backend repository), run `npm install` to install all the dependencies. **

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
- `npx tsc --init` will create the `tsconfig.json` file.
- Rename the `index.js` to `index.ts`, because now we can use typescript.
- Change the require to import statement.
   `import express, { Express, Request, Response } from 'express';
- Run this command to start the server : `npx ts-node index.ts`
- Install 2 packages: `nodemon` and `concurrently`:
    `npm install -D nodemon concurrently`
- Uncomment and change the "outDir" to "./dist" in the `tsconfig.json` file.

- Update package.json.
    Change the "main" to "dist/index.js".
    Add all the "scripts": { ... }.
- If you are facing issues, you can simply copy the files from the repo to your workspace, or clone the repo and run `npm install`.
- Run `npm run dev` to start the server.
- If your local setup has issues, got to https://stackblitz.com/github.com/nascarsayan/task-api/
- Make the code changes to create your routes
- While connecting the backend with frontend, you will face cors issues.
 If you open developer tools in the browser, you will see the error message in the console:
    ```
    Access to fetch from origin 'http://127.0.0.1:5173' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
    ```
- To fix this, enable cors in the express server by :
    + installing the package `cors`:

        `npm install cors; npm install -D @types/cors`;
    + adding the following code in the `index.ts` file:

        `import cors from 'cors';`
    `app.use(cors());`

// Setting up prisma ORM using SQLite
Reference: https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases-typescript-postgresql

- npm install prisma --save-dev
- npx prisma init

Change the schema file to use sqlite instead of postgresql
Reference: https://www.prisma.io/docs/concepts/database-connectors/sqlite
- Change `provider = "sqlite"` and `url      = "file:./dev.db"` 

We went forward with using cuid. About cuid: https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#cuid
- Add the schema for the models in your db. In our case, we only have the Task model.

- Run `npx prisma db push` to create the db and the tables.

- Check out these links to know how to use prisma client in your typescript project and express: 
    + https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases/querying-the-database-typescript-postgresql
    + https://www.prisma.io/express

- **To interact with the database from the browser, run `npx prisma studio`**. This will open a browser window with the prisma studio. You can add, edit, delete the data from the browser.

- **Try implementing the TODOs present inside the code.** 


### Create mongodb atlas database

- Select free tier
- Create username and password of your choice.
- If you generate random password, just copy it.

IP address whitelist : 0.0.0.0/0

username: admin
password: <generate and copy>
- Create the database
- Click on connect, select mongodb driver, copy connection string, it will look like:
`mongodb+srv://<username>:<password>@cluster0.ft8alfm.mongodb.net/?retryWrites=true&w=majority`

- Inside .env, set the value of DATABSE_URL=`mongodb+srv://<username>:<password>@cluster0.ft8alfm.mongodb.net/<db-name>?retryWrites=true&w=majority`

Give any db-name of your choice.

- Change the schema.prisma file to use mongodb instead of sqlite.
  + `provider = "mongodb"`
    `url      = env("DATABASE_URL")`

  + `id String @id @default(auto()) @map("_id") @db.ObjectId`

- Run `npx prisma db push` to create the db and the tables.
- Run `npx prisma studio` to open the prisma studio in the browser.

## Deploying the backend to railway.app

- Login to `railway.app`. Create an empty project.
- Install the railway cli : `npm i -g @railway/cli`
  If this installation was successful, you can substitute `npx @railway/cli` with `railway` in every command.
- Login using `npx @railway/cli login`.
- Link the project using `npx @railway/cli link`.
