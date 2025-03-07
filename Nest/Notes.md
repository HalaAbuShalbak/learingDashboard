## Nest js

Is a backend framework built on node js , written with typescript , can use either express js or fastify for handeling HTTP server requests.

### Starting a Nest project

- Using nest CLI fromt he terminal , we can easily generate the project and run it
- Creating a project from scratch :
  - using the terminal , create the folder that will contain the project `mkdir projecName`
  - navigate to the project folder `cd projectName`
  - create a package.json file `touch package.json` which will be used to install the dependencies
  - install the basic dependencies:
    - @nestjs/common ; used for functions , classes , etc
    - @nestjs/core ;
    - @nestjs/platform-express ; handles HTTP requests
    - reflect -meta data ; help decorators work ( VERY IMP )
    - typescript ; used to write the nest app
  - Set up the TS compiler :
    - create a ts.config.json file in the root
    - add the configrations
    - `{ "compilerOptions": { "module": "common.js" , "target" :"es2017" ; "experimentalDecorators" :"true" , "emitDecoratorMetaData" :"true"}}`
  - Create nest module and controller ; min required parts to make a nest project
  - start the app usind `npx ts-node-dev src/main.ts`
- the file tree for this starter code

```
root
├── package.json
├── tsconfig.json
└── src
    └── main.ts
```
