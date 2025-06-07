## Nest js

Is a backend framework built on node js , written with typescript , can use either express js or fastify for handeling HTTP server requests.

### Starting a Nest project

- Using nest CLI fromt he terminal , we can easily generate the project module and controller and run it
- Creating a project from scratch :
  - using the terminal , create the folder that will contain the project `mkdir projecName`
  - navigate to the project folder `cd projectName`
  - create a package.json file `npm init -y` which will be used to install the dependencies
  - install the basic dependencies:
    - @nestjs/common ; used for functions , classes , etc
    - @nestjs/core ;
    - @nestjs/platform-express ; handles HTTP requests using Express which is the default or Fastify
    - reflect -meta data ; help decorators work ( VERY IMP )
    - typescript ; used to write the nest app
  - Set up the TS compiler :
    - create a ts.config.json file in the root
    - add the configrations
    ```
    { "compilerOptions": { "module": "common.js" , "target" :"es2017" ; "experimentalDecorators" :"true" , "emitDecoratorMetaData" :"true"}}
    ```
  - Create nest module and controller ; min required parts to make a nest project
  - start the app using `npx ts-node-dev src/main.ts`
- the file tree for this starter code

```
root
├── package.json
├── tsconfig.json
└── src
    └── main.ts
```

### Functionalities in NEST
- Pipe : For validating the data in the request
- Guard : For Authentication
- Controller : Routing for a specific function 
- Service : Run business logic
- Repository : Access Database
- Module : Group together code
- Filter : Handles erros that occur during rquest handeling
- Interceptors : Adss extra logic to request or response

### Naming convention 
- One class per file
- the Class name has to contain the type of the thing we are creating
- the name of the class and file should always match

 ```
example file name - app.controller.ts 
example function name - class AppController
```

