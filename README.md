# Namaste React 🚀

--document.createElement("tagname") => create HTML element or node<br/>
--React.createElement("tagname",{attributes},"child") (is actually)=> JS Object (which in turn)=> HTML element<br/>

--Note: JSX is not HTML inside JS.<br/>
---JSX => Babel transpiles it to React.createElement => ReactElement(JS Object) => HTML element.<br/>
---JSX is transpiled before it reaches the JS Engine which is done by parcel which in turn takes help of Babel.<br/>

--components<br/>
---Class Based - OLD<br/>
---Functional Based - NEW<br/>
---Component composition- when one component can be used inside another component<br/>

--JSX help in preventing cross-site attacks<br/>

## installing parcel(webpack)<br/>
👉 npm install -D parcel : -D indicates dev dependency which means is used in development and not in production.<br/>
👉 ^ vs ~ : ^ will upgrade to minor versions while ~ will upgrades only when major versions come<br/>
👉 Transitive Dependency: when a package depends on other module which in turn depends on another module<br/>
👉 no need to push 📁node_modules on github bcoz it can be regenerated if u hv package.json and package-lock.json through the help of "npm i" or "npm install" command<br/>
👉 📁dist contains production ready code<br/>
👉 no need to push 📁.parcel-cache and 📁dist on github bcoz it can be regenerated through the help of "npx parcel index.html" and "npx parcel build index.html" command<br/>
👉 browserslist -> used to list the browsers inside package.json on which our react-app can run<br/>
👉 scripts can be created under "scripts"-key in package.json and can be used to create dev and prod ready code instead of repeating "npx parcel index.html" and "npx parcel build index.html" again and again, instead we can use "npm run start"
or just "npm start" and "npm run build" to create prod ready code.<br/>
👉 Config-Driven_UI: controlling UI through backend data i.e UI is driven by data. <br/>
👉 if key is not specified inside map fn, then react will re-render all the list Objects(i.e whole list) but if key is specified only the newly added list Object(i.e list item) will be rendered while all the other list Objects will not be re-rendered.<br/>
👉 not using key (not-acceptable) <<<<<< using index as key <<<<<< using unique id as key (best).<br/>
👉 Two types of exports/imports => <br/>
1. default export/import:<br/>
    export default Component;<br/>
    import Component from "path";<br/>
2. named export/import:<br/>
    export const Component/variable;<br/>
    import {Component} from "path";<br/>
👉 Monolith v/s Microservices architecture=><br/>
--Monolith:-all the code components(services e.g Backend,UI,Auth etc.) are written inside a same bulky project.<br/>
--Microservices:- components(services e.g Backend,UI,Auth etc.) are written independently and share data with each other.<br/>
👉 page loads=> render => api call(successful) => re-render.<br/>
👉 fetch is not provided to us by javascript, it is provided by browsers.<br/>


# Parcel
-Dev Build<br/>
-Local Server<br/>
-HMR -> Hot Module Replacement<br/>
-File Watching Algorithm - written in C++<br/>
-Caching-> Faster Builds<br/>
-Image Optimization<br/>
-Minification<br/>
-Bundling<br/>
-Compressing<br/>
-Consistent Hashing<br/>
-Code Splitting<br/>
-Differential Bundling -> support older browsers<br/>
-Diagnostic -> report errors beautifully<br/>
-Error Handling<br/>
-HTTPs<br/>
-Tree Shaking -> remove unused code<br/>
-different dev and prod bundles<br/>
