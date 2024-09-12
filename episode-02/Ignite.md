
# Episode-02 [Ignite the App] 🚀

### Topics I learned in this episode: 

- Bundlers: A bundler is a tool that bundles our app, packages our app so that it can be shipped to production.
  
  Examples of Bundlers:
  
       1. Webpack 
       2. Vite
       3. Parcel









  **In create-react-app, the bundler used is webpack.**

- Package Manager: Bundlers are packages. If we want to use a package in our code, we have to use a package manager
![Episode-image](https://i.ibb.co/B64m5fX/Screenshot-2024-09-12-163554.png)

- #### Dependencies:
  Dependencies in a project are the external libraries, frameworks, or modules that your project relies on for additional functionality
  
  There are 2 types of Package or Dependencies that we can install
  
  - **Dev Dependencies:** These are only needed during the development phase, such as testing frameworks, bundlers, and linters (e.g., Webpack, ESLint, Jest)
   - **Normal Dependencies:** These are  used during the Production phase also.
   - **Transitive Dependencies:** These are the dependencies required by the dependencies you directly use in your project. For example, if Library A you use depends on Library B, then Library B is a transitive dependency of your project.

- #### Package v/s Dependencies:
  A package is like a toolbox with code and tools you can use in   your project, while a dependency is a specific tool from that   toolbox that your project needs to work properly.

- #### Package.json v/s package.lock.json
  In package. json we have information about generic version
  of installed packages whereas in package.lock.json we have
  information about the specific or exact version of installed packages


- #### node_modules:
  The node_modules folder contains all the dependencies and their   sub-dependencies required by a Node.js project. It is created by   npm when you run npm install and is not usually included in   version control, as it can be regenerated from package.json.

  >**Note: Never touch node_modules and package-lock.json** 

- #### Parcel-cache:
  Parcel speeds up builds by caching code. It creates a .  parcel-cache folder on the first build and uses this cache to make   subsequent builds much faster, leading to quicker development and   better efficiency.

- #### dist:
  The dist (short for "distribution") folder is where your final,   production-ready files are stored after building your project. It   contains the optimized, minified, and bundled versions of your code

- #### **Parcel features at a glance:**
   
   - Hot Module Replacement (HMR)
   - File Watcher Algorithm - C++
   - Bundling
   - Dev and production build
   - Super fast build algorithm
   - Caching while development 
   - Tree Shaking
   - Consistency Hashing Algorithm, etc.






- ### Configuring the Project:




 👉 To init the project

```bash
 npm init //It creates a package.json file
```

 👉 To install parcel use this command

```bash
npm install -D parcel 
```
- package.json:Package.json file is a configuration for NPM. Whatever packages our project needs, we install those packages using:
```bash
     npm install <packageName>
 ```

- To create Entry Point 
```bash
npx parcel index.html // Here, index.html is the entry point
```
- Use the below command to make a production build and the parcel will build all the production files to the dist folder.

```bash
npx parcel build index.html
```