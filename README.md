# cloudviewer
# Angular Application in Heroku 
#Step 1
https://cloudviewer.herokuapp.com/cloudviewer/  <br>

Setup Your Angular Application  <br>

ng new loudpicviewer  <br>

Launch Application <br>
cd loudpicviewer <br>
ng serve <br>
http://localhost:4200. <br>



# Step 2
Create its GitHub repo and Push <br>
git remote add origin <new_github_repository_url> <br>
git add . <br>
git commit -m "first commit" <br>
git push -u origin master <br>

Then check your App on github  <br>


# Step 3 <br>
# The following are production-ready steps to easily and properly deploy your app on production server. <br>

Ensure you have the latest version of angular cli and angular compiler cli. <br>
Install them into your application by running this commands in your terminal:<br>
# npm install @angular/cli@latest @angular/compiler-cli --save-dev<br>
# check ng --version <br>

In your package.json, copy from devDependencies to dependencies <br>
"@angular/cli": "^8.3.0",<br>
"@angular/compiler": "~8.2.3",<br>


Create postinstall script in package.json <br>
Under “scripts”, add a postinstall command like so: <br>
"postinstall": "ng build --aot -prod" <br>
Or <br>
"heroku-postbuild": "ng build --prod" <br>

Add Node and NPM engines  <br>
You will need to add the Node and NPM engines that Heroku will use to run your application. <br>
"engines": {
    "node": "v10.14.1",
    "npm": "6.4.1"
  }  <br>
  
  
Copy typescript to dependencies. <br>
Copy "typescript": "~2.3.3" from devDependencies to dependencies to also inform Heroku what typescript version to use. <br>
Install Enhanced Resolve 3.3.0 <br>
Run the command npm install enhanced-resolve@3.3.0 --save-dev <br>
Install Server to run your app <br>
Locally we run ng serve from terminal to run our app on local browser. But we will need to setup an Express server that will run our production ready app (from dist folder created) only to ensure light-weight and fast loading.<br>
Install Express server by running:<br>
npm install express path --save<br>
Create a server.js file in the root of the application and paste the following code.<br>

Change start command<br>
In package.json, change the “start” command to node server.js so it becomes:<br>
"start": "node server.js"<br>
Here’s what the complete package.json looks like. Yours may contain more depending on your application-specific packages.<br>

server.js <br>

<p>
Push changes to GitHub:
git add .
git commit -m "updates to deploy to heroku"
git push
</p>  

## Setup Automatic Deployment from GitHub to Heroku  <br>
# Step 1 <br>
Create new app in heroku <br>
# step 2 <br>
In the Deploy menu, under Deployment method, select GitHub. If you have not done this already, it will ask you to login your github account so it can connect to it. <br>
Enter the name of the GitHub repository and click Search. Once the repo is shown below, click Connect. <br>


1)Automatic Deploys, select the master branch and click Enable Automatic Deploys.<br>
2)Manual Deploys, click Deploy Branch. This is to push our fresh code to heroku.<br>

Choose 1 option.<br>
create Pipeline for STAGING and PRODUCTION and so on. <br>










