# Namaste React 🚀

--document.createElement("tagname") => create HTML element or node
--React.createElement("tagname",{attributes},"child") (is actually)=> JS Object (which in turn)=> HTML element
--Note: JSX is not HTML inside JS.
---JSX => Babel transpiles it to React.createElement => ReactElement(JS Object) => HTML element.
---JSX is transpiled before it reaches the JS Engine which is done by parcel which in turn takes help of Babel.

## installing parcel(webpack)
👉 npm install -D parcel : -D indicates dev dependency which means is used in development and not in production.
👉 ^ vs ~ : ^ will upgrade to minor versions while ~ will upgrades only when major versions come
👉 Transitive Dependency: when a package depends on other module which in turn depends on another module
👉 no need to push 📁node_modules on github bcoz it can be regenerated if u hv package.json and package-lock.json through the help of "npm i" or "npm install" command
👉 📁dist contains production ready code
👉 no need to push 📁.parcel-cache and 📁dist on github bcoz it can be regenerated through the help of "npx parcel index.html" and "npx parcel build index.html" command
👉 browserslist -> used to list the browsers inside package.json on which our react-app can run
👉 scripts can be created under "scripts"-key in package.json and can be used to create dev and prod ready code instead of repeating "npx parcel index.html" and "npx parcel build index.html" again and again, instead we can use "npm run start"
or just "npm start" and "npm run build" to create prod ready code.

# Parcel
-Dev Build
-Local Server
-HMR -> Hot Module Replacement
-File Watching Algorithm - written in C++
-Caching-> Faster Builds
-Image Optimization
-Minification
-Bundling
-Compressing
-Consistent Hashing
-Code Splitting
-Differential Bundling -> support older browsers
-Diagnostic -> report errors beautifully
-Error Handling
-HTTPs
-Tree Shaking -> remove unused code
-different dev and prod bundles
