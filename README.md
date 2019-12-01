# Muse 
Muse is a Spotify clone app. Done as part of a team project for the course SOEN343

# To Deploy the Backend

## Step 1
[Install MondoDB Locally](https://github.com/mongodb/homebrew-brew)
```bash
$ brew tap mongodb/brew
$ brew install mongodb-community
```

## Step 2
Install IntelliJ Ultimate

## Step 3
Open the project's `pom.xml` file when importing project

## Step 4
Ensure some additional settings configured:

<img src="https://i.imgur.com/g6Hr8Sa.png"
alt="Spring Setting"
style="float: left; margin-right: 10px;" />

## Step 5
Run a basic MongoDB server locally in the foreground:
```
$ mongod --config /usr/local/etc/mongod.conf
```

###  Make sure that the MongoDB server is running in the foreground before continuing to the next 2 steps

## Step 6 
Run the MuseApplication:

<img src="https://i.imgur.com/JYJkYZz.png"
alt="Run"
style="float: left; margin-right: 10px;" />

## Step 7
If you are using regular code Editor  
Download npm, mongodb, maven, and the rest mentioned above. Then  

:
from root go inside the **back-end** folder and run these two commands to start the back-end server.
```mvn clean install``` then  
```mvn spring-boot:run```

from root go inside the **client** folder and run these two commands to start the front-end server
```npm install```
```npm run start```  
navigate to ***localhost:3000*** in your browser


